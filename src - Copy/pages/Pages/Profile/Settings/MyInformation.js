import React, { useState, useEffect } from 'react';
import { Label, CardBody, Col, Input, Row, TabPane, Form } from "reactstrap";
import Flatpickr from "react-flatpickr";
import { getGetMyInformation, getAuthenticatedUser, putSaveMyInformation, updateAuthenticatedUser } from '../../../../helpers/fakebackend_helper';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../../../store/actions';

// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";


const MyInformation = () => {


    const [myInformation, setMyInformation] = useState({ birthday: '', username: '', name: '', email: '' });
    // const [, setMyInformation] = useState("");


    useEffect(() => {
        var user = getAuthenticatedUser();
        console.log(user);
        getGetMyInformation(user.id).then(res => {
            setMyInformation(res);
        })
    }, []);

    const saveMyInformation = () => {
        var user = getAuthenticatedUser();
        console.log(user);
        putSaveMyInformation(user.id, myInformation);
        if (user.username != myInformation.username) {
            updateAuthenticatedUser({ ...user, ...{ username: myInformation.username } });
            window.location.reload()
        }
    }

    return (
        <React.Fragment>
            <Form
                onSubmit={(e) => {
                    e.preventDefault();
                    saveMyInformation();
                    return false;
                }}
                action="#">
                <Row>
                    <Col lg={6}>
                        <div className="mb-3">
                            <Label htmlFor="identifierInput" className="form-label">
                                Identifier
                            </Label>
                            <Input type="text" className="form-control" id="identifierInput"

                                placeholder="Enter your identifier" value={myInformation.username} onChange={e => { setMyInformation({ ...myInformation, ...{ username: e.target.value } }) }} />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="mb-3">
                            <Label htmlFor="nameInput" className="form-label">
                                Name
                            </Label>
                            <Input type="text" className="form-control" id="nameInput"
                                placeholder="Enter your name" value={myInformation.name} />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="mb-3">
                            <Label htmlFor="emailInput" className="form-label">Email
                                Address</Label>
                            <Input type="email" className="form-control" id="emailInput"
                                placeholder="Enter your email" value={myInformation.email} />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="mb-3">
                            <Label htmlFor="skillsInput" className="form-label">Man/Woman</Label>
                            <select id="genderslection" className="form-select mb-3" >
                                <option value="Male">Male</option>
                                <option value="Femail">Female</option>
                            </select>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="mb-3">
                            <Label htmlFor="BirthdaydatInput" className="form-label">
                                Birthday
                            </Label>
                            <Flatpickr
                                className="form-control"
                                options={{
                                    dateFormat: "d M, Y"
                                }}

                            />
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="hstack gap-2 justify-content-end">
                            <button type="submit"
                                className="btn btn-primary">Updates</button>
                        </div>
                    </Col>
                </Row>

            </Form>

        </React.Fragment>
    )


}

export default MyInformation;