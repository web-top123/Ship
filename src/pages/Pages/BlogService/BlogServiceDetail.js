import React, { useState, useEffect } from 'react'
import { Col, Container, Row, Card, CardBody, TabContent, Nav, NavItem, NavLink, CardHeader, TabPane } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { columnsBlogData, BlogDataList } from './TestBlogData';
import { useMemo } from "react";
import TableContainer from "../../../Components/Common/TableContainer";
import classnames from "classnames";
import { useSelector } from 'react-redux';

import avatar1 from "../../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../../assets/images/users/avatar-3.jpg";
import { size } from 'lodash';

import {BlogDetailData, columnsReplyMessageData} from './TestBlogDetail'

const BlogServiceDetail = () => {
    document.title = "Blog Service";
    const columnsReplyMessage = useMemo(() => columnsReplyMessageData, []);

    const [BlogDetailDataFilter, setBlogDataList] = useState(BlogDetailData.user_response);

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Blog Detail" />
                    <Row>
                        <Col xl={9} lg={8}>
                            <Card>
                                <CardBody className='px-5 py-5 blog-user-detail'>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex mb-4'>
                                            <div style={{"width":"48px"}} className="me-3">
                                                <img src = {BlogDetailData.user_img} style={{"width":"100%","border-radius":"50%"}}/>    
                                            </div>
                                            <div>
                                                <h5>{BlogDetailData.user_name}</h5>
                                                <span>{BlogDetailData.date}</span>
                                            </div>
                                        </div>
                                        <div>
                                            <i className="bx bx-like pe-1"></i><span className="pe-3">{BlogDetailData.thumb}</span>
                                            <i className="bx bx-message pe-1"></i><span className="pe-3">{BlogDetailData.message}</span>
                                            <i className="bx bx-message-dots pe-1"></i><span className="pe-3">{BlogDetailData.reply_message}</span>
                                        </div>
                                    </div>
                                    <h4 className='mb-4'>{BlogDetailData.title}</h4>
                                    {BlogDetailData.content}
                                    <div className='pt-4'>
                                        <TabContent className="text-muted blog-detail-rtable-content">
                                            <TabPane>
                                                <div
                                                    id="table-product-list-all"
                                                    className="table-card gridjs-border-none pb-2"
                                                >
                                                    <TableContainer
                                                        columns={columnsReplyMessage}
                                                        data={BlogDetailDataFilter}
                                                        isGlobalFilter={false}
                                                        isGlobalSearch={true}
                                                        isAddUserList={false}
                                                        customPageSize={10}
                                                        divClass="table-responsive mb-1"
                                                        tableClass="mb-0 table-borderless"
                                                        theadClass="table-light text-muted"
                                                    />
                                                </div>
                                            </TabPane>

                                    </TabContent>
                                    </div>
                                </CardBody>
                                 
                            </Card>
                        </Col>
                        <Col xl={3} lg={4}>
                            <Card>
                                <CardBody>
                                    <h4 className='mb-sm-0'>Realted Topics</h4>
                                    <div className="realted-topic d-flex flex-wrap">
                                        <button className="rounded-pill btn btn-light tags me-4">Software</button>
                                        <button className="rounded-pill btn btn-light tags me-4">Java</button>
                                        <button className="rounded-pill btn btn-light tags me-4">Ship</button>
                                        <button className="rounded-pill btn btn-light tags me-4">Ship Control</button>
                                        <button className="rounded-pill btn btn-light tags me-4">Machine Learning</button>
                                        <button className="rounded-pill btn btn-light tags me-4">Ship Control</button>
                                        <button className="rounded-pill btn btn-light tags me-4">Data</button>
                                        <button className="rounded-pill btn btn-light tags me-4">Electric Engineering</button>
                                        <button className="rounded-pill btn btn-light tags me-4">Boat Shipping</button>
                                    </div>
                                    <div className='Top Writers'>

                                    </div>
                                </CardBody>
                                <CardBody>
                                    <h4 className='mb-sm-0 pb-4'>Top Writers</h4>
                                    <div className="top-writers d-flex align-items-center pt-2">
                                        <div className='d-flex me-2'>
                                            <div className='me-2'>
                                                <img style={{ "width": "32px", "height":"auto", "border-radius":"50%"}} src={avatar1} />
                                            </div>
                                            <div>
                                                <h6 style={{"font-size":"16px"}}>JavinPaul</h6>
                                                <p>I am Java programmer, blogger, working on Java, J2EE, UNIX, FIX Protocol. I share Java tip Follow...</p>
                                            </div>
                                        </div>
                                        <button className="rounded-pill btn btn-success"> Follow </button>
                                    </div>

                                    <div className="top-writers d-flex align-items-center pt-2">
                                        <div className='d-flex me-2'>
                                            <div className='me-2'>
                                                <img style={{ "width": "32px", "height":"auto", "border-radius":"50%"}} src={avatar3} />
                                            </div>
                                            <div>
                                                <h6 style={{"font-size":"16px"}}>JavinPaul</h6>
                                                <p>I am Java programmer, blogger, working on Java, J2EE, UNIX, FIX Protocol. I share Java tip Follow...</p>
                                            </div>
                                        </div>
                                        <button className="rounded-pill btn btn-success"> Follow </button>
                                    </div>

                                    <div className="top-writers d-flex align-items-center pt-2">
                                        <div className='d-flex me-2'>
                                            <div className='me-2'>
                                                <img style={{ "width": "32px", "height":"auto", "border-radius":"50%"}} src={avatar2} />
                                            </div>
                                            <div>
                                                <h6 style={{"font-size":"16px"}}>JavinPaul</h6>
                                                <p>I am Java programmer, blogger, working on Java, J2EE, UNIX, FIX Protocol. I share Java tip Follow...</p>
                                            </div>
                                        </div>
                                        <button className="rounded-pill btn btn-success"> Follow </button>
                                    </div>

                                    <div className="top-writers d-flex align-items-center pt-2">
                                        <div className='d-flex me-2'>
                                            <div className='me-2'>
                                                <img style={{ "width": "32px", "height":"auto", "border-radius":"50%"}} src={avatar1} />
                                            </div>
                                            <div>
                                                <h6 style={{"font-size":"16px"}}>JavinPaul</h6>
                                                <p>I am Java programmer, blogger, working on Java, J2EE, UNIX, FIX Protocol. I share Java tip Follow...</p>
                                            </div>
                                        </div>
                                        <button className="rounded-pill btn btn-success"> Follow </button>
                                    </div>

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default BlogServiceDetail;