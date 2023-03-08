import React, { useEffect, useState, useMemo } from 'react';
import { CardHeader, TabPane, Row, Col, Card } from "reactstrap";
import { getAvatars, downloadAvatar } from '../../../../helpers/fakebackend_helper';

import avatar1 from "../../../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../../../assets/images/users/avatar-5.jpg";

import ImgSelect from './ImgSelect';
import Select from 'react-select';
const Mine = () => {

    const [avatarList, setAvatarList] = useState([]);

    useEffect(() => {
        getAvatarList();
    }, []);

    const getAvatarList = () => {
        getAvatars().then(res => {
            console.log("Avatar list", res);
            setAvatarList(res);
        })
    }

    function tog_large(e) {
        document.querySelectorAll(".my-img-select img").forEach(img => {
            if (img.src !== e.currentTarget.src) {
                img.classList.remove("img-buy")
                img.classList.add("img-no-buy")
                img.classList.add("img-no-buy-x")
            } else {
                img.classList.toggle("img-buy")
            }
        })
    }

    return (
        <React.Fragment>
            <TabPane tabId="6" id="v-pill-image-icon">
                <Row>
                    <Col>
                        <div className="mb-2">
                            <div className="ps-0">
                                <h4 className="card-title flex-grow-1">Image Icon Selection</h4>
                            </div>
                        </div>
                        <div style={{ height: 300, overflowY: 'scroll' }}>
                            <div className="mt-5 md-0 px-5 my-img-select">
                                <div className='d-block justify-content-between pb-3' >
                                    {
                                        avatarList.map((e, key) => {
                                            return <Row key={key} style={{ display: "inline", paddingBottom: 10, paddingLeft:10}}>
                                                <Col style={{ display: "inline"}}>
                                                    <img className={"img-thumbnail rounded-circle avatar-xl "}
                                                        src={downloadAvatar(e.id)}
                                                        alt=""
                                                        onClick={(e) => tog_large(e)}
                                                    />
                                                </Col>
                                            </Row>
                                        })
                                    }
                                </div>
                            </div>
                        </div>


                        <div className="text-end pt-5">
                            <button type="submit" className="btn btn-primary">Purchase</button>
                        </div>
                    </Col>

                    <Col>
                        <div className="mb-2">
                            <div className="ps-0">
                                <h4 className="card-title flex-grow-1">My Image List</h4>
                            </div>
                        </div>
                        <div style={{ height: 300, overflowY: 'scroll', }}>
                            <div className="mt-4 md-0 px-5 my-img-select">
                                <div className='d-block justify-content-between pb-3' >
                                    <img className={"img-thumbnail rounded-circle avatar-xl "} alt="200x200" src={avatar1} onClick={(e) => tog_large(e)} />
                                    <img className={"img-thumbnail rounded-circle avatar-xl "} alt="200x200" src={avatar2} onClick={(e) => tog_large(e)} />
                                    <img className={"img-thumbnail rounded-circle avatar-xl "} alt="200x200" src={avatar3} onClick={(e) => tog_large(e)} />
                                    <img className={"img-thumbnail rounded-circle avatar-xl "} alt="200x200" src={avatar4} onClick={(e) => tog_large(e)} />
                                    <img className={"img-thumbnail rounded-circle avatar-xl "} alt="200x200" src={avatar5} onClick={(e) => tog_large(e)} />
                                    <img className={"img-thumbnail rounded-circle avatar-xl "} alt="200x200" src={avatar4} onClick={(e) => tog_large(e)} />
                                    <img className={"img-thumbnail rounded-circle avatar-xl "} alt="200x200" src={avatar5} onClick={(e) => tog_large(e)} />
                                </div>
                            </div>
                        </div>
                        <div className="text-end pt-5">
                            <button type="submit" className="btn btn-primary">Apply</button>
                        </div>
                    </Col>
                </Row>
            </TabPane>
        </React.Fragment >
    )
}

export default Mine;