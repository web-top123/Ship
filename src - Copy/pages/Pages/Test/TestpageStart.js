import React, { useState } from 'react';
import { Button, Card, CardBody, CardHeader, Label, Col, Container, Row, Input, Modal, ModalHeader,  Nav, NavItem, NavLink, TabContent, TabPane, UncontrolledTooltip  } from 'reactstrap';
import "./test-page-custom.css";

import { Link } from 'react-router-dom';
import classnames from "classnames";



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
                <section className="section pb-0 hero-section" id="hero">
                    <div className="bg-overlay bg-overlay-pattern"></div>
                    <div className='container'>
                        <div className="page-content pt-2">
                            <Container fluid>
                                <Row className="m-5">
                                    <Col lg={12}>
                                        <h2 className="select-title-customer m-5">Select Your Roll Below Items</h2>
                                        <div className="d-flex flex-wrap gap-2">
                                            <div className="live-preview">
                                                <div className="hstack gap-2 flex-wrap">
                                                    <Input type="radio" className="btn-check" name="optios" id="ption1"/>
                                                    <Label className="btn btn-outline-secondary" style={{border: 'none', }} for="ption1">Caption</Label>

                                                    <Input type="radio" className="btn-check" name="optios" id="ption2" />
                                                    <Label className="btn btn-outline-secondary" style={{border: 'none', }} for="ption2">Engineer manager</Label>

                                                    <Input type="radio" className="btn-check" name="optios" id="ption3"/>
                                                    <Label className="btn btn-outline-secondary" style={{border: 'none', }} for="ption3">Vice-caption</Label>

                                                    <Input type="radio" className="btn-check" name="optios" id="ption4" />
                                                    <Label className="btn btn-outline-secondary" style={{border: 'none', }} for="ption4">Bosun</Label>

                                                    <Input type="radio" className="btn-check" name="optios" id="ption5"/>
                                                    <Label className="btn btn-outline-secondary" style={{border: 'none', }} for="ption5">Vice-E.manager</Label>

                                                    <Input type="radio" className="btn-check" name="optios" id="ption6" />
                                                    <Label className="btn btn-outline-secondary" style={{border: 'none', }} for="ption6">Sailor</Label>

                                                    <Input type="radio" className="btn-check" name="optios" id="ption7"/>
                                                    <Label className="btn btn-outline-secondary" style={{border: 'none', }} for="ption7">Communicator</Label>

                                                    <Input type="radio" className="btn-check" name="optios" id="ption8" />
                                                    <Label className="btn btn-outline-secondary" style={{border: 'none', }} for="ption8">Bosun member</Label>

                                                    <Input type="radio" className="btn-check" name="optios" id="ption9" />
                                                    <Label className="btn btn-outline-secondary" style={{border: 'none', }} for="ption9">Engineer</Label>

                                                    <Input type="radio" className="btn-check" name="optios" id="ption10"/>
                                                    <Label className="btn btn-outline-secondary" style={{border: 'none', }} for="ption10">Electircian</Label>

                                                    <Input type="radio" className="btn-check" name="optios" id="ption11" />
                                                    <Label className="btn btn-outline-secondary" style={{border: 'none', }} for="ption11">2nd Engineer</Label>
                                                </div>
                                            </div>

                                        </div>
                                    </Col>
                                </Row>
                                <Row className="m-5">
                                    <Col lg={12}>
                                        <h2 className="select-title-customer m-5">Select Your Roll Degree</h2>
                                        <div className="d-flex flex-wrap gap-2">
                                            <Input type="radio" className="btn-check" name="options" id="option1"/>
                                            <Label className="btn btn-outline-secondary" style={{border: 'none', }} for="option1" size='lg'> Engineer 1st </Label>

                                            <Input type="radio" className="btn-check" name="options" id="option2"/>
                                            <Label className="btn btn-outline-secondary" style={{border: 'none', }} for="option2" size='lg'> Engineer 2nd </Label>

                                            <Input type="radio" className="btn-check" name="options" id="option3"/>
                                            <Label className="btn btn-outline-secondary" style={{border: 'none', }} for="option3" size='lg'> Engineer 3rd </Label>
                                        </div>
                                    </Col>
                                </Row>
                                <div className='align-self-center purchase-button-group'>
                                    <Button className="shadow-none me-4 fs-20" onClick={() => tog_togFirst()}>Purchase</Button>
                                </div>
                            </Container>
                        </div>
                    </div>

                </section>
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
                                        <span>pay: </span><p>100 Won</p>
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
                                        <span>pay: </span><p>100 Won</p>
                                    </div><br/><hr/>
                                    <div className="flex-grow-1 ms-2 purchase-border-bottom">
                                        <span>free valance: </span><p>none</p>
                                    </div><br/><hr/><br/>
                                </div>
                            </TabPane>
                        </TabContent>
                        <div className='purchase-button-group mb-5'>
                            <Button color="primary" onClick={() => { tog_togSecond(); tog_togFirst(false); }} style={{float: "left"}}>
                                buy
                            </Button>
                            <Button color="primary" onClick={() => { }} style={{float: "right"}}>
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
                            <NavLink href="test-test-page" className=' d-inline'>
                                <Button color="primary" className="ms-3" onClick={() => tog_togSecond(false)}>Yes</Button>
                            </NavLink>
                            <Button color="primary" className="me-3" onClick={() => tog_togSecond(false)}>No</Button>
                        </div>
                    </div>
                </div>

            </Modal>


        </React.Fragment>
    );
};

export default TestPage;