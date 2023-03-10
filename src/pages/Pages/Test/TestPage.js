import React, { useState, useEffect } from 'react';
import { Button, Form, Label, Col, Container, Row, Input, TabContent, TabPane, Progress } from 'reactstrap';
import "./test-page-custom.css";
import { Link } from 'react-router-dom';


// Import Images
import macImg from "../../../assets/images/mac-img1.png";

import { findSomeQuestions } from "../../../helpers/fakebackend_helper";


import 'aos/dist/aos.css';

const TestPage = () => {


    // fetch question data

    const fetchData = async () => {
        findSomeQuestions().then(someQue => {
            setSomeQuestions(someQue);
        });
    };

    //progress

    const [activeTab, setactiveTab] = useState(1);
    const [someQuestions, setSomeQuestions] = useState([{
        answers: [],
        id: '',
    }]);
    // const [answers, setAnswers] = useState([{}]);
    const [progressbarvalue, setprogressbarvalue] = useState(0);
    const [passedSteps, setPassedSteps] = useState([1]);

    const [progressVal, setProgressVal] = useState(0);

    var progressVarStage = someQuestions.length;
    var maxInterVal = progressVarStage + 2;
    var interVal = 100 / (progressVarStage - 1)

    // {console.log("-----------------------------++=>", interVal)}


    useEffect(() => {
        fetchData();
        // setAnswers(someQuestions);
    }, []);

    useEffect(() => {
        // console.log("hh", someQuestions, someQuestions[0])
        // setAnswers(someQuestions);
    }, [someQuestions]);

    useEffect(() => {
        toggleTab(activeTab + 1, progressVal);
    }, [progressVal]);

    function toggleTab(tab, value) {
        if (activeTab !== tab) {
            var modifiedSteps = [...passedSteps, tab];

            if (tab >= 1 && tab <= maxInterVal) {
                setactiveTab(tab);
                setPassedSteps(modifiedSteps);
            }
        }
        setprogressbarvalue(value);
    }


    document.title = "Landing | Velzon - React Admin & Dashboard Template";
    return (
        <React.Fragment>


            <div className="layout-wrapper landing">
                <section className="section pb-0 hero-section" id="hero" style={{ height: '100vh' }}>
                    <div className="bg-overlay bg-overlay-pattern"></div>
                    <div className='container'>
                        <div className="page-content pt-2">
                            <Container>
                                <Row>
                                    <Col xl={12}>
                                        <Form action="#">
                                            <div className="text-center pt-3 pb-4 mb-1">
                                                <h1 style={{ color: "#4b38b3" }}>Sailor 1st</h1>
                                            </div>

                                            <div className="progress-nav mb-4">
                                                <Progress
                                                    value={progressbarvalue}
                                                    style={{ height: "4px" }}
                                                />
                                            </div>

                                            <TabContent activeTab={activeTab}>
                                                {someQuestions.map((que, key) => (
                                                    <TabPane tabId={key + 2} key={key}>
                                                        <Row>
                                                            <Col md={7} className='mt-5'>
                                                                <div style={{ position: 'relative' }}>
                                                                    <img src={macImg} alt="Mac " className="img-fluid test-field-img" />
                                                                </div>
                                                                <div className='test-detail'>
                                                                    <div className='test-problem justify-content-center'>
                                                                        <h1 className='mt-5'>{"Problem(" + (key + 1) + "/" + progressVarStage + ")"}</h1>
                                                                    </div><hr />
                                                                    <div className='test-problem-detail'>
                                                                        <p>{que.description}</p>
                                                                    </div>
                                                                </div>
                                                            </Col>

                                                            <Col md={5}>
                                                                <div className="p-4 pb-0 margin-top-custom">
                                                                    <Row>
                                                                        <Col lg={12}>
                                                                            {
                                                                                que.answers.map((ans, key_answer) => (
                                                                                    <div className="live-preview mt-2 mt-2" key={key_answer}>
                                                                                        <Input type="checkbox" className="btn-check" id={"btn-check-outlined" + ans.id.toString()}

                                                                                            onClick={() => {
                                                                                                console.log("the result is ", ans.result);
                                                                                            }} />
                                                                                        <Label className="btn btn-customize shadow-none fs-17" for={"btn-check-outlined" + ans.id.toString()}>{(key_answer + 1) + ". " + ans.description}</Label>
                                                                                    </div>
                                                                                ))
                                                                            }
                                                                        </Col>
                                                                    </Row>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                        <div className="d-flex align-items-start gap-3 mt-4">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-primary btn-label right ms-auto nexttab nexttab fs-20"
                                                                onClick={() => {

                                                                    setProgressVal(progressVal + interVal);
                                                                    // console.log("----------->", progressVal);

                                                                }}
                                                            >
                                                                <i className="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>
                                                                Next
                                                            </button>
                                                        </div>
                                                    </TabPane>
                                                ))}
                                                <TabPane tabId={maxInterVal}>
                                                    <div>
                                                        <div className="text-center" style={{ height: "425px" }}>
                                                            <div className="mb-4">
                                                                <lord-icon
                                                                    src="https://cdn.lordicon.com/lupuorrc.json"
                                                                    trigger="loop"
                                                                    colors="primary:#0ab39c,secondary:#405189"
                                                                    style={{ width: "200px", height: "200px" }}
                                                                ></lord-icon>
                                                            </div>
                                                            <h2>Congratulation!</h2>
                                                            <h3 className="text-muted pt-4">
                                                                Your score is <span style={{ fontSize: "30px" }}>10.</span> That's wonderful!
                                                            </h3>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex gap-3 mt-4 float-end">
                                                        <Link to="/">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-primary btn-label right ms-auto nexttab nexttab fs-20"
                                                            >
                                                                <i className="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>
                                                                Finish The Examination
                                                            </button>
                                                        </Link>
                                                    </div>
                                                </TabPane>
                                            </TabContent>
                                        </Form>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>

                </section>

            </div>



        </React.Fragment>
    );
};

export default TestPage;