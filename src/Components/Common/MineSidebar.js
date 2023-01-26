import React, { useState } from 'react';
import classnames from "classnames";
import { Button, Label, CardBody, Col, Input, Nav, NavItem, NavLink, Row, TabContent, TabPane, Table, CardHeader } from "reactstrap";
import { FormGrid, Gutters, VerticalForm, HorizontalForm, HorizontalFormLabelSizing, ColumnSizing, AutoSizing, InlineForms, FloatingLabels } from '../../pages/Forms/FormLayouts/FormlayoutsCode';
import { BaseExample, CardTableExample, PaginationExample, SearchExample, SortingExample, LoadingStateExample, FixedHeaderExample, HiddenColumnsExample } from '../../pages/Tables/GridTables/GridTablesData';
import Flatpickr from "react-flatpickr";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from '../../store/actions';
import PreviewCardHeader from '../../Components/Common/PreviewCardHeader';
// import avatar3 from "../../assets/images/users/avatar-1.jpg";
import avatar1 from "../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import { useQuill } from "react-quilljs";

const MineSidebar = () => {
    const { quillRef } = useQuill();
    const state = useSelector(state => state);
    console.log(state);
    // Vertical Nav Tabs
    const [verticalTab, setverticalTab] = useState("1");
    const toggleVertical = (tab) => {
        if (verticalTab !== tab) {
            setverticalTab(tab);
        }
    };
    return (
        <React.Fragment>
            <Col xxl={12}>
                <Row>
                    <Col md={3}>
                        <Nav pills className="flex-column" id="v-pills-tab">
                            <NavItem>
                                <NavLink
                                    style={{ cursor: "pointer" }}
                                    className={classnames({
                                        "mb-2": true,
                                        "text-center": true,
                                        active: verticalTab === "1",
                                    })}
                                    onClick={() => {
                                        toggleVertical("1");
                                    }}
                                    id="v-pills-myinformation-tab"
                                >
                                    My Information
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    style={{ cursor: "pointer" }}
                                    className={classnames({
                                        "mb-2": true,
                                        "text-center": true,
                                        active: verticalTab === "2",
                                    })}
                                    onClick={() => {
                                        toggleVertical("2");
                                    }}
                                    id="v-pills-browserhistory-tab"
                                >
                                    Browser History
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    style={{ cursor: "pointer" }}
                                    className={classnames({
                                        "mb-2": true,
                                        "text-center": true,
                                        active: verticalTab === "3",
                                    })}
                                    onClick={() => {
                                        toggleVertical("3");
                                    }}
                                    id="v-pills-testhistory-tab"
                                >
                                    Test History
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    style={{ cursor: "pointer" }}
                                    className={classnames({
                                        "mb-2": true,
                                        active: verticalTab === "4",
                                        "text-center": true,
                                    })}
                                    onClick={() => {
                                        toggleVertical("4");
                                    }}
                                    id="v-pills-purchasehistory-tab"
                                >
                                    Purchase History
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    style={{ cursor: "pointer" }}
                                    className={classnames({
                                        "mb-2": true,
                                        active: verticalTab === "5",
                                        "text-center": true,
                                    })}
                                    onClick={() => {
                                        toggleVertical("5");
                                    }}
                                    id="v-pills-scorehistory-tab"
                                >

                                    Score Management
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    style={{ cursor: "pointer" }}
                                    className={classnames({
                                        "mb-2": true,
                                        active: verticalTab === "6",
                                        "text-center": true,
                                    })}
                                    onClick={() => {
                                        toggleVertical("6");
                                    }}
                                    id="v-pills-imgpurchase-tab"
                                >
                                    Image Icon Purchase
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    style={{ cursor: "pointer" }}
                                    className={classnames({
                                        "mb-2": true,
                                        active: verticalTab === "7",
                                        "text-center": true,
                                    })}
                                    onClick={() => {
                                        toggleVertical("7");
                                    }}
                                    id="v-pills-opinion-tab"
                                >
                                    Opinion Box
                                </NavLink>
                            </NavItem>

                        </Nav>
                    </Col>
                    <Col md={9}>
                        <TabContent
                            activeTab={verticalTab}
                            className="text-muted mt-4 ms-5 mt-md-0"
                            id="v-pills-tabContent"
                        >
                            <TabPane tabId="1" id="v-pills-home">
                                <CardBody className='pt-0'>
                                    <div className="live-preview">
                                        <form action="#">
                                            <Row className="mb-3">
                                                <Col lg={3} >
                                                    <Label htmlFor="identifierInput" className="form-label">Identifier</Label>
                                                </Col>
                                                <Col lg={9} >
                                                    <Input type="text" className="form-control" id="identifierInput" placeholder="Enter your Identififer" />
                                                </Col>
                                            </Row>
                                            <Row className="mb-3">
                                                <Col lg={3} >
                                                    <Label htmlFor="leaveemails" className="form-label">Email Address</Label>
                                                </Col>
                                                <Col lg={9} >
                                                    <Input type="email" className="form-control" id="leaveemails" placeholder="Enter your email" />
                                                </Col>
                                            </Row>
                                            <Row className="mb-3">
                                                <Col lg={3} >
                                                    <Label htmlFor="nameinput" className="form-label">Name</Label>
                                                </Col>
                                                <Col lg={9} >
                                                    <Input type="url" className="form-control" id="username" placeholder="Enter your url" />
                                                </Col>
                                            </Row>
                                            <Row className="mb-3">
                                                <Col lg={3} >
                                                    <Label htmlFor="mankind" className="form-label">Man / Woman</Label>
                                                </Col>
                                                <Col lg={9} >
                                                    <select type="number" className="form-select" id="mankind" >
                                                        <option value="man" selected>Man</option>
                                                        <option value="woman">Woman</option>
                                                    </select>
                                                </Col>
                                            </Row>
                                            <Row className="mb-3">
                                                <Col lg={3} >
                                                    <Label htmlFor="birthday" className="form-label">Birthday</Label>
                                                </Col>
                                                <Col lg={9} >
                                                    <Flatpickr
                                                        className="form-control"
                                                        options={{
                                                            dateFormat: "d M, Y"
                                                        }}
                                                    />
                                                </Col>
                                            </Row>

                                            <div className="text-end">
                                                <button type="submit" className="btn btn-primary">Save</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="d-none code-view">
                                        <pre className="language-markup" style={{ "height": "375px" }}>
                                            <code>
                                                <HorizontalForm />
                                            </code>
                                        </pre>
                                    </div>
                                </CardBody>
                            </TabPane>
                            <TabPane tabId="2" id="v-pills-profile">
                                <CardBody>
                                    <div id="table-gridjs">
                                        <BaseExample />
                                    </div>
                                </CardBody>
                            </TabPane>
                            <TabPane tabId="3" id="v-pills-messages">
                                <div className="table-responsive">
                                    <b>Passed Test</b>
                                    <Table className="align-middle table-nowrap mb-0">
                                        <thead>
                                            <tr>
                                                <th scope="col">ID</th>
                                                <th scope="col">Sort</th>
                                                <th scope="col">Level</th>
                                                <th scope="col">Testing Problem Counter</th>
                                                <th scope="col">Passed Counter</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row"><Link to="#" className="fw-medium">1</Link></th>
                                                <td>Electric</td>
                                                <td>1 Level</td>
                                                <td>20</td>
                                                <td>16</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"><Link to="#" className="fw-medium">2</Link></th>
                                                <td>Ship</td>
                                                <td>2 Level</td>
                                                <td>30</td>
                                                <td>15</td>
                                            </tr>

                                        </tbody>
                                    </Table>
                                </div>
                                <div className="table-responsive pt-5">
                                    <b>Progressing Test</b>
                                    <Table className="align-middle table-nowrap mb-0">
                                        <thead>
                                            <tr>
                                                <th scope="col">ID</th>
                                                <th scope="col">Sort</th>
                                                <th scope="col">Level</th>
                                                <th scope="col">Last Testing Problem</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row"><Link to="#" className="fw-medium">1</Link></th>
                                                <td>Electric</td>
                                                <td>1 Level</td>
                                                <td>Control method of Ship</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </TabPane>
                            {/* Purchase history */}
                            <TabPane tabId="4" id="v-pills-settings">
                                <div className="mb-2">
                                    <p>Total purchaing count: 11</p>
                                    <div className="d-flex align-items-center">
                                        <label className="mb-0 pe-2">Sort:</label>
                                        <select className="form-select" aria-label=".form-select-sm" style={{ width: "100px" }}>
                                            <option defaultValue="1">One</option>
                                            <option Value="2">Two</option>
                                            <option Value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                                <Table className="align-middle table-nowrap mb-0">
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Title</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Purchase Score</th>
                                            <th className="sort" data-sort="action"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row"><Link to="#" className="fw-medium">1</Link></th>
                                            <td>Electric</td>
                                            <td>2022.1.3</td>
                                            <td>10000</td>
                                            <td>
                                                <div className="d-flex gap-2">
                                                    <div className="edit">
                                                        <button className="btn btn-sm btn-success edit-item-btn"
                                                            data-bs-toggle="modal" data-bs-target="#showModal">Detail</button>
                                                    </div>
                                                    <div className="remove">
                                                        <button className="btn btn-sm btn-danger remove-item-btn">Download</button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><Link to="#" className="fw-medium">2</Link></th>
                                            <td>Physical</td>
                                            <td>2022.2.3</td>
                                            <td>500</td>
                                            <td>
                                                <div className="d-flex gap-2">
                                                    <div className="edit">
                                                        <button className="btn btn-sm btn-success edit-item-btn"
                                                            data-bs-toggle="modal" data-bs-target="#showModal">Detail</button>
                                                    </div>
                                                    <div className="remove">
                                                        <button className="btn btn-sm btn-danger remove-item-btn">Download</button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </TabPane>
                            <TabPane tabId="5" id="v-pills-score-manage">
                                <div className="mb-2">
                                    <div className='pb-5'>
                                        <span className='px-2'>no free score charge</span>
                                        <span className='px-2'>no freescore move</span>
                                        <span className='px-2'>score charge</span>
                                        <span className='px-2'>socre move</span>
                                    </div>
                                    <div id="score-manage-field">
                                        <div className="mt-4 md-0 d-flex">
                                            <span>Sign mode:</span>
                                            <div className="form-check mb-2 me-3">
                                                <Input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                <Label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    Part1 Wallet
                                                </Label>
                                            </div>
                                            <div className="form-check me-3">
                                                <Input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                                                <Label className="form-check-label" htmlFor="flexRadioDefault2">
                                                    Part2 Wallet
                                                </Label>
                                            </div>
                                            <div className="form-check me-3">
                                                <Input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" defaultChecked />
                                                <Label className="form-check-label" htmlFor="flexRadioDefault3">
                                                    Part3 Wallet
                                                </Label>
                                            </div>
                                        </div>
                                        <div className="mt-4 mt-3 md-0 d-flex">
                                            <span>Currency Kind:</span>
                                            <div className="form-check mb-2 me-3">
                                                <Input className="form-check-input" type="radio" name="flexRadioCurrency" id="flexRadioCurrency1" />
                                                <Label className="form-check-label" htmlFor="flexRadioCurrency1">
                                                    Country
                                                </Label>
                                            </div>
                                            <div className="form-check me-3">
                                                <Input className="form-check-input" type="radio" name="flexRadioCurrency" id="flexRadioCurrency2" defaultChecked />
                                                <Label className="form-check-label" htmlFor="flexRadioCurrency2">
                                                    Abroad
                                                </Label>
                                            </div>
                                        </div>
                                        <div className="mt-4 mt-3 md-0 d-flex">
                                            <span>Charging Score: </span>
                                            <Input type="text" className="form-control" id="charing-score" placeholder="" style={{ width: "120px" }} />
                                        </div>
                                        <div className="mt-4 mt-3 md-0 d-flex">
                                            <span>Receive Identifier: </span>
                                            <Input type="text" className="form-control" id="receive-identifier" placeholder="" style={{ width: "120px" }} />
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Charge
                                </button>

                            </TabPane>
                            <TabPane tabId="6" id="v-pill-image-icon">
                                <div className="mb-2">
                                    <CardHeader className="card-header bg-trans pt-0">
                                        <h4 className="card-title mb-0">Image Icon Selection</h4>
                                    </CardHeader>
                                </div>
                                <div>
                                    <div className="mt-4 md-0 px-5 card-header bg-trans img-select">
                                        <div className='d-flex justify-content-between pb-3'>
                                            <img className="img-thumbnail rounded-circle avatar-xl" alt="200x200" src={avatar1} />
                                            <img className="img-thumbnail rounded-circle avatar-xl" alt="200x200" src={avatar3} />
                                            <img className="img-thumbnail rounded-circle avatar-xl" alt="200x200" src={avatar3} />
                                            <img className="img-thumbnail rounded-circle avatar-xl" alt="200x200" src={avatar2} />
                                            <img className="img-thumbnail rounded-circle avatar-xl" alt="200x200" src={avatar3} />
                                        </div>
                                        <div className='d-flex justify-content-between pb-3'>
                                            <img className="img-thumbnail rounded-circle avatar-xl" alt="200x200" src={avatar3} />
                                            <img className="img-thumbnail rounded-circle avatar-xl" alt="200x200" src={avatar1} />
                                            <img className="img-thumbnail rounded-circle avatar-xl" alt="200x200" src={avatar3} />
                                            <img className="img-thumbnail rounded-circle avatar-xl" alt="200x200" src={avatar2} />
                                            <img className="img-thumbnail rounded-circle avatar-xl" alt="200x200" src={avatar3} />
                                        </div>
                                        <div className='d-flex justify-content-between pb-3'>
                                            <img className="img-thumbnail rounded-circle avatar-xl" alt="200x200" src={avatar3} />
                                            <img className="img-thumbnail rounded-circle avatar-xl" alt="200x200" src={avatar1} />
                                            <img className="img-thumbnail rounded-circle avatar-xl" alt="200x200" src={avatar3} />
                                            <img className="img-thumbnail rounded-circle avatar-xl" alt="200x200" src={avatar1} />
                                            <img className="img-thumbnail rounded-circle avatar-xl" alt="200x200" src={avatar3} />
                                        </div>
                                    </div>
                                    <div className="text-end pt-5">
                                        <button type="submit" className="btn btn-primary">Purchase</button>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tabId="7" id="v-pill-opinion-box">
                                <div className="opinion-wraper d-flex">
                                    <span>Opinion Content</span>
                                    <div>
                                        <div className="snow-editor" style={{ height: 300 }}>
                                            <div ref={quillRef} />
                                        </div> 
                                        <div className='pt-5 d-flex justify-content-between align-items-center'>
                                          <span>Contact number: +191223123</span>
                                          <Button color="primary" className="btn-label right"> <i className="ri-user-smile-line label-icon align-middle fs-16 ms-2"></i> Attach File </Button>
                                        </div>  
                                        <div className="d-flex justify-content-between pt-4">
                                            <div>
                                                <Button color="primary" data-bs-toggle="button" aria-pressed="false" className='me-2'>
                                                    Grammar Checking
                                                </Button>
                                                <Button color="primary" data-bs-toggle="button" aria-pressed="false">
                                                    Save in Box
                                                </Button>      
                                            </div>
                                            
                                            <Button color="primary" data-bs-toggle="button" aria-pressed="false">
                                                Vote
                                            </Button>
                                        </div>           
                                    </div>
                                </div>
                                
                            </TabPane>
                        </TabContent>
                    </Col>
                </Row>
            </Col>
        </React.Fragment>
    );
};

export default MineSidebar;