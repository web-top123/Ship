import React from 'react';
import Home from './home';

import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { Card, CardBody, Col, Container, Row, } from 'reactstrap';
const CompanyIntroduction = () => {
    document.title = "Landing | Velzon - React Admin & Dashboard Template";
    return (    
        <div className="page-content">                                                                    
        <React.Fragment>
            <Container fluid>
        <BreadCrumb title="Introduction" pageTitle="Ecommerce" />
           
                <Row>
                    <Home></Home>
                  
                    
                </Row>
               
               <Row>
                        <Col lg={12}>
                            <Card>
                            

                                <CardBody>

                                    <div className="live-preview">
                                        <Row className="g-3">
                                            <p className="text-muted">Use <code>ribbon-shape</code> class to show ribbon shaped ribbon.</p>
                                            <Col xxl={6}>
                                                <div className="card ribbon-box border shadow-none mb-lg-0">
                                                    <CardBody>
                                                        <div className="ribbon ribbon-primary ribbon-shape">Primary</div>
                                                        <h5 className="fs-14 text-end">Ribbon Shape</h5>
                                                        <div className="ribbon-content text-muted mt-4">
                                                            <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                                                                mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
                                                        </div>
                                                    </CardBody>
                                                </div>
                                            </Col>

                                            <Col xxl={6}>
                                                <div className="card ribbon-box border shadow-none mb-lg-0">
                                                    <CardBody>
                                                        <div className="ribbon ribbon-success ribbon-shape">Success</div>
                                                        <h5 className="fs-14 text-end">Ribbon Shape</h5>
                                                        <div className="ribbon-content text-muted mt-4">
                                                            <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                                                                mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
                                                        </div>
                                                    </CardBody>
                                                </div>
                                            </Col>

                                            <Col xxl={6}>
                                                <div className="card ribbon-box border shadow-none mb-lg-0">
                                                    <CardBody>
                                                        <div className="ribbon ribbon-primary ribbon-shape">Primary</div>
                                                        <h5 className="fs-14 text-end">Ribbon Shape</h5>
                                                        <div className="ribbon-content text-muted mt-4">
                                                            <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                                                                mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
                                                        </div>
                                                    </CardBody>
                                                </div>
                                            </Col>

                                            <Col xxl={6}>
                                                <div className="card ribbon-box border shadow-none mb-lg-0">
                                                    <CardBody>
                                                        <div className="ribbon ribbon-success ribbon-shape">Success</div>
                                                        <h5 className="fs-14 text-end">Ribbon Shape</h5>
                                                        <div className="ribbon-content text-muted mt-4">
                                                            <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                                                                mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
                                                        </div>
                                                    </CardBody>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                  
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
           
          </Container>
        </React.Fragment>
        </div>
    );
};

export default CompanyIntroduction;