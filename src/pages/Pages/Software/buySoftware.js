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
import { useSelector, useDispatch } from "react-redux";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { getProgram, ProgramUpVote, ProgramDownVote, getUser, updateOneUser, downloadProgram } from "../../../helpers/fakebackend_helper";

const BuySoftware = (props) => {
    document.title = "Software Detail";

    const [userID, setUserID] = useState('');
    const [userData, setUserData] = useState({});
    const myInformationSelector = useSelector(state => state.Profile.myinformation);

    useEffect(() => {
        if (myInformationSelector) {
            console.log("myInformationSelector", myInformationSelector);
            setUserID(myInformationSelector.id);
        }
        else {
            console.log("Please login first")
        }
    }, [myInformationSelector]);

    useEffect(() => {
        getUser(userID).then(res => {
            console.log("getAvatars", res);
            setUserData(res);
        });
        console.log("dasfasdfa", userID)
    }, [userID]);

    useEffect(() => {
        let temp = [];
        if (userData.votestate) temp = JSON.parse(userData.votestate);
        if (temp.includes(id))
            setDisable(true);
        console.log("here", userData);
        updateOneUser(userID, userData);
        // const userinfo = localStorage.getItem("authUser");
        // const NewUpdateUserInfo = {
        //     ...userinfo,
        //     "votestate":userData.votestate
        // }
        // dispatch(NewUpdateUserInfo);
    }, [userData]);

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
    const [disable, setDisable] = useState(false);
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
                                            <Link to="/pages-software">
                                                <Button
                                                    type="button"
                                                    color="success"
                                                    style={{ float: "left" }}
                                                >
                                                    Back
                                                </Button>
                                            </Link>
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
                                        <Col lg={6} className="fs-5">
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
                                                <Button disabled={disable} color="success" onClick={() => {
                                                    setProgramList({
                                                        ...program, ...{ recommends: program.recommends + 1 }
                                                    })
                                                    ProgramUpVote(id, program);
                                                    let temp = [];
                                                    if (userData.votestate) temp = JSON.parse(userData.votestate);
                                                    temp.push(id);
                                                    setUserData({
                                                        ...userData, ... { votestate: JSON.stringify(temp) }
                                                    });
                                                    setDisable(true);
                                                }} >
                                                    Agree
                                                </Button>
                                            </div>
                                            <div className="col-sm-6 text-center">
                                                <Button disabled={disable} color="success" onClick={() => {
                                                    setProgramList({
                                                        ...program, ...{ unrecommends: program.unrecommends + 1 }
                                                    })
                                                    ProgramDownVote(id, program);
                                                    let temp = [];
                                                    if (userData.votestate) temp = JSON.parse(userData.votestate);
                                                    temp.push(id);
                                                    setUserData({
                                                        ...userData, ... { votestate: JSON.stringify(temp) }
                                                    });
                                                    setDisable(true);
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










