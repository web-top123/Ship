import React from 'react';
import Navbar from '../../Landing/navbar';
import Footer from '../../Landing/footer';
import { Button, Label, CardBody, Col, Input, Nav, NavItem, NavLink, Row, TabContent, TabPane, Table, CardHeader } from "reactstrap";
import { ArticleData, BaseExample, CardTableExample, PaginationExample, SearchExample, SortingExample, LoadingStateExample, FixedHeaderExample, HiddenColumnsExample } from '../../../pages/Tables/GridTables/GridTablesData';


const QuestionService = () => {
    return (
        <React.Fragment>
            <div className="layout-wrapper landing wrap-container ">
                <Navbar />
                <div className="bread-banner">
                    <div className="bg-overlay bg-overlay-pattern"></div>
                    <div className="container d-flex justify-content-between">
                        <h4>Question Service</h4>
                        {/* <div className="gridjs-search">
                            <input type="search" placeholder="Type a keyword..." aria-label="Type a keyword..." className="gridjs-input gridjs-search-input" />
                        </div> */}
                        <Button color="primary" className="btn-label"> <i className="ri-user-smile-line label-icon align-middle fs-16 me-2"></i> New Article Add </Button>
                    </div>
                </div>
                <main>
                    <div className="container-fluid px-5 py-3">
                        <Row>
                        <Col md={10}>
                            <div className="pb-0 question-table" id="">
                                <div>
                                    <ArticleData />
                                </div>
                            </div>
                        </Col>
                        <Col md={2} className="notification-question-g">
                            <div className="card p-0 card-body">
                                <div className="rounded-top alert-solid border-0 rounded-0 m-0 d-flex align-items-center justify-content-center alert alert-danger fade show text-center">
                                    <span>Article Sort Selection</span>
                                </div>
                                <div className="question-article-sel d-flex align-items-center flex-column pt-3">
                                    <a href="#">Total </a>
                                    <a href="#">Notification </a>
                                    <a href="#">Question </a>
                                    <a href="#">Genral </a>
                                    <a href="#">Software </a>
                                    <a href="#">Foreign </a>
                                    <a href="#">Other </a>
                                </div>
                            </div>
                            <div className="card mt-3 p-0 card-body">
                                <div className="rounded-top alert-solid border-0 rounded-0 m-0 d-flex align-items-center justify-content-center alert alert-danger fade show text-center">
                                    <span>Best Voter</span>
                                </div>
                                <div className="question-vot-sel d-flex align-items-center flex-column pt-3">
                                    <a href="#">id123 Robert</a>
                                    <a href="#">id123 Robert </a>
                                    <a href="#">id123 Robert </a>
                                    <a href="#">id123 Robert </a>
                                    <a href="#">id123 Weston </a>
                                    <a href="#">id123 Robert </a>
                                    <a href="#">id123 Robert </a>
                                </div>
                            </div>
                            <div className="card mt-5 py-3 px-3 card-body text-center">
                                <div className="notification-pan">
                                    <span className="badge bg-secondary p-3">Notification</span>
                                </div>
                                <h5>Vote method</h5>
                                <p>
                                    Set the direction of flex items in a flex container with direction utilities. In most cases you can omit the horizontal class here as the browser default is row. However, you may encounter situations where you needed to explicitly set this value (like responsive layouts).
                                </p>
                            </div>
                        </Col>
                        </Row>
                    </div>
                    
                </main>
                <Footer />
            </div>
        </React.Fragment>
    )
}


export default QuestionService