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
import { Link } from 'react-router-dom';

const ArticleKind = () => {
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
            if (type !== "trending") {
                filteredBlogs.map((product) => console.log(product))
                filteredBlogs = BlogDataList.filter((product) => product.type == type);
            }
            if (type == 'date') {setBlogDataPublisedFilter(filteredBlogs);setBlogDataList(filteredBlogs);}
            if (type == 'trending') {setBlogDataList(filteredBlogs);}
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
                                <CardHeader className='text-center'>
                                    <h4>SoftWare</h4>
                                </CardHeader>
                                <CardBody className=''>
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
                                        <Link className="rounded-pill btn btn-light tags me-4" to={'/pages-blog-service/article-kind'}>Software</Link>
                                        <Link className="rounded-pill btn btn-light tags me-4"  to={'/pages-blog-service/article-kind'}>Java</Link>
                                        <Link className="rounded-pill btn btn-light tags me-4"  to={'/pages-blog-service/article-kind'}>Ship</Link>
                                        <Link className="rounded-pill btn btn-light tags me-4"  to={'/pages-blog-service/article-kind'}>Ship Control</Link>
                                        <Link className="rounded-pill btn btn-light tags me-4"  to={'/pages-blog-service/article-kind'}>Machine Learning</Link>
                                        <Link className="rounded-pill btn btn-light tags me-4"  to={'/pages-blog-service/article-kind'}>Ship Control</Link>
                                        <Link className="rounded-pill btn btn-light tags me-4"  to={'/pages-blog-service/article-kind'}>Data</Link>
                                        <Link className="rounded-pill btn btn-light tags me-4"  to={'/pages-blog-service/article-kind'}>Electric Engineering</Link>
                                        <Link className="rounded-pill btn btn-light tags me-4"  to={'/pages-blog-service/article-kind'}>Boat Shipping</Link>
                                    </div>
                                    <div className='Top Writers'>

                                    </div>
                                </CardBody>
                                <CardBody>
                                    <h4 className='mb-sm-0 pb-4 border-top pt-4'>Top Writers</h4>
                                    <div className="top-writers d-flex align-items-center pt-4">
                                        <div className='d-flex me-2'>
                                            <div className='me-2'>
                                                <img style={{ "width": "32px", "height":"auto", "border-radius":"50%"}} src={avatar1} />
                                            </div>
                                            <div>
                                            <Link to={'/pages-blog-service/article-man'}><h6 style={{"font-size":"16px"}}>JavinPaul</h6></Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="top-writers d-flex align-items-center pt-4">
                                        <div className='d-flex me-2'>
                                            <div className='me-2'>
                                                <img style={{ "width": "32px", "height":"auto", "border-radius":"50%"}} src={avatar3} />
                                            </div>
                                            <div>
                                                <Link to={'/pages-blog-service/article-man'}><h6 style={{"font-size":"16px"}}>JavinPaul</h6></Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="top-writers d-flex align-items-center pt-4">
                                        <div className='d-flex me-2'>
                                            <div className='me-2'>
                                                <img style={{ "width": "32px", "height":"auto", "border-radius":"50%"}} src={avatar2} />
                                            </div>
                                            <div>
                                            <Link to={'/pages-blog-service/article-man'}><h6 style={{"font-size":"16px"}}>JavinPaul</h6></Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="top-writers d-flex align-items-center pt-4">
                                        <div className='d-flex me-2'>
                                            <div className='me-2'>
                                                <img style={{ "width": "32px", "height":"auto", "border-radius":"50%"}} src={avatar1} />
                                            </div>
                                            <div>
                                            <Link to={'/pages-blog-service/article-man'}><h6 style={{"font-size":"16px"}}>JavinPaul</h6></Link>
                                                {/* <p>I am Java programmer, blogger, working on Java, J2EE, UNIX, FIX Protocol. I share Java tip Follow...</p> */}
                                            </div>
                                        </div>
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

export default ArticleKind;