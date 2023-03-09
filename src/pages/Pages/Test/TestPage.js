import React, { useState } from 'react';
import { Button, Form, Label, Col, Container, Row, Input, TabContent, TabPane, Progress } from 'reactstrap';
import "./test-page-custom.css";
import { Link } from 'react-router-dom';


// Import Images
import macImg from "../../../assets/images/mac-img1.png";


import 'aos/dist/aos.css';

const TestPage = () => {

    //progress

    const [activeTab, setactiveTab] = useState(1);
    const [progressbarvalue, setprogressbarvalue] = useState(0);
    const [passedSteps, setPassedSteps] = useState([1]);

    function toggleTab(tab, value) {
        if (activeTab !== tab) {
            var modifiedSteps = [...passedSteps, tab];

            if (tab >= 1 && tab <= 6) {
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
                                                <h1 style={{color: "#4b38b3"}}>Sailor 1st</h1>
                                            </div>

                                            <div className="progress-nav mb-4">
                                                <Progress
                                                    value={progressbarvalue}
                                                    style={{ height: "4px" }}
                                                />
                                            </div>

                                            <TabContent activeTab={activeTab}>
                                                <TabPane tabId={1}>
                                                    <Row>
                                                        <Col md={7} className='mt-5'>
                                                            <div style={{ position: 'relative' }}>
                                                                <img src={macImg} alt="Mac " className="img-fluid test-field-img" />
                                                            </div>
                                                            <div className='test-detail'>
                                                                <div className='test-problem justify-content-center'>
                                                                    <h1 className='mt-5'>Problem(7/15)</h1>
                                                                </div><hr />
                                                                <div className='test-problem-detail'>
                                                                    <p> NSVTXT reciver accept the recived info, according to stage of ()</p>
                                                                </div>
                                                            </div>
                                                        </Col>

                                                        <Col md={5}>
                                                            <div className="p-4 pb-0 margin-top-custom">
                                                                <Row>
                                                                    <Col lg={12}>
                                                                        <div className="live-preview mt-2 mt-2">
                                                                            <Input type="checkbox" className="btn-check" id="btn-check-outlined" />
                                                                            <Label className="btn btn-customize shadow-none fs-17" for="btn-check-outlined"> 1. Save and printing </Label>
                                                                        </div>
                                                                        <div className="live-preview mt-2 mt-2">
                                                                            <Input type="checkbox" className="btn-check" id="btn-check-outlined2" />
                                                                            <Label className="btn btn-customize shadow-none fs-17" for="btn-check-outlined2"> 2. In first printing and then saving  </Label>
                                                                        </div>
                                                                        <div className="live-preview mt-2 mt-2">
                                                                            <Input type="checkbox" className="btn-check" id="btn-check-outlined3" />
                                                                            <Label className="btn btn-customize shadow-none fs-17" for="btn-check-outlined3"> 3. In first saving and then printing </Label>
                                                                        </div>
                                                                        <div className="live-preview mt-2 mt-2">
                                                                            <Input type="checkbox" className="btn-check" id="btn-check-outlined4" />
                                                                            <Label className="btn btn-customize shadow-none fs-17" for="btn-check-outlined4"> 4. Not saving, only printing </Label>
                                                                        </div>
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
                                                                toggleTab(activeTab + 1, 25);
                                                            }}
                                                        >
                                                            <i className="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>
                                                            Next
                                                        </button>
                                                    </div>
                                                </TabPane>

                                                <TabPane tabId={2}>
                                                    <Row>
                                                        <Col md={7} className='mt-5'>
                                                            <div style={{ position: 'relative' }}>
                                                                <img src={macImg} alt="Mac " className="img-fluid test-field-img" />
                                                            </div>
                                                            <div className='test-detail'>
                                                                <div className='test-problem justify-content-center'>
                                                                    <h1 className='mt-5'>Problem(7/15)</h1>
                                                                </div><hr />
                                                                <div className='test-problem-detail'>
                                                                    <p> NSVTXT reciver accept the recived info, according to stage of ()</p>
                                                                </div>
                                                            </div>
                                                        </Col>

                                                        <Col md={5}>
                                                            <div className="p-4 pb-0 margin-top-custom">
                                                                <Row>
                                                                    <Col lg={12}>
                                                                        <div className="live-preview mt-2 mt-2">
                                                                            <Input type="checkbox" className="btn-check" id="btn-check-outlined5" />
                                                                            <Label className="btn btn-customize shadow-none fs-17" for="btn-check-outlined5"> 1. Save and printing </Label>
                                                                        </div>
                                                                        <div className="live-preview mt-2 mt-2">
                                                                            <Input type="checkbox" className="btn-check" id="btn-check-outlined6" />
                                                                            <Label className="btn btn-customize shadow-none fs-17" for="btn-check-outlined6"> 2. In first printing and then saving  </Label>
                                                                        </div>
                                                                        <div className="live-preview mt-2 mt-2">
                                                                            <Input type="checkbox" className="btn-check" id="btn-check-outlined7" />
                                                                            <Label className="btn btn-customize shadow-none fs-17" for="btn-check-outlined7"> 3. In first saving and then printing </Label>
                                                                        </div>
                                                                        <div className="live-preview mt-2 mt-2">
                                                                            <Input type="checkbox" className="btn-check" id="btn-check-outlined8" />
                                                                            <Label className="btn btn-customize shadow-none fs-17" for="btn-check-outlined8"> 4. Not saving, only printing </Label>
                                                                        </div>
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
                                                                toggleTab(activeTab + 1, 50);
                                                            }}
                                                        >
                                                            <i className="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>
                                                            Next
                                                        </button>
                                                    </div>
                                                </TabPane>
                                                <TabPane tabId={3}>
                                                    <Row>
                                                        <Col md={7} className='mt-5'>
                                                            <div style={{ position: 'relative' }}>
                                                                <img src={macImg} alt="Mac " className="img-fluid test-field-img" />
                                                            </div>
                                                            <div className='test-detail'>
                                                                <div className='test-problem justify-content-center'>
                                                                    <h1 className='mt-5'>Problem(7/15)</h1>
                                                                </div><hr />
                                                                <div className='test-problem-detail'>
                                                                    <p> NSVTXT reciver accept the recived info, according to stage of ()</p>
                                                                </div>
                                                            </div>
                                                        </Col>

                                                        <Col md={5}>
                                                            <div className="p-4 pb-0 margin-top-custom">
                                                                <Row>
                                                                    <Col lg={12}>
                                                                        <div className="live-preview mt-2 mt-2">
                                                                            <Input type="checkbox" className="btn-check" id="btn-check-outline9" />
                                                                            <Label className="btn btn-customize shadow-none fs-17 " for="btn-check-outline9"> 1. Save and printing </Label>
                                                                        </div>
                                                                        <div className="live-preview mt-2 mt-2">
                                                                            <Input type="checkbox" className="btn-check" id="btn-check-outline10" />
                                                                            <Label className="btn btn-customize shadow-none fs-17" for="btn-check-outline10"> 2. In first printing and then saving  </Label>
                                                                        </div>
                                                                        <div className="live-preview mt-2 mt-2">
                                                                            <Input type="checkbox" className="btn-check" id="btn-check-outlined11" />
                                                                            <Label className="btn btn-customize shadow-none fs-17" for="btn-check-outlined11"> 3. In first saving and then printing </Label>
                                                                        </div>
                                                                        <div className="live-preview mt-2 mt-2">
                                                                            <Input type="checkbox" className="btn-check" id="btn-check-outlined12" />
                                                                            <Label className="btn btn-customize shadow-none fs-17" for="btn-check-outlined12"> 4. Not saving, only printing </Label>
                                                                        </div>
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
                                                                toggleTab(activeTab + 1, 75);
                                                            }}
                                                        >
                                                            <i className="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>
                                                            Next
                                                        </button>
                                                    </div>
                                                </TabPane>
                                                <TabPane tabId={4}>
                                                    <Row>
                                                        <Col md={7} className='mt-5'>
                                                            <div style={{ position: 'relative' }}>
                                                                <img src={macImg} alt="Mac " className="img-fluid test-field-img" />
                                                            </div>
                                                            <div className='test-detail'>
                                                                <div className='test-problem justify-content-center'>
                                                                    <h1 className='mt-5'>Problem(7/15)</h1>
                                                                </div><hr />
                                                                <div className='test-problem-detail'>
                                                                    <p> NSVTXT reciver accept the recived info, according to stage of ()</p>
                                                                </div>
                                                            </div>
                                                        </Col>

                                                        <Col md={5}>
                                                            <div className="p-4 pb-0 margin-top-custom">
                                                                <Row>
                                                                    <Col lg={12}>
                                                                        <div className="live-preview mt-2 mt-2">
                                                                            <Input type="checkbox" className="btn-check" id="btn-check-outlined13" />
                                                                            <Label className="btn btn-customize shadow-none fs-17" for="btn-check-outlined13"> 1. Save and printing </Label>
                                                                        </div>
                                                                        <div className="live-preview mt-2 mt-2">
                                                                            <Input type="checkbox" className="btn-check" id="btn-check-outlined14" />
                                                                            <Label className="btn btn-customize shadow-none fs-17" for="btn-check-outlined14"> 2. In first printing and then saving  </Label>
                                                                        </div>
                                                                        <div className="live-preview mt-2 mt-2">
                                                                            <Input type="checkbox" className="btn-check" id="btn-check-outlined15" />
                                                                            <Label className="btn btn-customize shadow-none fs-17" for="btn-check-outlined15"> 3. In first saving and then printing </Label>
                                                                        </div>
                                                                        <div className="live-preview mt-2 mt-2">
                                                                            <Input type="checkbox" className="btn-check" id="btn-check-outlined16" />
                                                                            <Label className="btn btn-customize shadow-none fs-17" for="btn-check-outlined16"> 4. Not saving, only printing </Label>
                                                                        </div>
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
                                                                toggleTab(activeTab + 1, 100);
                                                            }}
                                                        >
                                                            <i className="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>
                                                            Next
                                                        </button>
                                                    </div>
                                                </TabPane>
                                                <TabPane tabId={5}>
                                                    <Row>
                                                        <Col md={7} className='mt-5'>
                                                            <div style={{ position: 'relative' }}>
                                                                <img src={macImg} alt="Mac " className="img-fluid test-field-img" />
                                                            </div>
                                                            <div className='test-detail'>
                                                                <div className='test-problem justify-content-center'>
                                                                    <h1 className='mt-5'>Problem(7/15)</h1>
                                                                </div><hr />
                                                                <div className='test-problem-detail'>
                                                                    <p> NSVTXT reciver accept the recived info, according to stage of ()</p>
                                                                </div>
                                                            </div>
                                                        </Col>

                                                        <Col md={5}>
                                                            <div className="p-4 pb-0 margin-top-custom">
                                                                <Row>
                                                                    <Col lg={12}>
                                                                        <div className="live-preview mt-2 mt-2">
                                                                            <Input type="checkbox" className="btn-check" id="btn-check-outlined17" />
                                                                            <Label className="btn btn-customize shadow-none fs-17" for="btn-check-outlined17"> 1. Save and printing </Label>
                                                                        </div>
                                                                        <div className="live-preview mt-2 mt-2">
                                                                            <Input type="checkbox" className="btn-check" id="btn-check-outlined18" />
                                                                            <Label className="btn btn-customize shadow-none fs-17" for="btn-check-outlined18"> 2. In first printing and then saving  </Label>
                                                                        </div>
                                                                        <div className="live-preview mt-2 mt-2">
                                                                            <Input type="checkbox" className="btn-check" id="btn-check-outlined19" />
                                                                            <Label className="btn btn-customize shadow-none fs-17" for="btn-check-outlined19"> 3. In first saving and then printing </Label>
                                                                        </div>
                                                                        <div className="live-preview mt-2 mt-2">
                                                                            <Input type="checkbox" className="btn-check" id="btn-check-outlined20" />
                                                                            <Label className="btn btn-customize shadow-none fs-17" for="btn-check-outlined20"> 4. Not saving, only printing </Label>
                                                                        </div>
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
                                                                toggleTab(activeTab + 1, 100);
                                                            }}
                                                        >
                                                            <i className="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>
                                                            Next
                                                        </button>
                                                    </div>
                                                </TabPane>

                                                <TabPane tabId={6}>
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
                                                                Your score is <span style={{fontSize: "30px"}}>10.</span> That's wonderful!
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