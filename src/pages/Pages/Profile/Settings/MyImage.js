import React, { useEffect, useState, useMemo } from 'react';
import { CardHeader, TabPane, Row, Col, Card } from "reactstrap";
import { getAvatars, downloadAvatar, getUser, updateOneUser } from '../../../../helpers/fakebackend_helper';
import { useSelector, useDispatch } from "react-redux";
import { getAuthenticatedUser } from '../../../../helpers/fakebackend_helper';

const Mine = () => {

    const [avatarList, setAvatarList] = useState([]);
    const [purchasedList, setPurchasedList] = useState([]);
    const [userID, setUserID] = useState('');
    const [avatarID, setAvatarID] = useState('');

    useEffect(() => {
        getAvatarList();
        console.log("AAAAAAAAAAAAAAAA", getAuthenticatedUser());
        setUserID(getAuthenticatedUser().id);
    }, []);

    useEffect(() => {
        getPurchasedList(userID);
        console.log("userID", userID);
        setAvatarID(userID);
        // getApplyAvatarId(userID);
    }, [userID]);

    useEffect(() => {
        console.log("purchasedList", purchasedList);
    }, [purchasedList]);

    useEffect(() => {
        // console.log("purchasedList", purchasedList)
    }, [purchasedList]);

    useEffect(() => {
        updateOneUser(userID, { currentAvatarId: avatarID });
    }, [avatarID])

    const getAvatarList = () => {
        getAvatars().then(res => {
            setAvatarList(res);
        })
    }

    const getPurchasedList = (id) => {
        getUser(id).then(res => {
            setPurchasedList(JSON.parse(res.purchasedAvatar));
        })
    }

    // const getApplyAvatarId = () => {
    //     setAvatarID(selectedPurchasedAvatarId);
    // }

    var selectedImageListId;

    function selectAvatarList(e) {
        document.querySelectorAll(".src-avatar img").forEach(img => {
            if (img.src !== e.currentTarget.src) {
                img.classList.remove("img-buy")
            } else {
                selectedImageListId = parseInt(e.currentTarget.src.substr(42));
                console.log("selectedImageListId", selectedImageListId)
                img.classList.toggle("img-buy")
            }
        })
    }

    var selectedPurchasedAvatarId;

    function purchaseAvatarList(event) {
        document.querySelectorAll(".pch-avatar img").forEach(img => {
            if (img.src !== event.currentTarget.src) {
                img.classList.remove("img-buy")
            } else {
                selectedPurchasedAvatarId = parseInt(event.currentTarget.src.substr(42));
                console.log("selectedPurchasedAvatarId", selectedPurchasedAvatarId)
                img.classList.toggle("img-buy")
            }
        })
    }

    function addPurchasedAvatar() {
        console.log("addPurchasedAvatar", purchasedList);
        if (!purchasedList.filter(item => item === selectedImageListId).length) {
            setPurchasedList([...purchasedList, ...[selectedImageListId]])
            console.log("ididid", typeof (JSON.stringify(purchasedList)), userID);
            updateOneUser(userID, { purchasedAvatar: JSON.stringify(purchasedList) });
            console.log("")
        }
    }

    function applyAvatar() {
        // getApplyAvatarId();
        console.log("avatarID", avatarID);
        setAvatarID(selectedPurchasedAvatarId);
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
                                                        onClick={(e) => selectAvatarList(e)}
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
                                                        onClick={(e) => purchaseAvatarList(e)}
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
                            <button type="submit" className="btn btn-primary" onClick={() => {
                                // console.log("------------->selectedPurchasedAvatarId", selectedPurchasedAvatarId)
                                applyAvatar();
                            }}>Apply</button>
                        </div>
                    </Col>
                </Row>
            </TabPane>
        </React.Fragment >
    )
}

export default Mine;