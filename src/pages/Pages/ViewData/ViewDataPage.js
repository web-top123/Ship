import React, { useState } from 'react';
import Navbar from '../../Landing/navbar';
import Footer from '../../Landing/footer';
import "../Test/test-page-custom.css";


import MetaTags from 'react-meta-tags';
import { Card, CardBody, Col, Container, Input, Label, Nav, NavItem, Row, NavLink, TabContent, TabPane, Button, UncontrolledTooltip,  Spinner, Pagination, PaginationItem, PaginationLink, Breadcrumb, BreadcrumbItem } from "reactstrap";
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
import CoverPasswReset from '../../AuthenticationInner/PasswordReset/CoverPasswReset';




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

    // Default Tabs
    const [activeTab, setactiveTab] = useState("1");
    const toggle = (tab) => {
        if (activeTab !== tab) {
            setactiveTab(tab);
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
                                        <Nav pills className="flex-column ps-5 pe-5" id="v-pills-tab" style={{textAlign: 'center'}}>
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
                                                        <div className="card-body text-muted" style={{height: '45vh'}}>
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
                                                            <tr style={{position: 'relative'}}>
                                                                <th scope="row"><span>1</span></th>
                                                                <td><span><img src={ship1} alt="" width="100vw" className="rounded" /></span></td>
                                                                <td><span>2023. 1. 25</span></td>
                                                                <td><span>New Port</span></td>
                                                                <td><span>10, 019t</span></td>
                                                                <td><span>cargo ship</span></td>
                                                                <div className='addtional-item p-0'>Visit times: <span className='me-5 ms-3'>37 times</span> <Button color="secondary" outline className='shadow-none pe-3 ps-3 pt-0 pb-0'> <span className='pt-1'><span>More</span></span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevrons-right "><g><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></g></svg> </Button></div>
                                                            </tr>
                                                            <tr style={{position: 'relative'}}>
                                                                <th scope="row"><span>2</span></th>
                                                                <td><span><img src={ship2} alt="" width="100vw" className="rounded" /></span></td>
                                                                <td><span>2023. 1. 25</span></td>
                                                                <td><span>New Port</span></td>
                                                                <td><span>10, 019t</span></td>
                                                                <td><span>cargo ship</span></td>
                                                                <div className='addtional-item p-0'>Visit times: <span className='me-5 ms-3'>37 times</span> <Button color="secondary" outline className='shadow-none pe-3 ps-3 pt-0 pb-0'> <span className='pt-1'><span>More</span></span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevrons-right "><g><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></g></svg> </Button></div>
                                                            </tr>
                                                            <tr style={{position: 'relative'}}>
                                                                <th scope="row"><span>3</span></th>
                                                                <td><span><img src={ship3} alt="" width="100vw" className="rounded" /></span></td>
                                                                <td><span>2023. 1. 25</span></td>
                                                                <td><span>New Port</span></td>
                                                                <td><span>10, 019t</span></td>
                                                                <td><span>cargo ship</span></td>
                                                                <div className='addtional-item p-0'>Visit times: <span className='me-5 ms-3'>37 times</span> <Button color="secondary" outline className='shadow-none pe-3 ps-3 pt-0 pb-0'> <span className='pt-1'><span>More</span></span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevrons-right "><g><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></g></svg> </Button></div>
                                                            </tr>
                                                            <tr style={{position: 'relative'}}>
                                                                <th scope="row"><span>4</span></th>
                                                                <td><span><img src={ship4} alt="" width="100vw" className="rounded" /></span></td>
                                                                <td><span>2023. 1. 25</span></td>
                                                                <td><span>New Port</span></td>
                                                                <td><span>10, 019t</span></td>
                                                                <td><span>cargo ship</span></td>
                                                                <div className='addtional-item p-0'>Visit times: <span className='me-5 ms-3'>37 times</span> <Button color="secondary" outline className='shadow-none pe-3 ps-3 pt-0 pb-0'> <span className='pt-1'><span>More</span></span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevrons-right "><g><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></g></svg> </Button></div>
                                                            </tr>
                                                            <tr style={{position: 'relative'}}>
                                                                <th scope="row"><span>5</span></th>
                                                                <td><span><img src={ship1} alt="" width="100vw" className="rounded" /></span></td>
                                                                <td><span>2023. 1. 25</span></td>
                                                                <td><span>New Port</span></td>
                                                                <td><span>10, 019t</span></td>
                                                                <td><span>cargo ship</span></td>
                                                                <div className='addtional-item p-0'>Visit times: <span className='me-5 ms-3'>37 times</span> <Button color="secondary" outline className='shadow-none pe-3 ps-3 pt-0 pb-0'> <span className='pt-1'><span>More</span></span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevrons-right "><g><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></g></svg> </Button></div>
                                                            </tr>
                                                            <tr style={{position: 'relative'}}>
                                                                <th scope="row"><span>6</span></th>
                                                                <td><span><img src={ship2} alt="" width="100vw" className="rounded" /></span></td>
                                                                <td><span>2023. 1. 25</span></td>
                                                                <td><span>New Port</span></td>
                                                                <td><span>10, 019t</span></td>
                                                                <td><span>cargo ship</span></td>
                                                                <div className='addtional-item p-0'>Visit times: <span className='me-5 ms-3'>37 times</span> <Button color="secondary" outline className='shadow-none pe-3 ps-3 pt-0 pb-0'> <span className='pt-1'><span>More</span></span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevrons-right "><g><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></g></svg> </Button></div>
                                                            </tr>
                                                            <tr style={{position: 'relative'}}>
                                                                <th scope="row"><span>7</span></th>
                                                                <td><span><img src={ship3} alt="" width="100vw" className="rounded" /></span></td>
                                                                <td><span>2023. 1. 25</span></td>
                                                                <td><span>New Port</span></td>
                                                                <td><span>10, 019t</span></td>
                                                                <td><span>cargo ship</span></td>
                                                                <div className='addtional-item p-0'>Visit times: <span className='me-5 ms-3'>37 times</span> <Button color="secondary" outline className='shadow-none pe-3 ps-3 pt-0 pb-0'> <span className='pt-1'><span>More</span></span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevrons-right "><g><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></g></svg> </Button></div>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <Row>
                                                    <Col lg={12}>
                                                        <Pagination className='view-data-pagination mt-4'>
                                                            <span className='mt-2 me-2'>SearchResults: <span>22</span></span>
                                                            <PaginationItem> <PaginationLink to="#"> <i className="mdi mdi-chevron-left" /> Previous </PaginationLink> </PaginationItem>
                                                            <PaginationItem> <PaginationLink to="#"> 1 </PaginationLink> </PaginationItem>
                                                            <PaginationItem> <PaginationLink to="#"> 2 </PaginationLink> </PaginationItem>
                                                            <PaginationItem> <PaginationLink to="#"> 3 </PaginationLink> </PaginationItem>
                                                            <PaginationItem> <PaginationLink to="#"> Next <i className="mdi mdi-chevron-right" /></PaginationLink> </PaginationItem>
                                                        </Pagination>
                                                    </Col>
                                                </Row>
                                            </TabPane>

                                            <TabPane tabId="3" id="custom-hover-customere">
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
                                                            <tr style={{position: 'relative'}}>
                                                                <th scope="row"><span>1</span></th>
                                                                <td><span>2023. 1. 25</span></td>
                                                                <td><span><img src={ship4} alt="" width="100vw" className="rounded" /></span></td>
                                                                <td><span>New Port</span></td>
                                                                <td><span>10, 019t</span></td>
                                                                <td><span>cargo ship</span></td>
                                                                <div className='addtional-item p-0'>Visit times: <span className='me-5 ms-3'>37 times</span> <Button color="secondary" outline className='shadow-none pe-3 ps-3 pt-0 pb-0'> <span className='pt-1'><span>More</span></span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevrons-right "><g><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></g></svg> </Button></div>
                                                            </tr>
                                                            <tr style={{position: 'relative'}}>
                                                                <th scope="row"><span>2</span></th>
                                                                <td><span>2023. 1. 25</span></td>
                                                                <td><span><img src={ship2} alt="" width="100vw" className="rounded" /></span></td>
                                                                <td><span>New Port</span></td>
                                                                <td><span>10, 019t</span></td>
                                                                <td><span>cargo ship</span></td>
                                                                <div className='addtional-item p-0'>Visit times: <span className='me-5 ms-3'>37 times</span> <Button color="secondary" outline className='shadow-none pe-3 ps-3 pt-0 pb-0'> <span className='pt-1'><span>More</span></span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevrons-right "><g><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></g></svg> </Button></div>
                                                            </tr>
                                                            <tr style={{position: 'relative'}}>
                                                                <th scope="row"><span>3</span></th>
                                                                <td><span>2023. 1. 25</span></td>
                                                                <td><span><img src={ship3} alt="" width="100vw" className="rounded" /></span></td>
                                                                <td><span>New Port</span></td>
                                                                <td><span>10, 019t</span></td>
                                                                <td><span>cargo ship</span></td>
                                                                <div className='addtional-item p-0'>Visit times: <span className='me-5 ms-3'>37 times</span> <Button color="secondary" outline className='shadow-none pe-3 ps-3 pt-0 pb-0'> <span className='pt-1'><span>More</span></span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevrons-right "><g><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></g></svg> </Button></div>
                                                            </tr>
                                                            <tr style={{position: 'relative'}}>
                                                                <th scope="row"><span>4</span></th>
                                                                <td><span>2023. 1. 25</span></td>
                                                                <td><span><img src={ship4} alt="" width="100vw" className="rounded" /></span></td>
                                                                <td><span>New Port</span></td>
                                                                <td><span>10, 019t</span></td>
                                                                <td><span>cargo ship</span></td>
                                                                <div className='addtional-item p-0'>Visit times: <span className='me-5 ms-3'>37 times</span> <Button color="secondary" outline className='shadow-none pe-3 ps-3 pt-0 pb-0'> <span className='pt-1'><span>More</span></span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevrons-right "><g><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></g></svg> </Button></div>
                                                            </tr>
                                                            <tr style={{position: 'relative'}}>
                                                                <th scope="row"><span>5</span></th>
                                                                <td><span>2023. 1. 25</span></td>
                                                                <td><span><img src={ship1} alt="" width="100vw" className="rounded" /></span></td>
                                                                <td><span>New Port</span></td>
                                                                <td><span>10, 019t</span></td>
                                                                <td><span>cargo ship</span></td>
                                                                <div className='addtional-item p-0'>Visit times: <span className='me-5 ms-3'>37 times</span> <Button color="secondary" outline className='shadow-none pe-3 ps-3 pt-0 pb-0'> <span className='pt-1'><span>More</span></span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevrons-right "><g><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></g></svg> </Button></div>
                                                            </tr>
                                                            <tr style={{position: 'relative'}}>
                                                                <th scope="row"><span>6</span></th>
                                                                <td><span>2023. 1. 25</span></td>
                                                                <td><span><img src={ship2} alt="" width="100vw" className="rounded" /></span></td>
                                                                <td><span>New Port</span></td>
                                                                <td><span>10, 019t</span></td>
                                                                <td><span>cargo ship</span></td>
                                                                <div className='addtional-item p-0'>Visit times: <span className='me-5 ms-3'>37 times</span> <Button color="secondary" outline className='shadow-none pe-3 ps-3 pt-0 pb-0'> <span className='pt-1'><span>More</span></span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevrons-right "><g><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></g></svg> </Button></div>
                                                            </tr>
                                                            <tr style={{position: 'relative'}}>
                                                                <th scope="row"><span>7</span></th>
                                                                <td><span>2023. 1. 25</span></td>
                                                                <td><span><img src={ship3} alt="" width="100vw" className="rounded" /></span></td>
                                                                <td><span>New Port</span></td>
                                                                <td><span>10, 019t</span></td>
                                                                <td><span>cargo ship</span></td>
                                                                <div className='addtional-item p-0'>Visit times: <span className='me-5 ms-3'>37 times</span> <Button color="secondary" outline className='shadow-none pe-3 ps-3 pt-0 pb-0'> <span className='pt-1'><span>More</span></span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevrons-right "><g><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></g></svg> </Button></div>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <Row>
                                                    <Col lg={12}>
                                                        <Pagination className='view-data-pagination mt-4'>
                                                            <span className='mt-2 me-2'>SearchResults: <span>22</span></span>
                                                            <PaginationItem> <PaginationLink to="#"> <i className="mdi mdi-chevron-left" /> Previous </PaginationLink> </PaginationItem>
                                                            <PaginationItem> <PaginationLink to="#"> 1 </PaginationLink> </PaginationItem>
                                                            <PaginationItem> <PaginationLink to="#"> 2 </PaginationLink> </PaginationItem>
                                                            <PaginationItem> <PaginationLink to="#"> 3 </PaginationLink> </PaginationItem>
                                                            <PaginationItem> <PaginationLink to="#"> Next <i className="mdi mdi-chevron-right" /></PaginationLink> </PaginationItem>
                                                        </Pagination>
                                                    </Col>
                                                </Row>
                                            </TabPane>

                                            <TabPane tabId="4" id="custom-hover-customere">
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
                                                            <tr style={{position: 'relative'}}>
                                                                <th scope="row"><span>1</span></th>
                                                                <td><span>2023. 1. 25</span></td>
                                                                <td><span><img src={ship4} alt="" width="100vw" className="rounded" /></span></td>
                                                                <td><span>New Port</span></td>
                                                                <td><span>10, 019t</span></td>
                                                                <td><span>cargo ship</span></td>
                                                                <div className='addtional-item p-0'>Visit times: <span className='me-5 ms-3'>37 times</span> <Button color="secondary" outline className='shadow-none pe-3 ps-3 pt-0 pb-0'> <span className='pt-1'><span>More</span></span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevrons-right "><g><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></g></svg> </Button></div>
                                                            </tr>
                                                            <tr style={{position: 'relative'}}>
                                                                <th scope="row"><span>2</span></th>
                                                                <td><span>2023. 1. 25</span></td>
                                                                <td><span><img src={ship2} alt="" width="100vw" className="rounded" /></span></td>
                                                                <td><span>New Port</span></td>
                                                                <td><span>10, 019t</span></td>
                                                                <td><span>cargo ship</span></td>
                                                                <div className='addtional-item p-0'>Visit times: <span className='me-5 ms-3'>37 times</span> <Button color="secondary" outline className='shadow-none pe-3 ps-3 pt-0 pb-0'> <span className='pt-1'><span>More</span></span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevrons-right "><g><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></g></svg> </Button></div>
                                                            </tr>
                                                            <tr style={{position: 'relative'}}>
                                                                <th scope="row"><span>3</span></th>
                                                                <td><span>2023. 1. 25</span></td>
                                                                <td><span><img src={ship3} alt="" width="100vw" className="rounded" /></span></td>
                                                                <td><span>New Port</span></td>
                                                                <td><span>10, 019t</span></td>
                                                                <td><span>cargo ship</span></td>
                                                                <div className='addtional-item p-0'>Visit times: <span className='me-5 ms-3'>37 times</span> <Button color="secondary" outline className='shadow-none pe-3 ps-3 pt-0 pb-0'> <span className='pt-1'><span>More</span></span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevrons-right "><g><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></g></svg> </Button></div>
                                                            </tr>
                                                            <tr style={{position: 'relative'}}>
                                                                <th scope="row"><span>4</span></th>
                                                                <td><span>2023. 1. 25</span></td>
                                                                <td><span><img src={ship4} alt="" width="100vw" className="rounded" /></span></td>
                                                                <td><span>New Port</span></td>
                                                                <td><span>10, 019t</span></td>
                                                                <td><span>cargo ship</span></td>
                                                                <div className='addtional-item p-0'>Visit times: <span className='me-5 ms-3'>37 times</span> <Button color="secondary" outline className='shadow-none pe-3 ps-3 pt-0 pb-0'> <span className='pt-1'><span>More</span></span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevrons-right "><g><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></g></svg> </Button></div>
                                                            </tr>
                                                            <tr style={{position: 'relative'}}>
                                                                <th scope="row"><span>5</span></th>
                                                                <td><span>2023. 1. 25</span></td>
                                                                <td><span><img src={ship1} alt="" width="100vw" className="rounded" /></span></td>
                                                                <td><span>New Port</span></td>
                                                                <td><span>10, 019t</span></td>
                                                                <td><span>cargo ship</span></td>
                                                                <div className='addtional-item p-0'>Visit times: <span className='me-5 ms-3'>37 times</span> <Button color="secondary" outline className='shadow-none pe-3 ps-3 pt-0 pb-0'> <span className='pt-1'><span>More</span></span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevrons-right "><g><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></g></svg> </Button></div>
                                                            </tr>
                                                            <tr style={{position: 'relative'}}>
                                                                <th scope="row"><span>6</span></th>
                                                                <td><span>2023. 1. 25</span></td>
                                                                <td><span><img src={ship2} alt="" width="100vw" className="rounded" /></span></td>
                                                                <td><span>New Port</span></td>
                                                                <td><span>10, 019t</span></td>
                                                                <td><span>cargo ship</span></td>
                                                                <div className='addtional-item p-0'>Visit times: <span className='me-5 ms-3'>37 times</span> <Button color="secondary" outline className='shadow-none pe-3 ps-3 pt-0 pb-0'> <span className='pt-1'><span>More</span></span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevrons-right "><g><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></g></svg> </Button></div>
                                                            </tr>
                                                            <tr style={{position: 'relative'}}>
                                                                <th scope="row"><span>7</span></th>
                                                                <td><span>2023. 1. 25</span></td>
                                                                <td><span><img src={ship3} alt="" width="100vw" className="rounded" /></span></td>
                                                                <td><span>New Port</span></td>
                                                                <td><span>10, 019t</span></td>
                                                                <td><span>cargo ship</span></td>
                                                                <div className='addtional-item p-0'>Visit times: <span className='me-5 ms-3'>37 times</span> <Button color="secondary" outline className='shadow-none pe-3 ps-3 pt-0 pb-0'> <span className='pt-1'><span>More</span></span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevrons-right "><g><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></g></svg> </Button></div>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <Row>
                                                    <Col lg={12}>
                                                        <Pagination className='view-data-pagination mt-4'>
                                                            <span className='mt-2 me-2'>SearchResults: <span>22</span></span>
                                                            <PaginationItem> <PaginationLink to="#"> <i className="mdi mdi-chevron-left" /> Previous </PaginationLink> </PaginationItem>
                                                            <PaginationItem> <PaginationLink to="#"> 1 </PaginationLink> </PaginationItem>
                                                            <PaginationItem> <PaginationLink to="#"> 2 </PaginationLink> </PaginationItem>
                                                            <PaginationItem> <PaginationLink to="#"> 3 </PaginationLink> </PaginationItem>
                                                            <PaginationItem> <PaginationLink to="#"> Next <i className="mdi mdi-chevron-right" /></PaginationLink> </PaginationItem>
                                                        </Pagination>
                                                    </Col>
                                                </Row>
                                            </TabPane>

                                            <TabPane tabId="2" id="custom-hover-customere">
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
                                                            <tr style={{position: 'relative'}}>
                                                                <th scope="row"><span>1</span></th>
                                                                <td><span>10, 019t</span></td>
                                                                <td><span>2023. 1. 25</span></td>
                                                                <td><span>New Port</span></td>
                                                                <td><span>10, 019t</span></td>
                                                                <td><span>cargo ship</span></td>
                                                                <div className='addtional-item p-0'>Visit times: <span className='me-5 ms-3'>37 times</span> <Button color="secondary" outline className='shadow-none pe-3 ps-3 pt-0 pb-0'> <span className='pt-1'><span>More</span></span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevrons-right "><g><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></g></svg> </Button></div>
                                                            </tr>
                                                            <tr style={{position: 'relative'}}>
                                                                <th scope="row"><span>2</span></th>
                                                                <td><span>10, 019t</span></td>
                                                                <td><span>2023. 1. 25</span></td>
                                                                <td><span>New Port</span></td>
                                                                <td><span>10, 019t</span></td>
                                                                <td><span>cargo ship</span></td>
                                                                <div className='addtional-item p-0'>Visit times: <span className='me-5 ms-3'>37 times</span> <Button color="secondary" outline className='shadow-none pe-3 ps-3 pt-0 pb-0'> <span className='pt-1'><span>More</span></span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevrons-right "><g><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></g></svg> </Button></div>
                                                            </tr>
                                                            <tr style={{position: 'relative'}}>
                                                                <th scope="row"><span>3</span></th>
                                                                <td><span>10, 019t</span></td>
                                                                <td><span>2023. 1. 25</span></td>
                                                                <td><span>New Port</span></td>
                                                                <td><span>10, 019t</span></td>
                                                                <td><span>cargo ship</span></td>
                                                                <div className='addtional-item p-0'>Visit times: <span className='me-5 ms-3'>37 times</span> <Button color="secondary" outline className='shadow-none pe-3 ps-3 pt-0 pb-0'> <span className='pt-1'><span>More</span></span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevrons-right "><g><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></g></svg> </Button></div>
                                                            </tr>
                                                            <tr style={{position: 'relative'}}>
                                                                <th scope="row"><span>4</span></th>
                                                                <td><span>10, 019t</span></td>
                                                                <td><span>2023. 1. 25</span></td>
                                                                <td><span>New Port</span></td>
                                                                <td><span>10, 019t</span></td>
                                                                <td><span>cargo ship</span></td>
                                                                <div className='addtional-item p-0'>Visit times: <span className='me-5 ms-3'>37 times</span> <Button color="secondary" outline className='shadow-none pe-3 ps-3 pt-0 pb-0'> <span className='pt-1'><span>More</span></span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevrons-right "><g><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></g></svg> </Button></div>
                                                            </tr>
                                                            <tr style={{position: 'relative'}}>
                                                                <th scope="row"><span>5</span></th>
                                                                <td><span>10, 019t</span></td>
                                                                <td><span>2023. 1. 25</span></td>
                                                                <td><span>New Port</span></td>
                                                                <td><span>10, 019t</span></td>
                                                                <td><span>cargo ship</span></td>
                                                                <div className='addtional-item p-0'>Visit times: <span className='me-5 ms-3'>37 times</span> <Button color="secondary" outline className='shadow-none pe-3 ps-3 pt-0 pb-0'> <span className='pt-1'><span>More</span></span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevrons-right "><g><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></g></svg> </Button></div>
                                                            </tr>
                                                            <tr style={{position: 'relative'}}>
                                                                <th scope="row"><span>6</span></th>
                                                                <td><span>10, 019t</span></td>
                                                                <td><span>2023. 1. 25</span></td>
                                                                <td><span>New Port</span></td>
                                                                <td><span>10, 019t</span></td>
                                                                <td><span>cargo ship</span></td>
                                                                <div className='addtional-item p-0'>Visit times: <span className='me-5 ms-3'>37 times</span> <Button color="secondary" outline className='shadow-none pe-3 ps-3 pt-0 pb-0'> <span className='pt-1'><span>More</span></span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevrons-right "><g><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></g></svg> </Button></div>
                                                            </tr>
                                                            <tr style={{position: 'relative'}}>
                                                                <th scope="row"><span>7</span></th>
                                                                <td><span>10, 019t</span></td>
                                                                <td><span>2023. 1. 25</span></td>
                                                                <td><span>New Port</span></td>
                                                                <td><span>10, 019t</span></td>
                                                                <td><span>cargo ship</span></td>
                                                                <div className='addtional-item p-0'>Visit times: <span className='me-5 ms-3'>37 times</span> <Button color="secondary" outline className='shadow-none pe-3 ps-3 pt-0 pb-0'> <span className='pt-1'><span>More</span></span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevrons-right "><g><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></g></svg> </Button></div>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <Row>
                                                    <Col lg={12}>
                                                        <Pagination className='view-data-pagination mt-4'>
                                                            <span className='mt-2 me-2'>SearchResults: <span>22</span></span>
                                                            <PaginationItem> <PaginationLink to="#"> <i className="mdi mdi-chevron-left" /> Previous </PaginationLink> </PaginationItem>
                                                            <PaginationItem> <PaginationLink to="#"> 1 </PaginationLink> </PaginationItem>
                                                            <PaginationItem> <PaginationLink to="#"> 2 </PaginationLink> </PaginationItem>
                                                            <PaginationItem> <PaginationLink to="#"> 3 </PaginationLink> </PaginationItem>
                                                            <PaginationItem> <PaginationLink to="#"> Next <i className="mdi mdi-chevron-right" /></PaginationLink> </PaginationItem>
                                                        </Pagination>
                                                    </Col>
                                                </Row>
                                            </TabPane>

                                            <TabPane tabId="5" id="custom-hover-customere">
                                            <Row>
                                                <Col xxl={12}>
                                                    <Card>
                                                        <CardBody>
                                                            <Nav tabs className="nav-tabs mb-3">
                                                                <NavItem>
                                                                    <NavLink style={{ cursor: "pointer" }} className={classnames({ active: activeTab === "1", })} onClick={() => { toggle("1"); }} >
                                                                        Vote a new data
                                                                    </NavLink>
                                                                </NavItem>
                                                                <NavItem>
                                                                    <NavLink style={{ cursor: "pointer" }} className={classnames({ active: activeTab === "2", })} onClick={() => { toggle("2"); }} >
                                                                        Visiting list of my data
                                                                    </NavLink>
                                                                </NavItem>
                                                            </Nav>

                                                            <TabContent activeTab={activeTab} className="text-muted">
                                                                <TabPane tabId="1" id="home" className='vote-new-data'>
                                                                    <h6>Sort of data</h6>
                                                                    <Col lg={3} className='sort-vote-data'>
                                                                        <select className="form-select mb-3" aria-label="Default select example">
                                                                            <option >About ship</option>
                                                                            <option value="1">Load details</option>
                                                                            <option value="2">products</option>
                                                                            <option value="3">Goods</option>
                                                                        </select>
                                                                    </Col>
                                                                    <p className="mb-0">
                                                                        Please fill below blanks with your data
                                                                    </p>
                                                                    <Row>
                                                                        <Col md={6}>
                                                                            <h6>Name of ship</h6>
                                                                            <Input type="text" className="form-control w-50" id="basiInput" />
                                                                        </Col>
                                                                        <Col md={6}>                                                                            
                                                                            <div className="text-center">
                                                                                <div className="profile-user position-relative d-inline-block mx-auto  mb-4">
                                                                                    <img src={ship1}
                                                                                        className="rounded-circle avatar-xl img-thumbnail user-profile-image"
                                                                                        alt="user-profile" />
                                                                                    <div className="avatar-xs p-0 rounded-circle profile-photo-edit">
                                                                                        <Input id="profile-img-file-input" type="file"
                                                                                            className="profile-img-file-input" />
                                                                                        <Label htmlFor="profile-img-file-input"
                                                                                            className="profile-photo-edit avatar-xs">
                                                                                            <span className="avatar-title rounded-circle bg-light text-body">
                                                                                                <i className="ri-camera-fill"></i>
                                                                                            </span>
                                                                                        </Label>
                                                                                    </div>
                                                                                </div>
                                                                                <h5 className="fs-16 mb-1">Anna Adame</h5>
                                                                                <p className="text-muted mb-0">Lead Designer / Developer</p>
                                                                            </div>
                                                                        </Col>
                                                                    </Row>
                                                                </TabPane>

                                                                <TabPane tabId="2" id="product">
                                                                    <h6>Product</h6>
                                                                    <p className="mb-0">
                                                                        You've probably heard that opposites attract. The same is true for fonts. Don't be afraid to combine font styles that are different but complementary, like sans serif with serif, short with tall, or decorative with simple. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR.
                                                                    </p>
                                                                </TabPane>
                                                            </TabContent>
                                                        </CardBody>
                                                    </Card>
                                                </Col>
                                            </Row>
                                            </TabPane>
                                        </TabContent>
                                    </Col>
                                    <Col md={2}>
                                        <h2 className="mb-3"style={{textAlign: 'center'}}>Popular Data</h2>
                                        <div className="d-flex mb-2">
                                            <div className="flex-shrink-0">
                                                <img src={ship1} alt="" width="100vw" className="rounded" />
                                            </div>
                                            <div className="flex-grow-1 ms-1 mt-2">
                                                <p className="mb-0">recommand</p>
                                                <p className="mb-0">kkg427</p>
                                            </div>
                                        </div>
                                        <div className="d-flex mb-2">
                                            <div className="flex-shrink-0">
                                                <img src={ship2} alt="" width="100vw" className="rounded" />
                                            </div>
                                            <div className="flex-grow-1 ms-1 mt-2">
                                                <p className="mb-0">recommand</p>
                                                <p className="mb-0">ssj427</p>
                                            </div>
                                        </div>
                                        <h2 className='mt-5 mb-3' style={{textAlign: 'center'}}>Best contributor</h2>
                                        <Row>
                                            <Col md={6}>
                                                <i className='ri-user-line ri-user-line-customize'></i><span style={{position: 'relative', top: '-1vw'}}>kkj212</span>
                                            </Col>
                                            <Col md={6}>
                                                <i className='ri-user-line ri-user-line-customize'></i><span style={{position: 'relative', top: '-1vw'}}>kkj212</span>
                                            </Col>
                                            <Col md={6}>
                                                <i className='ri-user-line ri-user-line-customize'></i><span style={{position: 'relative', top: '-1vw'}}>kkj212</span>
                                            </Col>
                                            <Col md={6}>
                                                <i className='ri-user-line ri-user-line-customize'></i><span style={{position: 'relative', top: '-1vw'}}>kkj212</span>
                                            </Col>
                                            <Col md={6}>
                                                <i className='ri-user-line ri-user-line-customize'></i><span style={{position: 'relative', top: '-1vw'}}>kkj212</span>
                                            </Col>
                                            <Col md={6}>
                                                <i className='ri-user-line ri-user-line-customize'></i><span style={{position: 'relative', top: '-1vw'}}>kkj212</span>
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