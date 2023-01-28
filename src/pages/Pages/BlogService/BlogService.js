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

const BlogService = () => {
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
                filteredBlogs.map((product) => console.log("dd", product.type))

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
                    <BreadCrumb title="Blog Service" />
                    <Row>
                        <Col xl={9} lg={8}>
                            <Card>
                                <CardHeader className=''>
                                    <Nav
                                        className="nav-tabs-custom card-header-tabs border-bottom-0"
                                        role="tablist"
                                    >
                                        <NavItem>
                                            <NavLink
                                                className={classnames(
                                                    { active: activeTab === "1" },
                                                    "fw-semibold"
                                                )}
                                                onClick={() => {
                                                    toggleTab("1", "all");
                                                }}
                                                href="#"
                                            >
                                                All{" "}
                                                <span className="badge badge-soft-danger align-middle rounded-pill ms-1">
                                                    {BlogDataListFilter.length}
                                                </span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames(
                                                    { active: activeTab === "2" },
                                                    "fw-semibold"
                                                )}
                                                onClick={() => {
                                                    toggleTab("2", "published");
                                                }}
                                                href="#"
                                            >
                                                Published{" "}
                                                <span className="badge badge-soft-danger align-middle rounded-pill ms-1">
                                                    {BlogDataPublisedFilter.length}
                                                </span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames(
                                                    { active: activeTab === "3" },
                                                    "fw-semibold"
                                                )}
                                                onClick={() => {
                                                    toggleTab("3", "draft");
                                                }}
                                                href="#"
                                            >
                                                Draft{" "}
                                                <span className="badge badge-soft-danger align-middle rounded-pill ms-1">
                                                    {BlogDataDraftFilter.length}
                                                </span>
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </CardHeader>
                                <CardBody>
                                    <TabContent className="text-muted blog-table-content">
                                        <TabPane>
                                            <div
                                                id="table-product-list-all"
                                                className="table-card gridjs-border-none pb-2"
                                            >
                                                <TableContainer
                                                    columns={columnsBlog}
                                                    data={BlogDataListFilter}
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

export default BlogService;