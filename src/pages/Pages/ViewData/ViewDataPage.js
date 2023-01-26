import React, { useState } from 'react';
import Navbar from '../../Landing/navbar';
import Footer from '../../Landing/footer';
import "../Test/test-page-custom.css";


import MetaTags from 'react-meta-tags';
import { Card, CardBody, Col, Container, Nav, NavItem, Row, NavLink, TabContent, TabPane, UncontrolledTooltip } from "reactstrap";
import { RoundedRibbonExample, RibbonShapeExample, FilledRibbonsExample, BoxedRibbonsExample, RibbonsExample, RibbonsHoverExample } from '../../BaseUi/UiRibbons/UiRibbonsCode';
import { Link } from 'react-router-dom';
import classnames from "classnames";

// Import Content
import UiContent from '../../../Components/Common/UiContent';
//import Components
import BreadCrumb from '../../../Components/Common/BreadCrumb';

// Import Images
import ship1 from "../../../assets/images/ship-images/ship1.png";
import ship2 from "../../../assets/images/ship-images/ship2.png";
import ship3 from "../../../assets/images/ship-images/ship3.png";
import ship4 from "../../../assets/images/ship-images/ship4.png";

import img4 from "../../../assets/images/small/img-4.jpg";




const ViewDataPage = () => {

    // Vertical Nav Tabs
    const [verticalTab, setverticalTab] = useState("1");
    const toggleVertical = (tab) => {
        if (verticalTab !== tab) {
            setverticalTab(tab);
        }
    };

    // Custom Hover Tabs
    const [customHoverTab, setcustomHoverTab] = useState("1");
    const customHovertoggle = (tab) => {
        if (customHoverTab !== tab) {
            setcustomHoverTab(tab);
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
                        <Row>
                            <Col xxl={12}>
                                <Row>
                                    <Col md={2} style={{minHeight: '42vw'}}>
                                        <Nav pills className="flex-column" id="v-pills-tab" style={{textAlign: 'center'}}>
                                            <NavItem>
                                                <NavLink
                                                    style={{ cursor: "pointer" }}
                                                    className={classnames({
                                                        "mb-4": true,
                                                        active: verticalTab === "1",
                                                    })}
                                                    onClick={() => {
                                                        toggleVertical("1");
                                                    }}
                                                    id="v-pills-home-tab"
                                                >
                                                    About Ships
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    style={{ cursor: "pointer" }}
                                                    className={classnames({
                                                        "mb-4": true,
                                                        active: verticalTab === "2",
                                                    })}
                                                    onClick={() => {
                                                        toggleVertical("2");
                                                    }}
                                                    id="v-pills-profile-tab"
                                                >
                                                    Load details
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    style={{ cursor: "pointer" }}
                                                    className={classnames({
                                                        "mb-4": true,
                                                        active: verticalTab === "3",
                                                    })}
                                                    onClick={() => {
                                                        toggleVertical("3");
                                                    }}
                                                    id="v-pills-messages-tab"
                                                >
                                                    products
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    style={{ cursor: "pointer" }}
                                                    className={classnames({
                                                        "mb-4": true,
                                                        active: verticalTab === "4",
                                                    })}
                                                    onClick={() => {
                                                        toggleVertical("4");
                                                    }}
                                                    id="v-pills-settings-tab"
                                                >
                                                    Goods
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    style={{ cursor: "pointer" }}
                                                    className={classnames({
                                                        "mb-4": true,
                                                        active: verticalTab === "5",
                                                    })}
                                                    onClick={() => {
                                                        toggleVertical("5");
                                                    }}
                                                    id="v-pills-settings-tab"
                                                >
                                                    upload data
                                                </NavLink>
                                            </NavItem>
                                        </Nav>
                                        <div className="live-preview">
                                            <Row className="g-3">
                                                <Col xxl={12}>
                                                    <div className="card ribbon-box border shadow-none mt-5">
                                                        <div className="card-body text-muted">
                                                            <span className="ribbon-three ribbon-three-primary"><span>News</span></span>
                                                            <p className="mb-3 mt-5">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio. Vivamus pretium nec odio cursus.</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>
                                    <Col md={8}>
                                        <TabContent activeTab={verticalTab} className="text-muted">
                                            <TabPane tabId="1" id="custom-hover-customere">
                                                <h6>Customer Details</h6>
                                                <div className="table-responsive">
                                                    <table className="table mb-0 self-item-center">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col"><span>No</span></th>
                                                                <th scope="col"><span>Ship Images</span></th>
                                                                <th scope="col"><span>planned Date</span></th>
                                                                <th scope="col"><span>planned Port</span></th>
                                                                <th scope="col"><span>Container Size</span></th>
                                                                <th scope="col"><span>Type of Ship</span></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row">1</th>
                                                                <td><span><img src={ship1} alt="" width="100px" className="rounded" /></span></td>
                                                                <td><span>2023. 1. 25</span></td>
                                                                <td><span><span>New Port</span></span></td>
                                                                <td><span>10, 019t</span></td>
                                                                <td><span>cargo ship</span></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">2</th>
                                                                <td><span><img src={ship2} alt="" width="100px" className="rounded" /></span></td>
                                                                <td><span>2023. 1. 24</span></td>
                                                                <td><span>New Port</span></td>
                                                                <td><span>20, 000t</span></td>
                                                                <td><span>ferry</span></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">3</th>
                                                                <td><span><img src={ship3} alt="" width="100px" className="rounded" /></span></td>
                                                                <td><span>2023. 2. 1</span></td>
                                                                <td><span>New Port</span></td>
                                                                <td><span>7, 019t</span></td>
                                                                <td><span>cruise ship</span></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">4</th>
                                                                <td><span><img src={ship4} alt="" width="100px" className="rounded" /></span></td>
                                                                <td><span>2023. 1. 28</span></td>
                                                                <td><span>New Port</span></td>
                                                                <td><span>8, 649t</span></td>
                                                                <td><span>cargo ship</span></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">5</th>
                                                                <td><span><img src={ship2} alt="" width="100px" className="rounded" /></span></td>
                                                                <td><span>2023 1. 23</span></td>
                                                                <td><span>New Port</span></td>
                                                                <td><span>10, 019t</span></td>
                                                                <td><span>cruise ship</span></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">6</th>
                                                                <td><span><img src={ship3} alt="" width="100px" className="rounded" /></span></td>
                                                                <td><span>2023 1. 25</span></td>
                                                                <td><span>New Port</span></td>
                                                                <td><span>10, 019t</span></td>
                                                                <td><span>cargo ship</span></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </TabPane>

                                            <TabPane tabId="2" id="custom-hover-customere">
                                                <h6>Description</h6>
                                                <div className="table-responsive">
                                                    <table className="table mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col"><span>Title</span></th>
                                                                <th scope="col"><span>Categories</span></th>
                                                                <th scope="col"><span>Author</span></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td><span>Building Web Apps With Wordpress</span></td>
                                                                <td><span>Web, Wordpress, Design</span></td>
                                                                <td><span>Lucia Victor</span></td>
                                                            </tr>
                                                            <tr>
                                                                <th>Information Technology</th>
                                                                <td><span>Management, Manager, Design</span></td>
                                                                <td><span>Arora Sumita</span></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </TabPane>

                                            <TabPane tabId="3" id="custom-hover-reviews">
                                                <h6>Customer Reviews</h6>
                                                <div className="table-responsive">
                                                    <table className="table mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col"><span>Name</span></th>
                                                                <th scope="col"><span>Location</span></th>
                                                                <th scope="col"><span>Amount</span></th>
                                                                <th scope="col"><span>Ratings</span></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td><span>Luke Brown</span></td>
                                                                <td><span>New York</span></td>
                                                                <td><span>$745</span></td>
                                                                <td><span>4.4 <i className="ri-star-s-fill ms-1 text-warning align-middle"></i></span></td>
                                                            </tr>
                                                            <tr>
                                                                <td><span>Matilda Walker</span></td>
                                                                <td><span>USA</span></td>
                                                                <td><span>$87.125</span></td>
                                                                <td><span>2.7 <i className="ri-star-s-fill ms-1 text-warning align-middle"></i></span></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </TabPane>

                                            <TabPane tabId="4" id="custom-hover-reviews">
                                                <h6>Customer Reviews</h6>
                                                <div className="table-responsive">
                                                    <table className="table mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col"><span>Name</span></th>
                                                                <th scope="col"><span>Location</span></th>
                                                                <th scope="col"><span>Amount</span></th>
                                                                <th scope="col"><span>Ratings</span></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td><span>Luke Brown</span></td>
                                                                <td><span>New York</span></td>
                                                                <td><span>$745</span></td>
                                                                <td><span>4.4 <i className="ri-star-s-fill ms-1 text-warning align-middle"></i></span></td>
                                                            </tr>
                                                            <tr>
                                                                <td><span>Matilda Walker</span></td>
                                                                <td><span>USA</span></td>
                                                                <td><span>$87.125</span></td>
                                                                <td><span>2.7 <i className="ri-star-s-fill ms-1 text-warning align-middle"></i></span></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </TabPane>
                                        </TabContent>
                                    </Col>
                                    <Col md={2}>
                                        <h2 style={{textAlign: 'center'}}>Popular Data</h2>
                                        <div className="d-flex mb-2">
                                            <div className="flex-shrink-0">
                                                <img src={ship1} alt="" width="100px" className="rounded" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <p className="mb-0">recommandor</p>
                                                <p className="mb-0">kkg427</p>
                                            </div>
                                        </div>
                                        <div className="d-flex mb-2">
                                            <div className="flex-shrink-0">
                                                <img src={ship2} alt="" width="100px" className="rounded" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <p className="mb-0">recommandor</p>
                                                <p className="mb-0">ssj427</p>
                                            </div>
                                        </div>
                                        <h2 style={{textAlign: 'center'}}>Best contributor</h2>
                                        <Row>
                                            <Col md={6}>
                                                <i className='ri-user-line'></i><span>kkj212</span>
                                            </Col>
                                            <Col md={6}>
                                                <i className='ri-user-line'></i><span>kkj212</span>
                                            </Col>
                                            <Col md={6}>
                                                <i className='ri-user-line'></i><span>kkj212</span>
                                            </Col>
                                            <Col md={6}>
                                                <i className='ri-user-line'></i><span>kkj212</span>
                                            </Col>
                                            <Col md={6}>
                                                <i className='ri-user-line'></i><span>kkj212</span>
                                            </Col>
                                            <Col md={6}>
                                                <i className='ri-user-line'></i><span>kkj212</span>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>

                </section>
                <Footer />
            </div>
        </React.Fragment>
    );
};

export default ViewDataPage;