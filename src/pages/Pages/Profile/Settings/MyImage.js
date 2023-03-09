import React, { useEffect, useState, useMemo } from 'react';
import { CardHeader, TabPane, Row, Col, Card } from "reactstrap";
import { getAvatars, downloadAvatar, getUser, updateOneUser } from '../../../../helpers/fakebackend_helper';
import { useSelector, useDispatch } from "react-redux";

const Mine = () => {

    const [avatarList, setAvatarList] = useState([]);
    const [purchasedList, setPurchasedList] = useState([]);
    const [userID, setUserID] = useState('');
    const myInformationSelector = useSelector(state => state.Profile.myinformation);

    useEffect(() => {
        getAvatarList();
        console.log("myInformationSelector", myInformationSelector);
        // setUserID(myInformationSelector.id);
        getPurchasedList(userID);
    }, [myInformationSelector]);

    const getAvatarList = () => {
        getAvatars().then(res => {
            setAvatarList(res);
        })
    }
    useEffect(() => {
        console.log("AvatarList", purchasedList)
    }, [purchasedList]);

    const getPurchasedList = (id) => {
        console.log(id)
        getUser(id).then(res => {
            setPurchasedList(JSON.parse(res.purchasedAvatar));
        })
    }

    var selectedImageListId;
    function selectModalList(e) {
        document.querySelectorAll(".src-avatar img").forEach(img => {
            if (img.src !== e.currentTarget.src) {
                img.classList.remove("img-buy")
            } else {
                selectedImageListId = parseInt(e.currentTarget.src.substr(42));
                img.classList.toggle("img-buy")
            }
        })
    }
    function purchaseModal(event) {
        document.querySelectorAll(".pch-avatar img").forEach(img => {
            if (img.src !== event.currentTarget.src) {
                img.classList.remove("img-buy")
            } else {
                img.classList.toggle("img-buy")
            }
        })
    }

    function addPurchasedAvatar() {
        console.log(purchasedList);
        if (!purchasedList.filter(item => item === selectedImageListId).length) {
            setPurchasedList([...purchasedList, ...[selectedImageListId]])
            updateOneUser(userID, { purchasedAvatar: JSON.stringify(purchasedList) });
        }
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
                            <div className="mt-4 md-0 px-5 my-img-select src-avatar">
                                <div className='d-block justify-content-between pb-3' >
                                    {
                                        avatarList.map((e, key) => {
                                            return <Row key={key} style={{ display: "inline" }}>
                                                <Col style={{ display: "inline" }}>
                                                    <img className={"img-thumbnail rounded-circle avatar-xl "}
                                                        src={downloadAvatar(e.id)}
                                                        alt=""
                                                        onClick={(e) => selectModalList(e)}
                                                        style={{ margin: '', width: 80, height: 80 }}
                                                    />
                                                </Col>
                                            </Row>
                                        })
                                    }
                                </div>
                            </div>
                        </div>


                        <div className="text-end pt-5">
                            <button type="submit" className="btn btn-primary" onClick={e => {
                                e.preventDefault();
                                addPurchasedAvatar()
                            }}>Purchase</button>
                        </div>
                    </Col>

                    <Col>
                        <div className="mb-2">
                            <div className="ps-0">
                                <h4 className="card-title flex-grow-1">My Image List</h4>
                            </div>
                        </div>
                        <div style={{ height: 300, overflowY: 'scroll', }}>
                            <div className="mt-4 md-0 px-5 my-img-select pch-avatar">
                                <div className='d-block justify-content-between pb-3' >
                                    {
                                        purchasedList.map((e, key) => {
                                            return <Row key={key} style={{ display: "inline" }}>
                                                <Col style={{ display: "inline" }}>
                                                    <img className={"img-thumbnail rounded-circle avatar-xl "}
                                                        src={downloadAvatar(e)}
                                                        alt=""
                                                        onClick={(e) => purchaseModal(e)}
                                                        style={{ margin: '', width: 80, height: 80 }}
                                                    />
                                                </Col>
                                            </Row>
                                        })
                                    }
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