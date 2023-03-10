import React, { useState, useEffect } from 'react'
import { Col, Container, Row, Card, CardBody, Button, CardHeader, TabPane } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";

import { getCampus, upVote, downVote } from "../../../helpers/fakebackend_helper";
import { Link, useParams } from "react-router-dom";
import { diffDates } from '@fullcalendar/common';

const StudyDetail = (props) => {
    document.title = "Study Field Detail";

    let { id } = useParams();
    const [campus, setCampusList] = useState({
        name: "",
        description: "",
        recommends: "",
        unrecommends: ""
    });

    const [disable, setDisable] = useState(false);
    { console.log("All CampusList", campus) }
    useEffect(() => {
        if (id) {
            getCampus(id).then(res => {
                setCampusList(res);
            })
        }
    }, []);
   
    useEffect(() => {
        console.log("Recommends", campus.recommends);
        console.log("Unrecommends", campus.unrecommends);
    }, [campus]);

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
                                                {/* {console.log("AAAAAAA", countUpvote)} */}
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ padding: "50px 20%" }}>
                                        <Row className="pt-4">
                                            <div className="col-sm-6 text-center">
                                                <Button disabled={disable} color="success" onClick={() => {
                                                    setCampusList({
                                                        ...campus, ...{recommends: campus.recommends+1}
                                                    });
                                                    upVote(id, campus);
                                                    setDisable(false)
                                                }} >
                                                    Upvote
                                                </Button>
                                            </div>
                                            <div className="col-sm-6 text-center">
                                                <Button  color="primary" onClick={() => {
                                                    setCampusList({
                                                        ...campus, ...{unrecommends:campus.unrecommends+1}
                                                    });
                                                    downVote(id, campus);
                                                    
                                                }}>
                                                    DownVote
                                                    
                                                </Button>
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
