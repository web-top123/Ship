import React, { useState, useEffect } from "react";

import {
    Container,
    Row,
    Card,
    CardHeader,
    Button,
    CardBody,
    Col,
} from "reactstrap";
import { Link, useParams } from "react-router-dom";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { getProgram, ProgramUpVote, ProgramDownVote, downloadProgram } from "../../../helpers/fakebackend_helper";

const BuySoftware = (props) => {
    document.title = "Software Detail";

    let { id } = useParams();
    const [program, setProgramList] = useState({
        name: "",
        requirement: "",
        description: "",
        cost: "",
        recommends: "",
        unrecommends: "",
    });
    console.log("AAAAAAA", program);

    useEffect(() => {
        if (id) {
            getProgram(id).then(res => {
                setProgramList(res);
            })
        }
    }, []);

    useEffect(() => {
        console.log("aaa", program.recommends);
        console.log("aaa", program.unrecommends);
    }, [program]);

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
                                            <h1 style={{ textAlign: "center" }}>{program.name}</h1>
                                            {console.log("AAAAADD", program.name)}
                                        </Col>
                                        <Col lg={1}>
                                            <Link to="/pages-software"><Button
                                                type="button"
                                                className="btn-close"
                                                style={{ float: "right" }}
                                            >
                                            </Button></Link>
                                        </Col>
                                    </Row>
                                </CardHeader>
                                <CardBody className='px-5 py-5'>
                                    <div className='d-flex justify-content-center'>
                                        <div className="col-sm-3">
                                            {/* <div className="avatar-lg bg-light rounded p-1"> */}
                                            <div style={{ width: 1000 }}>
                                                <img
                                                    src={downloadProgram(program.id)} alt="..." className="img-fluid d-block">
                                                </img>
                                            </div>
                                        </div>
                                        <Col lg={6}>
                                            <div className='d-flex mb-4'>
                                                <div>
                                                    <b>Description: </b>
                                                </div>
                                                <div>
                                                    {program.description}
                                                </div>
                                            </div>
                                            <div className='d-flex mb-4'>
                                                <div>
                                                    <b>Requirement: </b>
                                                </div>
                                                <div>
                                                    {program.requirement}
                                                </div>
                                            </div>
                                            <div className='d-flex mb-4'>
                                                <div>
                                                    <b>Cost: </b>
                                                </div>
                                                <div>
                                                    {program.cost}
                                                </div>
                                            </div>
                                        </Col>
                                    </div>

                                    <div style={{ padding: "50px 20%" }}>
                                        <Row className="pt-4">
                                            <div className="col-sm-6 text-center">
                                                <Button color="light" onClick={() => {
                                                    setProgramList({
                                                        ...program, ...{ recommends: program.recommends + 1 }
                                                    })
                                                    ProgramUpVote(id, program);
                                                }} >
                                                    Agree
                                                </Button>
                                            </div>
                                            <div className="col-sm-6 text-center">
                                                <Button color="primary" onClick={() => {
                                                    setProgramList({
                                                        ...program, ...{ unrecommends: program.unrecommends + 1 }
                                                    })
                                                    ProgramDownVote(id, program);
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

export default BuySoftware;










