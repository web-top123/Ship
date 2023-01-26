import React, { useState } from 'react';
import Navbar from '../../Landing/navbar';
import Footer from '../../Landing/footer';
import { Button, Card, CardBody, CardHeader, Col, Container, Row, Input, Modal, ModalHeader,  Nav, NavItem, NavLink, TabContent, TabPane, UncontrolledTooltip  } from 'reactstrap';
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

AOS.init({
    easing: 'ease-out-back',
    duration: 3000,
    anchorPlacement: 'top-bottom',
});

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

    document.title = "Landing | Velzon - React Admin & Dashboard Template";
    return (
        <React.Fragment>

            <div className="layout-wrapper landing">
                <Navbar />
                <section className="section pb-0 hero-section" id="hero">
                    <div className="bg-overlay bg-overlay-pattern"></div>
                    <div className='container-fluid'>
                        <div className="page-content pt-2">
                            <Container fluid>
                                <Row>
                                    <Col lg={12}>
                                        <div className="live-preview">
                                            <div>
                                                <Row>
                                                    <Col lg={7}>
                                                        <div className="p-4 pb-0 mt-4">
                                                            <img src={macImg} alt="Mac " className="img-fluid test-field-img" />
                                                            <Row className="justify-content-center">
                                                                <div className='test-detail'>
                                                                    <p className='test-roll-caption'>Sailor (first degree)</p>
                                                                    <div className='test-problem'>
                                                                        <div>problem:</div>
                                                                        <div> nsvtex reciver accept the recived info, according to stage of ()</div>
                                                                    </div>
                                                                    <div className='test-solution'>
                                                                        <div>solution:</div>
                                                                        <div> In first saving, and then printing</div>
                                                                    </div>
                                                                </div>
                                                            </Row>
                                                        </div>
                                                    </Col>

                                                    <Col lg={5}>
                                                        <div className="p-4 pb-0 mt-4">
                                                            <Row>
                                                                <Col lg={12}>
                                                                    <div className="live-preview">
                                                                        <div className="d-flex flex-wrap gap-2 align-items-center justify-content-center mb-2">
                                                                            <Button color="success" className="w-lg f-3" onClick={() => tog_togFirst()}>Buy problems</Button>
                                                                        </div>
                                                                    </div>
                                                                    <div className="live-preview">
                                                                        <div className="d-flex flex-wrap gap-2">
                                                                            <Button className="btn-soft-secondary mt-4 w-100 shadow-none f-3"> Save and printing </Button>
                                                                        </div>
                                                                    </div>
                                                                    <div className="live-preview">
                                                                        <div className="d-flex flex-wrap gap-2">
                                                                            <Button className="btn-soft-secondary mt-4 w-100 shadow-none f-3"> In first printing and then saving </Button>
                                                                        </div>
                                                                    </div>
                                                                    <div className="live-preview">
                                                                        <div className="d-flex flex-wrap gap-2">
                                                                            <Button className="btn-soft-secondary mt-4 w-100 shadow-none f-3"> In first saving and then printing </Button>
                                                                        </div>
                                                                    </div>
                                                                    <div className="live-preview">
                                                                        <div className="d-flex flex-wrap gap-2">
                                                                            <Button className="btn-soft-secondary mt-4 w-100 shadow-none f-3"> Not saving, only printing </Button>
                                                                        </div>
                                                                    </div>
                                                                    <div className="live-preview">
                                                                        <div className="d-flex flex-wrap gap-2 align-items-center justify-content-center">
                                                                            <Button color="success" className="w-lg y mt-4 f-3">Confirm score</Button>
                                                                        </div>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                            {/* <Row className="justify-content-center">
                                                                <Col sm={10} md={8}>
                                                                    <div data-aos="zoom-out">
                                                                        <img src={macImg} alt="Mac " className="img-fluid" />
                                                                    </div>
                                                                </Col>
                                                            </Row> */}
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Col>
                                    {/* <Col lg={1} className="p-0">
                                        <div className="live-preview">
                                            <div className="d-block float-end">
                                                <Button color="primary" className="btn-animation" data-text="Exchange field"> <span>Exchange field</span> </Button>
                                            </div><br /><br />
                                            <div className="d-block float-end">
                                                <Button color="primary" className="btn-animation" data-text="Software service"> <span>Software service</span> </Button>
                                            </div><br /><br />
                                            <div className="d-block float-end">
                                                <Button color="primary" className="btn-animation" data-text="Introduction"> <span>Introduction</span> </Button>
                                            </div><br /><br />
                                            <div className="d-block float-end">
                                                <Button color="primary" className="btn-animation" data-text="lottery field"> <span>lottery field</span> </Button>
                                            </div><br /><br />
                                            <div className="d-block float-end">
                                                <Button color="primary" className="btn-animation" data-text="First page"> <span>First page</span> </Button>
                                            </div><br /><br />
                                        </div>
                                    </Col> */}
                                </Row>

                                <Row className="mt-5">
                                    <Col lg={10}>
                                        <div className="d-flex flex-wrap gap-2">
                                            <Button className="btn-soft-secondary shadow-none" size="lg"> Caption </Button>
                                            <Button className="btn-soft-secondary shadow-none" size="lg"> Engineer manager </Button>
                                            <Button className="btn-soft-secondary shadow-none" size="lg"> Vice-caption </Button>
                                            <Button className="btn-soft-secondary shadow-none" size="lg"> Bosun </Button>
                                            <Button className="btn-soft-secondary shadow-none" size="lg"> Vice-E.manager </Button>
                                            <Button className="btn-soft-secondary shadow-none" size="lg"> Sailer </Button>
                                            <Button className="btn-soft-secondary shadow-none" size="lg"> Communicator </Button>
                                            <Button className="btn-soft-secondary shadow-none" size="lg"> Bosun member </Button>
                                            <Button className="btn-soft-secondary shadow-none" size="lg"> Engineer </Button>
                                            <Button className="btn-soft-secondary shadow-none" size="lg"> Electircian </Button>
                                            <Button className="btn-soft-secondary shadow-none" size="lg"> Sub-Enginner </Button>
                                        </div>
                                    </Col>
                                    <Col lg={2}>
                                        <div className="d-flex flex-wrap gap-2 float-end">
                                            <Button color="danger" outline className="btn btn-ghost-danger shadow-none" size="lg">News</Button>
                                        </div>
                                    </Col>
                                </Row>

                            </Container>
                        </div>
                    </div>

                </section>
                <Footer />
            </div>
            <Modal
                isOpen={modal_togFirst}
                toggle={() => {
                    tog_togFirst();
                }}
                id="firstmodal"
                centered
            >
                <ModalHeader className='purchase-setting-header'>
                    Purchase
                    <Button
                        type="button"
                        className="btn-close"
                        onClick={() => {
                            setmodal_togFirst(false);
                        }}
                        aria-label="Close"

                    >

                    </Button>
                </ModalHeader>
                <div className="modal-body text-center">
                    <div className=" ">
                        <h4  className="mb-4">You can purchase with real or free score</h4>
                        <Nav tabs className="nav nav-tabs nav-border-top nav-border-top-primary mb-3">
                            <NavItem>
                                <NavLink style={{ cursor: "pointer" }} className={classnames({ active: topBorderjustifyTab === "1", })} onClick={() => { topBorderJustifytoggle("1"); }} >
                                    Real score
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink style={{ cursor: "pointer" }} className={classnames({ active: topBorderjustifyTab === "2", })} onClick={() => { topBorderJustifytoggle("2"); }} >
                                    Free score
                                </NavLink>
                            </NavItem>
                        </Nav>

                        <TabContent activeTab={topBorderjustifyTab} className="text-muted">
                            <TabPane tabId="1" id="nav-border-top-home">
                                <div className="d-block purchase-pro-setting mt-5">
                                    <div className="flex-grow-1 ms-2 purchase-border-bottom">
                                        <span>current: </span><p>100 Won</p>
                                    </div><br/><hr/>
                                    <div className="flex-grow-1 ms-2 purchase-border-bottom">
                                        <span>pay: </span><p style={{position: "relative", top: "-3px"}}><Input type="number" id="basiInput purchase-input-sl" style={{width: "30px", display: "inline", direction: "rtl", padding: "3px"}}/>100 Won</p>
                                    </div><br/><hr/>
                                    <div className="flex-grow-1 ms-2 purchase-border-bottom">
                                        <span>real valance: </span><p>none</p>
                                    </div><br/><hr/><br/>
                                </div>
                            </TabPane>

                            <TabPane tabId="2" id="nav-border-top-home">
                                <div className="d-block purchase-pro-setting mt-5">
                                    <div className="flex-grow-1 ms-2 purchase-border-bottom">
                                        <span>current: </span><p>100 Won</p>
                                    </div><br/><hr/>
                                    <div className="flex-grow-1 ms-2 purchase-border-bottom">
                                        <span>pay: </span><p style={{position: "relative", top: "-3px"}}><Input type="number" id="basiInput purchase-input-sl" style={{width: "30px", display: "inline", direction: "rtl", padding: "3px"}}/>100 Won</p>
                                    </div><br/><hr/>
                                    <div className="flex-grow-1 ms-2 purchase-border-bottom">
                                        <span>free valance: </span><p>none</p>
                                    </div><br/><hr/><br/>
                                </div>
                            </TabPane>
                        </TabContent>
                        <div className='purchase-button-group mb-5'>
                            <Button color="warning" onClick={() => { tog_togSecond(); tog_togFirst(false); }} style={{float: "left"}}>
                                buy
                            </Button>
                            <Button color="success" onClick={() => { }} style={{float: "right"}}>
                                charging score
                            </Button>
                        </div><br/><br/>
                    </div>
                </div>
            </Modal>

            <Modal
                isOpen={modal_togSecond}
                toggle={() => {
                    tog_togSecond();
                }}
                id="secondmodal"
                centered
            >
                <div className="modal-body text-center p-3">
                    <div className="mt-4 pt-3 pb-3">
                        <h4 className="mb-3">Do you purchase really?</h4>
                        <div className="hstack gap-2 justify-content-center">
                            <Button color="primary" className="ms-3 me-3" onClick={() => { tog_togFirst(); tog_togSecond(false); }}>
                                Confirm again
                            </Button>
                            <Button color="success" className="ms-3 me-3" onClick={() => tog_togSecond(false)}>Yes</Button>
                            <Button color="warning" className="ms-3 me-3" onClick={() => tog_togSecond(false)}>No</Button>
                        </div>
                    </div>
                </div>

            </Modal>


        </React.Fragment>
    );
};

export default TestPage;