import React, { useState, useEffect } from 'react';
import { Label, CardBody, Col, Input, Row, TabPane, Form } from "reactstrap";
import Flatpickr from "react-flatpickr";
import { getGetMyInformation, getAuthenticatedUser, putSaveMyInformation, updateAuthenticatedUser } from '../../../../helpers/fakebackend_helper';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile, editProfile } from '../../../../store/actions';

// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";


const MyInformation = () => {


    // const [myInformation, setMyInformation] = useState({ birthday: '', username: '', name: '', email: '' });

    // useEffect(() => {
    //     var user = getAuthenticatedUser();
    //     console.log(user);
    //     getGetMyInformation(user.id).then(res => {
    //         setMyInformation(res);
    //     })
    // }, []);

    // const saveMyInformation = () => {
    //     var user = getAuthenticatedUser();
    //     console.log(user);
    //     putSaveMyInformation(user.id, myInformation);
    //     if (user.username != myInformation.username) {
    //         updateAuthenticatedUser({ ...user, ...{ username: myInformation.username } });
    //         window.location.reload()
    //     }
    // }

    const dispatch = useDispatch();
    const [myInformation, setMyInformation] = useState({ birthday: '', username: '', name: '', email: '' });
    // const [, setMyInformation] = useState("");

    console.log("localstorage", localStorage.getItem('authUser'));
    const user =JSON.parse(localStorage.getItem('authUser'));
    const myinformationdispatch = useSelector(state => {console.log("profile",state.Profile); return state.Profile.myinformation})
    console.log("myinformationdispatchb", myinformationdispatch);
    
    useEffect(()=>{
        // 
        if(!myinformationdispatch) {
            dispatch(getProfile(user))
            console.log("myinformationdispatchx", myinformationdispatch);
        } else {
            setMyInformation(myinformationdispatch);
            console.log("myinformationdispatchyyyyy", myinformationdispatch);

        }
    },[myinformationdispatch])

    const saveMyInformation = () => {
        console.log("mysave",myInformation );
        dispatch(editProfile(myInformation));
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
                                placeholder="Enter your name" value={myInformation.name} onChange={e => { setMyInformation({ ...myInformation, ...{ name: e.target.value } }) }}/>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="mb-3">
                            <Label htmlFor="emailInput" className="form-label">Email
                                Address</Label>
                            <Input type="email" className="form-control" id="emailInput"
                                placeholder="Enter your email" value={myInformation.email}  onChange={e => { setMyInformation({ ...myInformation, ...{ email: e.target.value } }) }}/>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="mb-3">
                            <Label htmlFor="skillsInput" className="form-label">Man/Woman</Label>
                            <select id="genderslection" className="form-select mb-3" value={myInformation.gender} onChange={e => { setMyInformation({ ...myInformation, ...{ gender: e.target.value } }) }} >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
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
                                value = {new Date(myInformation.birthday)}
                                onChange={e => {setMyInformation({ ...myInformation, ...{ birthday: e[0]} }) }}
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