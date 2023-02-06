import React, { useState, useEffect } from 'react'
import { Col, Container, Row, Card, CardBody, TabContent, Nav, NavItem, NavLink, CardHeader, TabPane, Button, Modal, ModalHeader, Label, Input, Form } from "reactstrap";
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
import Select from "react-select";
import { useQuill } from "react-quilljs";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "quill/dist/quill.snow.css";


const BlogService = () => {

    const { quillRef } = useQuill();

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
            if (type == 'date') { setBlogDataPublisedFilter(filteredBlogs); setBlogDataList(filteredBlogs); }
            if (type == 'trending') { setBlogDataList(filteredBlogs); }
            if (type == 'draft') { setBlogDataDraftFilter(BlogDataDraftFilter); setBlogDataList(filteredBlogs); }
            // setBlogDataList(filteredBlogs);
        }
    };

    useEffect(() => {
        setBlogDataList(BlogDataListFilter);
    }, [BlogDataListFilter]);

    const [modal_large, setmodal_large] = useState(false);
    function tog_large() {
        setmodal_large(!modal_large);
    }

    const sort = [
        {
            options: [
                { label: "Engineering", value: "Engineering" },
                { label: "Math", value: "Math" },
            ],
        },
    ];
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Blog Service" />
                    <Row>
                        <Col xl={9} lg={8}>
                            <Card>
                                <CardHeader className='d-flex justify-content-between'>
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
                                                    toggleTab("1", "trending");
                                                }}
                                                href="#"
                                            >
                                                Trending{" "}
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
                                                    toggleTab("2", "date");
                                                }}
                                                href="#"
                                            >
                                                Date{" "}
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
                                    <Button color="primary" className='new-article-add-btn' onClick={() => tog_large(true)}>New Article Add</Button>
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
                                        <Link className="rounded-pill btn btn-light tags me-4" to={'pages-blog-service/article-kind'}>Software</Link>
                                        <Link className="rounded-pill btn btn-light tags me-4" to={'pages-blog-service/article-kind'}>Java</Link>
                                        <Link className="rounded-pill btn btn-light tags me-4" to={'pages-blog-service/article-kind'}>Ship</Link>
                                        <Link className="rounded-pill btn btn-light tags me-4" to={'pages-blog-service/article-kind'}>Ship Control</Link>
                                        <Link className="rounded-pill btn btn-light tags me-4" to={'pages-blog-service/article-kind'}>Machine Learning</Link>
                                        <Link className="rounded-pill btn btn-light tags me-4" to={'pages-blog-service/article-kind'}>Ship Control</Link>
                                        <Link className="rounded-pill btn btn-light tags me-4" to={'pages-blog-service/article-kind'}>Data</Link>
                                        <Link className="rounded-pill btn btn-light tags me-4" to={'pages-blog-service/article-kind'}>Electric Engineering</Link>
                                        <Link className="rounded-pill btn btn-light tags me-4" to={'pages-blog-service/article-kind'}>Boat Shipping</Link>
                                    </div>
                                    <div className='Top Writers'>

                                    </div>
                                </CardBody>
                                <CardBody>
                                    <h4 className='mb-sm-0 pb-4'>Top Writers</h4>
                                    <div className="top-writers d-flex align-items-center pt-4">
                                        <div className='d-flex me-2'>
                                            <div className='me-2'>
                                                <img style={{ "width": "32px", "height": "auto", "border-radius": "50%" }} src={avatar1} />
                                            </div>
                                            <div>
                                                <Link to={'pages-blog-service/article-man'}><h6 style={{ "font-size": "16px" }}>JavinPaul</h6></Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="top-writers d-flex align-items-center pt-4">
                                        <div className='d-flex me-2'>
                                            <div className='me-2'>
                                                <img style={{ "width": "32px", "height": "auto", "border-radius": "50%" }} src={avatar3} />
                                            </div>
                                            <div>
                                                <Link to={'pages-blog-service/article-man'}><h6 style={{ "font-size": "16px" }}>JavinPaul</h6></Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="top-writers d-flex align-items-center pt-4">
                                        <div className='d-flex me-2'>
                                            <div className='me-2'>
                                                <img style={{ "width": "32px", "height": "auto", "border-radius": "50%" }} src={avatar2} />
                                            </div>
                                            <div>
                                                <Link to={'pages-blog-service/article-man'}><h6 style={{ "font-size": "16px" }}>JavinPaul</h6></Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="top-writers d-flex align-items-center pt-4">
                                        <div className='d-flex me-2'>
                                            <div className='me-2'>
                                                <img style={{ "width": "32px", "height": "auto", "border-radius": "50%" }} src={avatar1} />
                                            </div>
                                            <div>
                                                <Link to={'pages-blog-service/article-man'}><h6 style={{ "font-size": "16px" }}>JavinPaul</h6></Link>
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
            {/* Large Modal */}
            <Modal
                size="lg"
                isOpen={modal_large}
                toggle={() => {
                    tog_large();
                }}
            >
                <ModalHeader>
                    New Article Add
                    <Button
                        onClick={() => {
                            setmodal_large(false);
                        }}
                        type="button"
                        className="btn-close"
                        aria-label="Close"
                    >

                    </Button>
                </ModalHeader>
                <div className="modal-body">
                    <div className='mb-3'>
                        <Label
                            htmlFor="id-field-sort"
                            className="form-label"
                        >Sort</Label>
                        <Select name="sort" id="id-field-sort" options={sort}>
                        </Select>
                    </div>
                    <div className='mb-3'>
                        <Label
                            htmlFor="id-field-title"
                            className="form-label"
                        >Title</Label>
                        <Input
                            name="title"
                            id="id-field"
                            className="form-control"
                            placeholder="Enter Article Title"
                            type="text" />
                    </div>
                    <div className='mb-3'>
                        <Label>
                            Article Content
                        </Label>
                        <Form method="post">
                            <CKEditor
                                editor={ClassicEditor}
                            />
                        </Form>

                    </div>
                    <div className='mb-3 d-flex justify-content-between align-items-center'>
                        <div className='d-flex'>
                            <span className='pe-3'>Contact Information</span>
                            <Input
                                name="contactinfo"
                                id="id-field-contactinfo"
                                className="form-control"
                                placeholder="129122312"
                                type="text" />
                        </div>
                        <div>
                            <span className='pe-3'>Attach File</span>
                            <Button color="primary" className="btn-label right"><i className="ri-file-upload-line label-icon align-middle fs-16 ms-2"></i> Attach File </Button>

                        </div>

                    </div>
                    <div className='mb-3 d-flex align-items-center'>
                        <span className='pe-3'>Source</span>
                        <Input
                            name="source"
                            id="id-field-source"
                            className="form-control"
                            placeholder="Title Book"
                            type="text" />
                    </div>
                    <div className='pt-2 d-flex justify-content-between align-items-center'>
                            <Button color="primary" data-bs-toggle="button" aria-pressed="false" className='me-2'>
                                Grammar Checking
                            </Button>
                            <Button color="primary" data-bs-toggle="button" aria-pressed="false">
                                Add
                            </Button>
                    </div>
                </div>
            </Modal>
        </React.Fragment>
    );
};

export default BlogService;