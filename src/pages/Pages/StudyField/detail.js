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

    
    { console.log("asdfa", campus) }
    useEffect(() => {
        if (id) {
            getCampus(id).then(res => {
                setCampusList(res);
            })
        }
    }, []);
   
    useEffect(() => {
        console.log("aaa", campus.recommends);
        console.log("aaa", campus.unrecommends);
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
                                                <Button color="light" onClick={() => {
                                                    setCampusList({
<<<<<<< HEAD
                                                        ...campus, ...{recommends: campus.recommends + 1}
                                                    })
                                                    downVote(id, campus);
=======
                                                        ...campus, ...{recommends: campus.recommends+1}
                                                    });
                                                    upVote(id, campus);
>>>>>>> 31f0b96016cc28ea98cb0a1cb7222ea4b0b9ef9b
                                                }} >
                                                    Agree
                                                </Button>
                                            </div>
                                            <div className="col-sm-6 text-center">
                                                <Button color="primary" onClick={() => {
                                                    setCampusList({
<<<<<<< HEAD
                                                        ...campus, ...{unrecommends: campus.unrecommends - 1}
                                                    })
=======
                                                        ...campus, ...{unrecommends:campus.unrecommends-1}
                                                    });
>>>>>>> 31f0b96016cc28ea98cb0a1cb7222ea4b0b9ef9b
                                                    downVote(id, campus);
                                                }}>
                                                    Disagree
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
