import React, { useState, useEffect } from 'react'
import { Col, Container, Row, Card, CardBody, Button, CardHeader, TabPane } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";

import { getCampus } from "../../../helpers/fakebackend_helper";
import { Link, useParams } from "react-router-dom";


const StudyDetail = (props) => {
    document.title = "Study Field Detail";



    let { id } = useParams();
    const [campus, setCampusList] = useState({
        name: "",
        description: ""

    });
    { console.log("asdfa", id) }
    useEffect(() => {
        if (id) {
            getCampus(id).then(res => {
                setCampusList(res);
            })
        }
    }, []);
    console.log("ppppp", campus);

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Study Detail" />

                    <Row>
                        <Col xl={12} lg={12}>
                            <Card>
                                <CardHeader>
                                    <Row>
                                        <Col lg={11}>
                                            <h1 style={{ textAlign: "center" }}>{campus.name}</h1>
                                        </Col>
                                        <Col lg={1}>
                                            <Link to="/pages-study-field"><Button
                                                type="button"
                                                className="btn-close"
                                                style={{ float: "right" }}
                                            >
                                            </Button></Link>
                                        </Col>
                                    </Row>

                                </CardHeader>

                                <CardBody className='px-5 py-5'>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex mb-4'>

                                            <div>

                                                <span>{campus.description}</span>
                                            </div>
                                        </div>

                                    </div>

                                    <div style={{ padding: "50px 20%" }}>
                                        <Row className="pt-4">
                                            <div className="col-sm-6 text-center">
                                                <Button color="light" onClick={() => { }} >Agree</Button>
                                            </div>
                                            <div className="col-sm-6 text-center">
                                                <Button color="primary" onClick={() => {

                                                }}>Disagree</Button>
                                            </div>
                                        </Row>
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
export default StudyDetail;
