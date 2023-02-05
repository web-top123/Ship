import React, { useState } from 'react';
import { Button, Card, Form, Label, CardBody, CardHeader, Col, Container, Row, Input, Modal, ModalHeader, Nav, NavItem, NavLink, TabContent, TabPane, UncontrolledTooltip } from 'reactstrap';
import "./test-page-custom.css";

import { Link } from 'react-router-dom';
import classnames from "classnames";

// Import Images
import macImg from "../../../assets/images/mac-img1.png";


import AOS from 'aos';
import 'aos/dist/aos.css';
import { ZoomInExample, ZoomOutExample } from '../../AdvanceUi/UiAnimation/UiAnimationCode';
import Cover404 from '../../AuthenticationInner/Errors/Cover404';

// Import Content
import UiContent from '../../../Components/Common/UiContent';
//import Components
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import PreviewCardHeader from '../../../Components/Common/PreviewCardHeader';
import { DefaultModalExample, CenteredModalExample, GridsModalExample, StaticBackdropModalExample, TogglebetweenExample, TooltipModalExample, ScrollableModalExample, VaryingModalExample, OptionalModalExample, FullscreenResponsiveExample, AnimationModalExample, PositionModalExample } from '../../BaseUi/UiModals/UiModalCode';


const TestPage = () => {
    // Modal
    const [modal_togFirst, setmodal_togFirst] = useState(false);
    function tog_togFirst() {
        setmodal_togFirst(!modal_togFirst);
    }

    const [modal_togSecond, setmodal_togSecond] = useState(false);
    function tog_togSecond() {
        setmodal_togSecond(!modal_togSecond);
    }

    // Border Top Nav
    const [topBorderTab, settopBorderTab] = useState("1");
    const topBordertoggle = (tab) => {
        if (topBorderTab !== tab) {
            settopBorderTab(tab);
        }
    };

    // Border Top Nav Justified Tabs
    const [topBorderjustifyTab, settopBorderjustifyTab] = useState("1");
    const topBorderJustifytoggle = (tab) => {
        if (topBorderjustifyTab !== tab) {
            settopBorderjustifyTab(tab);
        }
    };

    //form tags

    const [selectedCountry, setselectedCountry] = useState(null);
    const [selectedState, setselectedState] = useState(null);
    const [activeTab, setactiveTab] = useState(1);
    const [passedSteps, setPassedSteps] = useState([1]);
    const [modal, setModal] = useState(false);
    const [deletemodal, setDeleteModal] = useState(false);

    const toggledeletemodal = () => {
        setDeleteModal(!deletemodal);
    };

    const togglemodal = () => {
        setModal(!modal);
    };

    function handleSelectCountry(selectedCountry) {
        setselectedCountry(selectedCountry);
    }

    function handleSelectState(selectedState) {
        setselectedState(selectedState);
    }

    function toggleTab(tab) {
        if (activeTab !== tab) {
            var modifiedSteps = [...passedSteps, tab];

            if (tab >= 1 && tab <= 4) {
                setactiveTab(tab);
                setPassedSteps(modifiedSteps);
            }
        }
    }


    document.title = "Landing | Velzon - React Admin & Dashboard Template";
    return (
        <React.Fragment>

            <div className="layout-wrapper landing">
                <section className="section pb-0 hero-section" id="hero" style={{ height: '100vh' }}>
                    <div className="bg-overlay bg-overlay-pattern"></div>
                    <div className='container'>
                        <div className="page-content pt-2">
                            <Container fluid>
                                <Row>
                                    <Col lg={12}>
                                        <div className="live-preview">
                                            <div className='test-page-item'>
                                                <h2 className='test-roll-caption pb-2'>Sailor (1st degree)</h2><hr />
                                                {/* <Row className='test-problems-detail'>
                                                    <Col lg={7} className="p-4 pb-0 mt-4">
                                                        <div style={{ position: 'relative' }}>
                                                            <img src={macImg} alt="Mac " className="img-fluid test-field-img" />
                                                        </div>
                                                    </Col>

                                                    <Col lg={5}>
                                                        <div className="p-4 pb-0 margin-top-custom">
                                                            <Row>
                                                                <Col lg={12}>
                                                                    <div className="live-preview mt-2 mt-2">
                                                                        <div className="d-flex flex-wrap gap-2">
                                                                            <Button className="btn-soft-primary mt-2 w-100 shadow-none f-3"> Save and printing </Button>
                                                                        </div>
                                                                    </div>
                                                                    <div className="live-preview mt-2">
                                                                        <div className="d-flex flex-wrap gap-2">
                                                                            <Button className="btn-soft-primary mt-2 w-100 shadow-none f-3"> In first printing and then saving </Button>
                                                                        </div>
                                                                    </div>
                                                                    <div className="live-preview mt-2">
                                                                        <div className="d-flex flex-wrap gap-2">
                                                                            <Button className="btn-soft-primary mt-2 w-100 shadow-none f-3"> In first saving and then printing </Button>
                                                                        </div>
                                                                    </div>
                                                                    <div className="live-preview mt-2">
                                                                        <div className="d-flex flex-wrap gap-2">
                                                                            <Button className="btn-soft-primary mt-2 w-100 shadow-none f-3"> Not saving, only printing </Button>
                                                                        </div>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                    </Col>
                                                    <div className="live-preview">
                                                        <div className="d-flex flex-wrap gap-2 align-items-end justify-content-end">
                                                            <Button color="success" className="w-lg y mt-4 f-3" size='lg'>Confirm score</Button>
                                                        </div>
                                                    </div>
                                                </Row> */}
                                                <Form action="#" className='display-change-content'>
                                                    <TabContent activeTab={activeTab} className='display-change-detail'>
                                                        <TabPane tabId={1} id="pills-bill-info">
                                                            <Row>
                                                                <Col md={7} className='mt-5'>
                                                                    <div style={{position: 'relative'}}>
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
                                                                                    <div className="d-flex flex-wrap gap-2">
                                                                                        <Button className="btn-soft-primary mt-2 w-100 shadow-none f-3"> Save and printing </Button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="live-preview mt-2">
                                                                                    <div className="d-flex flex-wrap gap-2">
                                                                                        <Button className="btn-soft-primary mt-2 w-100 shadow-none f-3"> In first printing and then saving </Button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="live-preview mt-2">
                                                                                    <div className="d-flex flex-wrap gap-2">
                                                                                        <Button className="btn-soft-primary mt-2 w-100 shadow-none f-3"> In first saving and then printing </Button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="live-preview mt-2">
                                                                                    <div className="d-flex flex-wrap gap-2">
                                                                                        <Button className="btn-soft-primary mt-2 w-100 shadow-none f-3"> Not saving, only printing </Button>
                                                                                    </div>
                                                                                </div>
                                                                            </Col>
                                                                        </Row>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </TabPane>
                                                        <TabPane tabId={1} id="pills-bill-info" className='display-change-button'>
                                                            <div className="d-flex align-items-start gap-3 mt-3">
                                                                <button
                                                                type="button"
                                                                className="btn btn-primary btn-label right ms-auto nexttab btn-lg"
                                                                onClick={() => {
                                                                    toggleTab(activeTab + 1);
                                                                }}
                                                                >
                                                                <i className="ri-truck-line label-icon align-middle fs-16 ms-2"></i>
                                                                Confirm my score
                                                                </button>
                                                            </div>

                                                        </TabPane>


                                                        <TabPane tabId={2}>
                                                            <Row>
                                                                <Col md={7} className='mt-5'>
                                                                    <div style={{position: 'relative'}}>
                                                                        <img src={macImg} alt="Mac " className="img-fluid test-field-img" />
                                                                    </div>
                                                                    <div className='test-detail'>
                                                                        <div className='test-problem justify-content-center mt-5'>
                                                                            <h1>Congratulation!</h1>
                                                                        </div><br /><br />
                                                                        <div className='test-problem-detail' style={{textAlign: 'center'}}>
                                                                            <p> Your Score is 10 marks </p>
                                                                        </div>
                                                                    </div>
                                                                    {/* <div className='test-detail'>
                                                                        <div className="text-center">
                                                                            <div className='test-problem justify-content-center'>
                                                                                <h1>Congratulation!</h1>
                                                                            </div>
                                                                            <div className='test-problem-detail'>
                                                                                <p> Your Score is 10 marks</p>
                                                                            </div>
                                                                        </div>
                                                                    </div> */}
                                                                </Col>
                                                                <Col md={5}>
                                                                    <div className="mb-4">
                                                                        <lord-icon
                                                                            src="https://cdn.lordicon.com/lupuorrc.json"
                                                                            trigger="loop"
                                                                            colors="primary:#0ab39c,secondary:#405189"
                                                                            style={{ width: "70%", height: "70%", float: "right", marginTop: "15%"}}
                                                                        ></lord-icon>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </TabPane>
                                                        <TabPane tabId={2}>
                                                            <div className="d-flex align-items-start gap-3 mt-4 display-change-button">
                                                                <Link to="/">
                                                                    <button
                                                                        type="button"
                                                                        className="btn btn-primary btn-label right ms-auto nexttab btn-lg" 
                                                                        // onClick={() => {
                                                                        //     toggleTab(activeTab + 1);
                                                                        // }}
                                                                    >
                                                                        <i className="ri-bank-card-line label-icon align-middle fs-16 ms-2"></i>
                                                                        Finish Exam
                                                                    </button>
                                                                </Link>
                                                            </div>
                                                        </TabPane>
                                                    </TabContent>
                                                </Form>
                                            </div>
                                        </div>
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