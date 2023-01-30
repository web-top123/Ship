import React, { useState, useEffect } from 'react';
import { Label, CardBody, Col, Input, Row, TabPane, Form } from "reactstrap";
import Flatpickr from "react-flatpickr";
import { getGetMyInformation, getAuthenticatedUser } from '../../../../helpers/fakebackend_helper';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../../../store/actions';

// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";


const MyInformation = () => {

    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            // email: "Smith@gmail.com" || '',
            // password: "12345678" || '',
        },
        validationSchema: Yup.object({
            // email: Yup.string().required("Please Enter Your Email"),
            // password: Yup.string().required("Please Enter Your Password"),
        }),
        onSubmit: (values) => {
            // dispatch(loginUser(values, props.history));
            console.log("values", values)
        }
    });

    const dispatch = useDispatch();

    const [myInformation, setMyInformation] = useState([])
    // dispatch(editProfile);
    const user = JSON.parse(localStorage.getItem('authUser'));
    console.log("userid", user.id)

    useEffect(() => {
        dispatch(getProfile(user));
        // setMyInformation(profile);
        console.log("myInformation", myInformation)

    }, []);

    const profile = useSelector(state => state.Profile.success)



    return (
        <React.Fragment>
            <Form
                onSubmit={(e) => {
                    e.preventDefault();
                    validation.handleSubmit();
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
                                placeholder="Enter your identifier" value={profile.username}  onChange={validation.handleChange} invalid={false} />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="mb-3">
                            <Label htmlFor="nameInput" className="form-label">
                                Name
                            </Label>
                            <Input type="text" className="form-control" id="nameInput"
                                placeholder="Enter your name" value={profile.name} />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="mb-3">
                            <Label htmlFor="emailInput" className="form-label">Email
                                Address</Label>
                            <Input type="email" className="form-control" id="emailInput"
                                placeholder="Enter your email"
                                value={myInformation.email} onChange={validation.handleChange} />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="mb-3">
                            <Label htmlFor="skillsInput" className="form-label">Man/Woman</Label>
                            <select id="genderslection" className="form-select mb-3" defaultValue={myInformation.gender} onChange={validation.handleChange}>
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
                                value={myInformation.birthday}
                                onChange={validation.handleChange}
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