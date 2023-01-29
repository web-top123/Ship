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

import {BlogDetailData} from './TestBlogDetail'

const BlogServiceDetail = () => {
    document.title = "Blog Service";
    const columnsBlog = useMemo(() => columnsBlogData, []);

    const [BlogDataListFilter, setBlogDataList] = useState(BlogDataList);
    const [BlogDataPublisedFilter, setBlogDataPublisedFilter] = useState([]);
    const [BlogDataDraftFilter, setBlogDataDraftFilter] = useState([]);

    const [activeTab, setActiveTab] = useState("1");

    const toggleTab = (tab, type) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
            let filteredBlogs = BlogDataList;
            if (type !== "all") {
                filteredBlogs.map((product) => console.log(product))
                filteredBlogs = BlogDataList.filter((product) => product.type == type);
            }
            if (type == 'published') {setBlogDataPublisedFilter(filteredBlogs);setBlogDataList(filteredBlogs);}
            if (type == 'all') {setBlogDataList(filteredBlogs);}
            if (type == 'draft') {setBlogDataDraftFilter(BlogDataDraftFilter);setBlogDataList(filteredBlogs);}
            // setBlogDataList(filteredBlogs);
        }
    };

    useEffect(() => {
        setBlogDataList(BlogDataListFilter);
    }, [BlogDataListFilter]);

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Blog Detail" />
                    <Row>
                        <Col xl={9} lg={8}>
                            <Card>
                                <CardBody className='px-5 py-5'>
                                    <h4>{BlogDetailData.title}</h4>
                                    {BlogDetailData.content}
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