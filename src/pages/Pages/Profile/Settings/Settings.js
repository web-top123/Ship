import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Container, Form, Input, Label, Nav, NavItem, NavLink, Row, TabContent, TabPane, Table } from 'reactstrap';
import classnames from "classnames";
import MetaTags from 'react-meta-tags';
import Flatpickr from "react-flatpickr";
import MyBrowser from './MyBrowser';
import MyTest from './MyTest';
import MyPurchase from './MyPurchase';
import MyScore from './MyScore';
import MyImage from './MyImage';
import MyOpinion from './MyOpinion';
//import images
import progileBg from '../../../../assets/images/profile-bg.jpg';
import avatar1 from '../../../../assets/images/users/avatar-1.jpg';

const Settings = () => {
    const [activeTab, setActiveTab] = useState("1");

    const tabChange = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };
    document.title = "Profile Settings | Velzon - React Admin & Dashboard Template";
    return (
        <React.Fragment>
            <div className="page-content">

                <Container fluid>
                    <div className="profile-foreground position-relative mx-n4 mt-n4">
                        <div className="profile-wid-bg">
                            <img src={progileBg} className="profile-wid-img" alt="" />
                        </div>
                    </div>
                    <div className="pt-4 mb-4 mb-lg-3 pb-lg-4">
                        <Row className="g-4">
                            <div className="col-auto">
                                <div className="avatar-lg">
                                    <img src={avatar1} alt="user-img"
                                        className="img-thumbnail rounded-circle" />
                                </div>
                            </div>

                            <Col>
                                <div className="p-2">
                                    <h3 className="text-white mb-1">Anna Adame</h3>
                                    <p className="text-white-75">Owner & Founder</p>
                                    <div className="hstack text-white-50 gap-1">
                                        <div className="me-2"><i
                                            className="ri-map-pin-user-line me-1 text-white-75 fs-16 align-middle"></i>California,
                                            United States</div>
                                        <div><i
                                            className="ri-building-line me-1 text-white-75 fs-16 align-middle"></i>Themesbrand
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col xs={12} className="col-lg-auto order-last order-lg-0">
                                <Row className="text text-white-50 text-center">
                                    <Col lg={6} xs={4}>
                                        <div className="p-2">
                                            <h4 className="text-white mb-1">24.3K</h4>
                                            <p className="fs-14 mb-0">Followers</p>
                                        </div>
                                    </Col>
                                    <Col lg={6} xs={4}>
                                        <div className="p-2">
                                            <h4 className="text-white mb-1">1.3K</h4>
                                            <p className="fs-14 mb-0">Following</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                    <Row>
                        <Col xxl={3}>
                            <Card>
                                <CardBody>
                                    <div className="d-flex align-items-center mb-5">
                                        <div className="flex-grow-1">
                                            <h5 className="card-title mb-0">Complete Your Profile</h5>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <Link to="#" className="badge bg-light text-primary fs-12"><i
                                                className="ri-edit-box-line align-bottom me-1"></i> Edit</Link>
                                        </div>
                                    </div>
                                    <div className="progress animated-progress custom-progress progress-label">
                                        <div className="progress-bar bg-danger" role="progressbar" style={{ "width": "30%" }}
                                            aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
                                            <div className="label">30%</div>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardBody>
                                    <h5 className="card-title mb-3">Info</h5>
                                    <div className="table-responsive">
                                        <Table className="table-borderless mb-0">
                                            <tbody>
                                                <tr>
                                                    <th className="ps-0" scope="row">Full Name :</th>
                                                    <td className="text-muted">Anna Adame</td>
                                                </tr>
                                                <tr>
                                                    <th className="ps-0" scope="row">Mobile :</th>
                                                    <td className="text-muted">+(1) 987 6543</td>
                                                </tr>
                                                <tr>
                                                    <th className="ps-0" scope="row">E-mail :</th>
                                                    <td className="text-muted">daveadame@velzon.com</td>
                                                </tr>
                                                <tr>
                                                    <th className="ps-0" scope="row">Location :</th>
                                                    <td className="text-muted">California, United States
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className="ps-0" scope="row">Joining Date</th>
                                                    <td className="text-muted">24 Nov 2021</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardBody>
                                    <div className="d-flex align-items-center mb-4">
                                        <div className="flex-grow-1">
                                            <h5 className="card-title mb-0">Portfolio</h5>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <Link to="#" className="badge bg-light text-primary fs-12"><i
                                                className="ri-add-fill align-bottom me-1"></i> Add</Link>
                                        </div>
                                    </div>
                                    <div className="mb-3 d-flex">
                                        <div className="avatar-xs d-block flex-shrink-0 me-3">
                                            <span className="avatar-title rounded-circle fs-16 bg-dark text-light">
                                                <i className="ri-github-fill"></i>
                                            </span>
                                        </div>
                                        <Input type="email" className="form-control" id="gitUsername" placeholder=""
                                            defaultValue="" />
                                    </div>
                                    <div className="mb-3 d-flex">
                                        <div className="avatar-xs d-block flex-shrink-0 me-3">
                                            <span className="avatar-title rounded-circle fs-16 bg-primary">
                                                <i className="ri-global-fill"></i>
                                            </span>
                                        </div>
                                        <Input type="text" className="form-control" id="websiteInput"
                                            placeholder="" defaultValue="" />
                                    </div>
                                    <div className="mb-3 d-flex">
                                        <div className="avatar-xs d-block flex-shrink-0 me-3">
                                            <span className="avatar-title rounded-circle fs-16 bg-success">
                                                <i className="ri-dribbble-fill"></i>
                                            </span>
                                        </div>
                                        <Input type="text" className="form-control" id="dribbleName" placeholder=""
                                            defaultValue="" />
                                    </div>
                                    <div className="d-flex">
                                        <div className="avatar-xs d-block flex-shrink-0 me-3">
                                            <span className="avatar-title rounded-circle fs-16 bg-danger">
                                                <i className="ri-pinterest-fill"></i>
                                            </span>
                                        </div>
                                        <Input type="text" className="form-control" id="pinterestName"
                                            placeholder="" defaultValue="" />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col xxl={9}>
                            <Card className="">
                                <CardHeader>
                                    <Nav className="nav-tabs-custom rounded card-header-tabs border-bottom-0"
                                        role="tablist">
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: activeTab === "1" })}
                                                onClick={() => {
                                                    tabChange("1");
                                                }}>
                                                <i className="fas fa-home"></i>
                                                Personal Details
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink to="#"
                                                className={classnames({ active: activeTab === "2" })}
                                                onClick={() => {
                                                    tabChange("2");
                                                }}
                                                type="button">
                                                <i className="far fa-user"></i>
                                                Browsing History
                                            </NavLink>
                                        </NavItem>
                                        <NavItem >
                                            <NavLink to="#"
                                                className={classnames({ active: activeTab === "3" })}
                                                onClick={() => {
                                                    tabChange("3");
                                                }}
                                                type="button">
                                                <i className="far fa-envelope"></i>
                                                Passed Test
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink to="#"
                                                className={classnames({ active: activeTab === "4" })}
                                                onClick={() => {
                                                    tabChange("4");
                                                }}
                                                type="button">
                                                <i className="far fa-envelope"></i>
                                                Purchase History
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink to="#"
                                                className={classnames({ active: activeTab === "5" })}
                                                onClick={() => {
                                                    tabChange("5");
                                                }}
                                                type="button">
                                                <i className="far fa-score"></i>
                                                Score Management
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink to="#"
                                                className={classnames({ active: activeTab === "6" })}
                                                onClick={() => {
                                                    tabChange("6");
                                                }}
                                                type="button">
                                                <i className="far fa-img"></i>
                                                Image Icon Purchase
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink to="#"
                                                className={classnames({ active: activeTab === "7" })}
                                                onClick={() => {
                                                    tabChange("7");
                                                }}
                                                type="button">
                                                <i className="far fa-img"></i>
                                                Opinion
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </CardHeader>
                                <CardBody className="p-4">
                                    <TabContent activeTab={activeTab}>
                                        <TabPane tabId="1">
                                            <Form>
                                                <Row>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="identifierInput" className="form-label">
                                                                Identifier
                                                            </Label>
                                                            <Input type="text" className="form-control" id="identifierInput"
                                                                placeholder="Enter your identifier" defaultValue="king1234" />
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="nameInput" className="form-label">
                                                                Name
                                                            </Label>
                                                            <Input type="text" className="form-control" id="nameInput"
                                                                placeholder="Enter your name" defaultValue="Robert Jon" />
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="phonenumberInput" className="form-label">Phone
                                                                Number</Label>
                                                            <Input type="text" className="form-control"
                                                                id="phonenumberInput"
                                                                placeholder="Enter your phone number"
                                                                defaultValue="+(1) 987 6543" />
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="emailInput" className="form-label">Email
                                                                Address</Label>
                                                            <Input type="email" className="form-control" id="emailInput"
                                                                placeholder="Enter your email"
                                                                defaultValue="daveadame@velzon.com" />
                                                        </div>
                                                    </Col>
                                                    <Col lg={12}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="skillsInput" className="form-label">Man/Woman</Label>
                                                            <select className="form-select mb-3">
                                                                <option value="kindman">Man</option>
                                                                <option value="kindwoman">Woman</option>
                                                            </select>
                                                        </div>
                                                    </Col>
                                                    <Col lg={12}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="BirthdaydatInput" className="form-label">
                                                                Birthday
                                                            </Label>
                                                            <Flatpickr
                                                                className="form-control"
                                                                options={{
                                                                    dateFormat: "d M, Y"
                                                                }}
                                                            />
                                                        </div>
                                                    </Col>
                                                    <Col lg={12}>
                                                        <div className="hstack gap-2 justify-content-end">
                                                            <button type="button"
                                                                className="btn btn-primary">Updates</button>
                                                            <button type="button"
                                                                className="btn btn-soft-success shadow-none">Cancel</button>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Form>
                                        </TabPane>

                                        <TabPane tabId="2" className='full-tab-table'>
                                            <Row className="g-2">
                                                <Col lg={12}>
                                                    <MyBrowser />
                                                </Col>
                                            </Row>
                                        </TabPane>

                                        <TabPane tabId="3">
                                            <MyTest />
                                        </TabPane>

                                        <TabPane tabId="4">
                                            <MyPurchase />
                                        </TabPane>

                                        <TabPane tabId="5">
                                            <MyScore />
                                        </TabPane>

                                        <TabPane tabId="6">
                                            <MyImage />
                                        </TabPane>

                                        <TabPane tabId="7">
                                            <MyOpinion />
                                        </TabPane>

                                    </TabContent>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Settings;