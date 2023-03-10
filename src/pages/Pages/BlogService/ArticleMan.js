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
import ArticleSideBar from './ArticleSideBar';

const ArticleMan = () => {
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
            if (type === 'date') {setBlogDataPublisedFilter(filteredBlogs);setBlogDataList(filteredBlogs);}
            if (type === 'trending') {setBlogDataList(filteredBlogs);}
            if (type === 'draft') {setBlogDataDraftFilter(BlogDataDraftFilter);setBlogDataList(filteredBlogs);}
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
                                <CardHeader className='text-center d-flex justify-content-center align-items-center'>
                                    <img src = {avatar1} style={{"width":"40px", "height":"auto", "border-radius": "50%"}} alt="" className="me-3"/><h4>JavinPaul<span>'s Article</span></h4>
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
                            <ArticleSideBar />
                        
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default ArticleMan;