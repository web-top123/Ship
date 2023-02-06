import React, { useState } from 'react';
import classnames from "classnames";
import { Button, Label, Card, CardBody, Col, Input, Nav, NavItem, NavLink, Row, TabContent, TabPane, Table, CardHeader } from "reactstrap";
import { FormGrid, Gutters, VerticalForm, HorizontalForm, HorizontalFormLabelSizing, ColumnSizing, AutoSizing, InlineForms, FloatingLabels } from '../../Forms/FormLayouts/FormlayoutsCode';
import { BaseExample, CardTableExample, PaginationExample, SearchExample, SortingExample, LoadingStateExample, FixedHeaderExample, HiddenColumnsExample } from '../../Tables/GridTables/GridTablesData';

import Flatpickr from "react-flatpickr";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

//avatars
import avatar1 from "../../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../../assets/images/users/avatar-3.jpg";
import ship1 from "../../../assets/images/ship1.png";
import ship2 from "../../../assets/images/ship2.png";

const MySidebar = ({ toggleVertical, verticalTab }) => {
    // Vertical Nav Tabs
    return (
        <React.Fragment>
            <Card>
                <CardBody>
                    <h4 className='mb-sm-0 pb-4'>Pop articles</h4>
                    <div className="top-writers d-flex align-items-center pt-4">
                        <div className='d-flex me-2'>
                            <div className='me-2'>
                                <img alt=" " style={{ "width": "80px", "height": "auto"}} src={ship1} />
                            </div>
                            <div>
                                <Link to={'pages-blog-service/article-man'}><h6 style={{ "font-size": "16px" }}>ship1</h6><p>S-345-778</p></Link>
                            </div>
                        </div>
                    </div>

                    <div className="top-writers d-flex align-items-center pt-4">
                        <div className='d-flex me-2'>
                            <div className='me-2'>
                                <img alt=" " style={{ "width": "80px", "height": "auto"}} src={ship2} />
                            </div>
                            <div>
                                <Link to={'pages-blog-service/article-man'}><h6 style={{ "font-size": "16px" }}>ship2</h6><p>S-345-778</p></Link>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <h4 className='mb-sm-0 pb-4'>Top Writers</h4>
                    <div className="top-writers d-flex align-items-center pt-4">
                        <div className='d-flex me-2'>
                            <div className='me-2'>
                                <img alt=" " style={{ "width": "32px", "height": "auto", "border-radius": "50%" }} src={avatar1} />
                            </div>
                            <div>
                                <Link to={'pages-blog-service/article-man'}><h6 style={{ "font-size": "16px" }}>JavinPaul</h6></Link>
                            </div>
                        </div>
                    </div>

                    <div className="top-writers d-flex align-items-center pt-4">
                        <div className='d-flex me-2'>
                            <div className='me-2'>
                                <img alt=" " style={{ "width": "32px", "height": "auto", "border-radius": "50%" }} src={avatar3} />
                            </div>
                            <div>
                                <Link to={'pages-blog-service/article-man'}><h6 style={{ "font-size": "16px" }}>JavinPaul</h6></Link>
                            </div>
                        </div>
                    </div>

                    <div className="top-writers d-flex align-items-center pt-4">
                        <div className='d-flex me-2'>
                            <div className='me-2'>
                                <img alt=" " style={{ "width": "32px", "height": "auto", "border-radius": "50%" }} src={avatar2} />
                            </div>
                            <div>
                                <Link to={'pages-blog-service/article-man'}><h6 style={{ "font-size": "16px" }}>JavinPaul</h6></Link>
                            </div>
                        </div>
                    </div>

                    <div className="top-writers d-flex align-items-center pt-4">
                        <div className='d-flex me-2'>
                            <div className='me-2'>
                                <img alt=" " style={{ "width": "32px", "height": "auto", "border-radius": "50%" }} src={avatar1} />
                            </div>
                            <div>
                                <Link to={'pages-blog-service/article-man'}><h6 style={{ "font-size": "16px" }}>JavinPaul</h6></Link>
                                {/* <p>I am Java programmer, blogger, working on Java, J2EE, UNIX, FIX Protocol. I share Java tip Follow...</p> */}
                            </div>
                        </div>
                    </div>

                </CardBody>
            </Card>
            <div className="card ribbon-box border shadow-none mb-lg-0">
                <div className="card-body text-muted">
                    <span className="ribbon-three ribbon-three-success"><span>News</span></span><br/><br/><br/>
                    <h5>Notification</h5>
                    <p style={{marginBottom: "40px"}}>Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio. Vivamus pretium nec odio cursus.</p>
                </div>
            </div>
        </React.Fragment>
    );
};

export default MySidebar;