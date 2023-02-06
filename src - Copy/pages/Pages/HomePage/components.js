import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

// Import Images
import img1 from "./assets/background1.png";
import img2 from "./assets/background1.png";
import img3 from "./assets/background1.png";





import dataservice from "./assets/dataservice.png";

import mypage from "./assets/mypage.png";
import questionservice from "./assets/questionservice.png";
import software from "./assets/software.png";
import testfield from "./assets/testfield.png";
import studyfield from "./assets/studyfield.png";





const Features = () => {
    return (
        <React.Fragment>


            <section className="section" id="data_service">
                <Container>

                {/* <img src={dataservice}style={{width:"40px"}} className="m-3"></img> */}
                    <Row className="align-items-center  pt-lg-5 gy-4">
                        <Col lg={6} sm={7} className="col-10 mx-auto">
                            <div>
                                <img src={img3} alt="" className="img-fluid" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="text-muted ps-lg-5">
                                {/* <h5 className="fs-12 text-uppercase text-success">structure</h5> */}
                                <h4 className="mb-3">Data Service</h4>
                                <p className="mb-4">used to describe something that is known about or known to be true because there are many documents that describe it,
                                    prove it, etc.</p>

                                <div className="vstack gap-2">
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0 me-2">
                                            <div className="avatar-xs icon-effect">
                                                <div className="avatar-title bg-transparent text-success rounded-circle h2">
                                                    <i className="ri-check-fill"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1">
                                            <p className="mb-0">Dynamic Conetnt</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0 me-2">
                                            <div className="avatar-xs icon-effect">
                                                <div className="avatar-title bg-transparent text-success rounded-circle h2">
                                                    <i className="ri-check-fill"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1">
                                            <p className="mb-0">Setup plugin's information.</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0 me-2">
                                            <div className="avatar-xs icon-effect">
                                                <div className="avatar-title bg-transparent text-success rounded-circle h2">
                                                    <i className="ri-check-fill"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1">
                                            <p className="mb-0">Themes customization information</p>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                    <Link to="/register" className="btn btn-primary">Learn More <i className="ri-arrow-right-line align-middle ms-1"></i></Link>
                                </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="section bg-light" id="question_service">
                <Container>
                    <Row className="align-items-center gy-4">
                        <Col lg={6} className="order-2 order-lg-1">
                            <div className="text-muted">
                                {/* <h5 className="fs-12 text-uppercase text-success">Design</h5> */}
                                <h4 className="mb-3">Question Service</h4>
                                <p className="mb-4 ff-secondary">Quality Dashboards (QD) is a condition-specific, actionable web-based application for quality reporting and population
                                    management that is integrated into the Electronic Health Record (EHR).</p>

                                <Row>
                                    <Col sm={5}>
                                        <div className="vstack gap-2">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0 me-2">
                                                    <div className="avatar-xs icon-effect">
                                                        <div
                                                            className="avatar-title bg-transparent text-success rounded-circle h2">
                                                            <i className="ri-check-fill"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h5 className="fs-14 mb-0">Ecommerce</h5>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0 me-2">
                                                    <div className="avatar-xs icon-effect">
                                                        <div
                                                            className="avatar-title bg-transparent text-success rounded-circle h2">
                                                            <i className="ri-check-fill"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h5 className="fs-14 mb-0">Analytics</h5>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0 me-2">
                                                    <div className="avatar-xs icon-effect">
                                                        <div
                                                            className="avatar-title bg-transparent text-success rounded-circle h2">
                                                            <i className="ri-check-fill"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h5 className="fs-14 mb-0">CRM</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm={5}>
                                        <div className="vstack gap-2">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0 me-2">
                                                    <div className="avatar-xs icon-effect">
                                                        <div
                                                            className="avatar-title bg-transparent text-success rounded-circle h2">
                                                            <i className="ri-check-fill"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h5 className="fs-14 mb-0">Crypto</h5>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0 me-2">
                                                    <div className="avatar-xs icon-effect">
                                                        <div
                                                            className="avatar-title bg-transparent text-success rounded-circle h2">
                                                            <i className="ri-check-fill"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h5 className="fs-14 mb-0">Projects</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>

                                <div className="mt-4">
                                    <Link to="/register" className="btn btn-primary">Learn More <i className="ri-arrow-right-line align-middle ms-1"></i></Link>
                                </div>
                            </div>
                        </Col>

                        <Col lg={6} sm={7} className="col-10 ms-auto order-1 order-lg-2">
                            <div>
                                <img src={img2} alt="" className="img-fluid" />
                            </div>
                        </Col>
                    </Row>


                </Container>
            </section>
            <section className="section" id="software">
                <Container>


                    <Row className="align-items-center pt-lg-5 gy-4">
                        <Col lg={6} sm={7} className="col-10 mx-auto">
                            <div>
                                <img src={img3} alt="" className="img-fluid" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="text-muted ps-lg-5">
                                {/* <h5 className="fs-12 text-uppercase text-success">structure</h5> */}
                                <h4 className="mb-3">Software</h4>
                                <p className="mb-4">used to describe something that is known about or known to be true because there are many documents that describe it,
                                    prove it, etc.</p>

                                <div className="vstack gap-2">
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0 me-2">
                                            <div className="avatar-xs icon-effect">
                                                <div className="avatar-title bg-transparent text-success rounded-circle h2">
                                                    <i className="ri-check-fill"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1">
                                            <p className="mb-0">Dynamic Conetnt</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0 me-2">
                                            <div className="avatar-xs icon-effect">
                                                <div className="avatar-title bg-transparent text-success rounded-circle h2">
                                                    <i className="ri-check-fill"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1">
                                            <p className="mb-0">Setup plugin's information.</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0 me-2">
                                            <div className="avatar-xs icon-effect">
                                                <div className="avatar-title bg-transparent text-success rounded-circle h2">
                                                    <i className="ri-check-fill"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1">
                                            <p className="mb-0">Themes customization information</p>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                    <Link to="/register" className="btn btn-primary">Learn More <i className="ri-arrow-right-line align-middle ms-1"></i></Link>
                                </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="section bg-light" id="study_field">
                <Container>
                    <Row className="align-items-center gy-4">
                        <Col lg={6} className="order-2 order-lg-1">
                            <div className="text-muted">
                                {/* <h5 className="fs-12 text-uppercase text-success">Design</h5> */}
                                <h4 className="mb-3">Study Field</h4>
                                <p className="mb-4 ff-secondary">Quality Dashboards (QD) is a condition-specific, actionable web-based application for quality reporting and population
                                    management that is integrated into the Electronic Health Record (EHR).</p>

                                <Row>
                                    <Col sm={5}>
                                        <div className="vstack gap-2">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0 me-2">
                                                    <div className="avatar-xs icon-effect">
                                                        <div
                                                            className="avatar-title bg-transparent text-success rounded-circle h2">
                                                            <i className="ri-check-fill"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h5 className="fs-14 mb-0">Ecommerce</h5>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0 me-2">
                                                    <div className="avatar-xs icon-effect">
                                                        <div
                                                            className="avatar-title bg-transparent text-success rounded-circle h2">
                                                            <i className="ri-check-fill"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h5 className="fs-14 mb-0">Analytics</h5>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0 me-2">
                                                    <div className="avatar-xs icon-effect">
                                                        <div
                                                            className="avatar-title bg-transparent text-success rounded-circle h2">
                                                            <i className="ri-check-fill"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h5 className="fs-14 mb-0">CRM</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm={5}>
                                        <div className="vstack gap-2">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0 me-2">
                                                    <div className="avatar-xs icon-effect">
                                                        <div
                                                            className="avatar-title bg-transparent text-success rounded-circle h2">
                                                            <i className="ri-check-fill"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h5 className="fs-14 mb-0">Crypto</h5>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0 me-2">
                                                    <div className="avatar-xs icon-effect">
                                                        <div
                                                            className="avatar-title bg-transparent text-success rounded-circle h2">
                                                            <i className="ri-check-fill"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h5 className="fs-14 mb-0">Projects</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>

                                <div className="mt-4">
                                    <Link to="/register" className="btn btn-primary">Learn More <i className="ri-arrow-right-line align-middle ms-1"></i></Link>
                                </div>
                            </div>
                        </Col>

                        <Col lg={6} sm={7} className="col-10 ms-auto order-1 order-lg-2">
                            <div>
                                <img src={img2} alt="" className="img-fluid" />
                            </div>
                        </Col>
                    </Row>


                </Container>
            </section>
            <section className="section" id="test_field">
                <Container>


                    <Row className="align-items-center pt-lg-5 gy-4">
                        <Col lg={6} sm={7} className="col-10 mx-auto">
                            <div>
                                <img src={img3} alt="" className="img-fluid" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="text-muted ps-lg-5">
                                {/* <h5 className="fs-12 text-uppercase text-success">structure</h5> */}
                                <h4 className="mb-3">Test Field</h4>
                                <p className="mb-4">used to describe something that is known about or known to be true because there are many documents that describe it,
                                    prove it, etc.</p>

                                <div className="vstack gap-2">
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0 me-2">
                                            <div className="avatar-xs icon-effect">
                                                <div className="avatar-title bg-transparent text-success rounded-circle h2">
                                                    <i className="ri-check-fill"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1">
                                            <p className="mb-0">Dynamic Conetnt</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0 me-2">
                                            <div className="avatar-xs icon-effect">
                                                <div className="avatar-title bg-transparent text-success rounded-circle h2">
                                                    <i className="ri-check-fill"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1">
                                            <p className="mb-0">Setup plugin's information.</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0 me-2">
                                            <div className="avatar-xs icon-effect">
                                                <div className="avatar-title bg-transparent text-success rounded-circle h2">
                                                    <i className="ri-check-fill"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1">
                                            <p className="mb-0">Themes customization information</p>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                    <Link to="/register" className="btn btn-primary">Learn More <i className="ri-arrow-right-line align-middle ms-1"></i></Link>
                                </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="section bg-light" id="my_page">
                <Container>
                    <Row className="align-items-center gy-4">
                        <Col lg={6} className="order-2 order-lg-1">
                            <div className="text-muted">
                                {/* <h5 className="fs-12 text-uppercase text-success">Design</h5> */}
                                <h4 className="mb-3">My Page</h4>
                                <p className="mb-4 ff-secondary">Quality Dashboards (QD) is a condition-specific, actionable web-based application for quality reporting and population
                                    management that is integrated into the Electronic Health Record (EHR).</p>

                                <Row>
                                    <Col sm={5}>
                                        <div className="vstack gap-2">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0 me-2">
                                                    <div className="avatar-xs icon-effect">
                                                        <div
                                                            className="avatar-title bg-transparent text-success rounded-circle h2">
                                                            <i className="ri-check-fill"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h5 className="fs-14 mb-0">Ecommerce</h5>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0 me-2">
                                                    <div className="avatar-xs icon-effect">
                                                        <div
                                                            className="avatar-title bg-transparent text-success rounded-circle h2">
                                                            <i className="ri-check-fill"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h5 className="fs-14 mb-0">Analytics</h5>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0 me-2">
                                                    <div className="avatar-xs icon-effect">
                                                        <div
                                                            className="avatar-title bg-transparent text-success rounded-circle h2">
                                                            <i className="ri-check-fill"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h5 className="fs-14 mb-0">CRM</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm={5}>
                                        <div className="vstack gap-2">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0 me-2">
                                                    <div className="avatar-xs icon-effect">
                                                        <div
                                                            className="avatar-title bg-transparent text-success rounded-circle h2">
                                                            <i className="ri-check-fill"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h5 className="fs-14 mb-0">Crypto</h5>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0 me-2">
                                                    <div className="avatar-xs icon-effect">
                                                        <div
                                                            className="avatar-title bg-transparent text-success rounded-circle h2">
                                                            <i className="ri-check-fill"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h5 className="fs-14 mb-0">Projects</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>

                                <div className="mt-4">
                                    <Link to="/register" className="btn btn-primary">Learn More <i className="ri-arrow-right-line align-middle ms-1"></i></Link>
                                </div>
                            </div>
                        </Col>

                        <Col lg={6} sm={7} className="col-10 ms-auto order-1 order-lg-2">
                            <div>
                                <img src={img2} alt="" className="img-fluid" />
                            </div>
                        </Col>
                    </Row>


                </Container>
            </section>
          


        </React.Fragment>
    );
};

export default Features;