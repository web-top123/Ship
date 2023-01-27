import React, { useEffect, useState } from 'react';
import MenuBar from './MenuBar';
import { BrowserRouter } from 'react-router-dom';
import { Col, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink, Row, UncontrolledDropdown, UncontrolledTooltip, UncontrolledCollapse, ButtonGroup, Button, UncontrolledButtonDropdown, Modal, ModalBody, ModalHeader, Input, Progress, Card, CardHeader, CardBody, Alert } from 'reactstrap';
import { Accordion, AccordionItem, Collapse } from 'reactstrap';
import { BaseExample, CardTableExample, PaginationExample, SearchExample, SortingExample, LoadingStateExample, FixedHeaderExample, HiddenColumnsExample } from './GridTablesData';
import classnames from "classnames";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import FeatherIcon from 'feather-icons-react';
import DeleteModal from '../../../Components/Common/DeleteModal';
//SimpleBar
import SimpleBar from "simplebar-react";

// Rating
import Rating from "react-rating";

// Import Images
import avatar1 from "../../../assets/images/users/avatar-1.jpg";

import img2 from "../../../assets/images/small/img-2.jpg";
import img6 from "../../../assets/images/small/img-6.jpg";

import image2 from "../../../assets/images/users/avatar-2.jpg";
import image4 from "../../../assets/images/users/avatar-4.jpg";
import image3 from "../../../assets/images/users/avatar-3.jpg";
import image5 from "../../../assets/images/users/avatar-5.jpg";

import { Link } from 'react-router-dom';

//redux
import { useSelector, useDispatch } from "react-redux";
import { getMailDetails, deleteMail } from '../../../store/actions';

// import { mailbox } from '../../common/data';

const EmailToolbar = () => {

    const dispatch = useDispatch();

    const { mailDetails } = useSelector((state) => ({
        mailDetails: state.Mailbox.mailDetails,
    }));

    useEffect(() => {
        dispatch(getMailDetails());
    }, [dispatch]);

    const [mailList, setMailList] = useState([]);
    const [activeTabs, setActive] = useState("all");
    const [isLabelTab, setIsLabelTab] = useState("");
    const [isTypeTab, setIsTypeTab] = useState("primary");
    const [displayCategory, setCategory] = useState("all");
    const [displaytype, settype] = useState("all");
    const [displaylabel, setLabel] = useState("all");

    useEffect(() => {
        setMailList(mailDetails);
    }, [mailDetails]);

    const toggleTab = (ncategory, ntype, nlabel) => {
        var element = document.getElementById("mail-filter-navlist");
        if (ncategory === "all" || ncategory === "inbox") {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
        if (activeTabs !== ncategory) {
            setActive(ncategory);
        }
        if (isLabelTab !== nlabel) {
            setIsLabelTab(nlabel);
        }
        if (isTypeTab !== ntype) {
            setIsTypeTab(ntype);
        }
        setCategory(ncategory);
        settype(ntype);
        setLabel(nlabel);
    };

    // SideBar Open
    function sidebarOpen(value, ele) {
        const element = document.getElementsByTagName('body')[0];
        element.classList.add(value);
        ele.closest("li").classList.remove("unread");
    }

    // SideBar Close
    function sidebarClose(value) {
        const element = document.getElementsByTagName('body')[0];
        element.classList.remove(value);
    }

    // Chat Box
    const chatBox = (value) => {
        const element = document.getElementById("emailchat-detailElem");
        element.style.display = value;
    };

    const [modal, setModal] = useState(false);

    const toggle = () => {
        if (modal) {
            setModal(false);
        } else {
            setModal(true);
        }
    };

    // delete button toggle
    const onChangeCheckBox = (value, check) => {
        const element = document.getElementById("email-topbar-actions");
        const checkedCount = document.querySelectorAll('.checkbox-wrapper-mail input:checked').length;
        const activeList = document.getElementById(value);

        if (checkedCount >= 1) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }

        if (check) {
            activeList.classList.add("active");
        } else {
            activeList.classList.remove("active");
        }
    };

    // Checked All Email
    const checkedAll = () => {
        const checkall = document.getElementById("checkall");
        const element = document.querySelectorAll(".message-list li");
        const ele = document.getElementById("email-topbar-actions");
        ele.style.display = 'block';

        if (checkall.checked) {
            element.forEach((node) => {
                node.classList.add("active");
                node.firstChild.firstChild.firstChild.checked = true;
            });
        } else {
            ele.style.display = 'none';
            element.forEach((node) => {
                node.classList.remove("active");
                node.firstChild.firstChild.firstChild.checked = false;
            });
        }
    };


    // Delete Email
    const removeEmail = () => {
        const element = document.querySelectorAll(".message-list li");
        const ele = document.getElementById("email-topbar-actions");
        const checkall = document.getElementById("checkall");
        element.forEach((element) => {

            if (element.classList.contains('active')) {
                var forId = element.querySelector('.form-check-input').value;
                dispatch(deleteMail(forId));
            }
            element.classList.remove("active");
            element.querySelector('.form-check-input').checked = false;

        });
        checkall.checked = false;
        ele.style.display = 'none';
    };

    // Mark all as Read
    const readAll = () => {

        if (document.querySelectorAll(".message-list li.unread").length === 0) {
            document.getElementById("unreadConversations").style.display = "block";
            setTimeout(function () { document.getElementById("unreadConversations").style.display = "none"; }, 1000);
        }

        document.querySelectorAll(".message-list li.unread").forEach(function (element) {
            if (element.classList.contains("unread")) { element.classList.remove("unread"); }
        });
    };


    const favouriteBtn = (ele) => {
        if (ele.closest("button").classList.contains("active")) {
            ele.closest("button").classList.remove("active");
        } else {
            ele.closest("button").classList.add("active");
        }
    };

    const chatData = [
        { id: 1, img: image2, name: "Scott Median", caption: "Hello ! are you there?" },
        { id: 2, img: image4, name: "Julian Rosa", caption: "What about our next.." },
        { id: 3, img: image3, name: "David Medina", caption: "Yeah everything is fine" },
        { id: 4, img: image5, name: "Jay Baker", caption: "Wow that's great" },
    ];

    const [info, setInfo] = useState([]);

    const [emailinfo, setEmailinfo] = useState([]);

    //delete order
    const [deleteModal, setDeleteModal] = useState(false);










    // Nesting Accordions
    const [nestingCol1, setnestingCol1] = useState(true);
    const [nestingCol2, setnestingCol2] = useState(false);
    const [nestingCol3, setnestingCol3] = useState(false);
    const [nestingCol4, setnestingCol4] = useState(false);
    const [nestingCol5, setnestingCol5] = useState(false);
    const [nestingCol6, setnestingCol6] = useState(false);
    const [nestingCol7, setnestingCol7] = useState(false);
    const [nestingCol8, setnestingCol8] = useState(false);
    const [nestingCol9, setnestingCol9] = useState(false);
    const t_nestingCol1 = () => {
        setnestingCol1(!nestingCol1);
        setnestingCol2(false);
        setnestingCol3(false);
        setnestingCol4(false);
        setnestingCol5(false);
        setnestingCol6(false);
        setnestingCol7(false);
        setnestingCol8(false);
        setnestingCol9(false);
    };
    const t_nestingCol2 = () => {
        setnestingCol2(!nestingCol2);
        setnestingCol1(false);
        setnestingCol3(false);
        setnestingCol4(false);
        setnestingCol5(false);
        setnestingCol6(false);
        setnestingCol7(false);
        setnestingCol8(false);
        setnestingCol9(false);
    };
    const t_nestingCol3 = () => {
        setnestingCol3(!nestingCol3);
        setnestingCol2(false);
        setnestingCol1(false);
        setnestingCol4(false);
        setnestingCol5(false);
        setnestingCol6(false);
        setnestingCol7(false);
        setnestingCol8(false);
        setnestingCol9(false);
    };


    const t_nestingCol4 = () => {
        setnestingCol1(!nestingCol4);
        setnestingCol2(false);
        setnestingCol3(false);
        setnestingCol1(false);
        setnestingCol5(false);
        setnestingCol6(false);
        setnestingCol7(false);
        setnestingCol8(false);
        setnestingCol9(false);
    };
    const t_nestingCol5 = () => {
        setnestingCol5(!nestingCol5);
        setnestingCol2(false);
        setnestingCol3(false);
        setnestingCol4(false);
        setnestingCol1(false);
        setnestingCol6(false);
        setnestingCol7(false);
        setnestingCol8(false);
        setnestingCol9(false);
    };
    const t_nestingCol6 = () => {
        setnestingCol6(!nestingCol6);
        setnestingCol2(false);
        setnestingCol3(false);
        setnestingCol4(false);
        setnestingCol5(false);
        setnestingCol1(false);
        setnestingCol7(false);
        setnestingCol8(false);
        setnestingCol9(false);
    };
    const t_nestingCol7 = () => {
        setnestingCol7(!nestingCol7);
        setnestingCol2(false);
        setnestingCol3(false);
        setnestingCol4(false);
        setnestingCol5(false);
        setnestingCol6(false);
        setnestingCol1(false);
        setnestingCol8(false);
        setnestingCol9(false);
    };
    const t_nestingCol8 = () => {
        setnestingCol8(!nestingCol8);
        setnestingCol2(false);
        setnestingCol3(false);
        setnestingCol4(false);
        setnestingCol5(false);
        setnestingCol6(false);
        setnestingCol7(false);
        setnestingCol1(false);
        setnestingCol9(false);
    };
    const t_nestingCol9 = () => {
        setnestingCol9(!nestingCol9);
        setnestingCol2(false);
        setnestingCol3(false);
        setnestingCol4(false);
        setnestingCol5(false);
        setnestingCol6(false);
        setnestingCol7(false);
        setnestingCol8(false);
        setnestingCol1(false);
    };
    // level First Nesting
    const [anestingCol1, setanestingCol1] = useState(true);
    const [anestingCol2, setanestingCol2] = useState(false);

    const t_anestingCol1 = () => {
        setanestingCol1(!anestingCol1);
        setanestingCol2(false);
    };

    const t_anestingCol2 = () => {
        setanestingCol2(!anestingCol2);
        setanestingCol1(false);
    };

    // level Second Nesting
    const [bnestingCol1, setbnestingCol1] = useState(false);
    const [bnestingCol2, setbnestingCol2] = useState(false);
    const t_bnestingCol1 = () => {
        setbnestingCol1(!bnestingCol1);
    };

    const t_bnestingCol2 = () => {
        setbnestingCol2(!bnestingCol2);
    };
    // level Second's First Nesting
    const [a1nestingCol1, seta1nestingCol1] = useState(true);
    const [a1nestingCol2, seta1nestingCol2] = useState(true);

    const t_a1nestingCol1 = () => {
        seta1nestingCol1(!a1nestingCol1);
    };
    const t_a1nestingCol2 = () => {
        seta1nestingCol2(!a1nestingCol2);
    };

    const [b1nestingCol1, setb1nestingCol1] = useState(false);
    const [b1nestingCol2, setb1nestingCol2] = useState(false);
    const t_b1nestingCol1 = () => {
        setb1nestingCol1(!b1nestingCol1);
    };
    const t_b1nestingCol2 = () => {
        setb1nestingCol2(!b1nestingCol2);
    };

 // level third's First Nesting
    const [a2nestingCol1, seta2nestingCol1] = useState(true);
    const [a2nestingCol2, seta2nestingCol2] = useState(true);

    const t_a2nestingCol1 = () => {
        seta2nestingCol1(!a2nestingCol1);
    };
    const t_a2nestingCol2 = () => {
        seta2nestingCol2(!a2nestingCol2);
    };

    const [b2nestingCol1, setb2nestingCol1] = useState(false);
    const [b2nestingCol2, setb2nestingCol2] = useState(false);
    const t_b2nestingCol1 = () => {
        setb2nestingCol1(!b2nestingCol1);
    };
    const t_b2nestingCol2 = () => {
        setb2nestingCol2(!b2nestingCol2);
    };














    return (
        <React.Fragment>
            <DeleteModal
                show={deleteModal}
                onDeleteClick={() => {
                    removeEmail();
                    setDeleteModal(false);
                }}
                onCloseClick={() => setDeleteModal(false)}
            />
            <div className="email-menu-sidebar">

            <div className="border-bottom border-bottom-dashed">
                    <CardHeader>
                                    <h4 className="card-title mb-0">Search</h4>
                                </CardHeader>

                       
                    </div>

                <SimpleBar
                    className="mx-n4 px-4 email-menu-sidebar-scroll"
                    data-simplebar
                >
                    <Accordion className="custom-accordionwithicon accordion-border-box" id="accordionnesting">
                        
                            <button
                                className={classnames("accordion-button", { collapsed: !nestingCol1 })} type="button" onClick={t_nestingCol1} style={{ cursor: "pointer" }} >
                                A                                                    </button>
                            <div style={{ paddingLeft: "10px" }}>
                                <Collapse isOpen={nestingCol1} className="accordion-collapse" id="accor_nestingExamplecollapse1" >
                                        <button
                                            className={classnames("accordion-button", { collapsed: !anestingCol1 })} type="button" onClick={t_anestingCol1} style={{ cursor: "pointer" }} >
                                            A-A                                                                    </button>
                                        <div style={{ paddingLeft: "10px" }}>
                                            <Collapse isOpen={anestingCol1} className="accordion-collapse" id="accor_nesting2Examplecollapse1" >

                                               

                                                    <button
                                                        className={classnames("accordion-button", { collapsed: !bnestingCol1 })} type="button" onClick={t_bnestingCol1} style={{ cursor: "pointer" }} >
                                                        A-A-A                                                                                    </button>
                                                    <div style={{ paddingLeft: "10px" }}>
                                                        <Collapse isOpen={bnestingCol1} className="accordion-collapse" id="accor_nesting4Examplecollapse2" >
                                                            <div>-aaa   </div>
                                                            <div>-aaa   </div>
                                                            <div className="mail-list ">
                                                                <Link to="#" onClick={() => { toggleTab("all", "all", "all"); }} className={classnames({ active: activeTabs === 'all' })}>
                                                                    <i className="ri-mail-fill me-3 align-middle fw-medium"></i>{" "}
                                                                    <span className="mail-list-link">
                                                                        All{" "}
                                                                    </span>
                                                                    <span className="badge badge-soft-success ms-auto">5</span>
                                                                </Link>
                                                            </div> <div className="mail-list ">
                                                                <Link to="#" onClick={() => { toggleTab("inbox", "all", "all"); }} className={classnames({ active: activeTabs === 'inbox' })}>
                                                                    <i className="ri-inbox-archive-fill me-3 align-middle fw-medium"></i>{" "}
                                                                    <span className="mail-list-link">
                                                                        Inbox{" "}
                                                                    </span>
                                                                    <span className="badge badge-soft-success ms-auto">5</span>
                                                                </Link>
                                                            </div>
                                                        </Collapse>
                                                    </div>
                                                
                                            </Collapse>
                                        </div>
                                    
                                  

                                        <button
                                            className={classnames("accordion-button", { collapsed: !anestingCol2 })} type="button" onClick={t_anestingCol2} style={{ cursor: "pointer" }} >
                                            A-B                                                                   </button>
                                        <div style={{ paddingLeft: "10px" }}>
                                            <Collapse isOpen={anestingCol2} className="accordion-collapse" id="accor_nesting2Examplecollapse1" >

                                                

                                                    <button
                                                        className={classnames("accordion-button", { collapsed: !bnestingCol2 })} type="button" onClick={t_bnestingCol2} style={{ cursor: "pointer" }} >
                                                        A-B-A                                                                                    </button>
                                                    <div style={{ paddingLeft: "10px" }}>
                                                        <Collapse isOpen={bnestingCol2} className="accordion-collapse" id="accor_nesting4Examplecollapse2" >
                                                            <div>-aaa   </div>
                                                            <div>-aaa   </div>
                                                            <div className="mail-list ">
                                                                <Link to="#" onClick={() => { toggleTab("all", "all", "all"); }} className={classnames({ active: activeTabs === 'all' })}>
                                                                    <i className="ri-mail-fill me-3 align-middle fw-medium"></i>{" "}
                                                                    <span className="mail-list-link">
                                                                        All{" "}
                                                                    </span>
                                                                    <span className="badge badge-soft-success ms-auto">5</span>
                                                                </Link>
                                                            </div> <div className="mail-list ">
                                                                <Link to="#" onClick={() => { toggleTab("inbox", "all", "all"); }} className={classnames({ active: activeTabs === 'inbox' })}>
                                                                    <i className="ri-inbox-archive-fill me-3 align-middle fw-medium"></i>{" "}
                                                                    <span className="mail-list-link">
                                                                        Inbox{" "}
                                                                    </span>
                                                                    <span className="badge badge-soft-success ms-auto">5</span>
                                                                </Link>
                                                            </div>
                                                        </Collapse>
                                                    </div>
                                                
                                            </Collapse>
                                        </div>
                                  
                                


                                </Collapse>
                            </div>


                            <button
                                className={classnames("accordion-button", { collapsed: !nestingCol2 })} type="button" onClick={t_nestingCol2} style={{ cursor: "pointer" }} >
                              B                                                </button>
                            <div style={{ paddingLeft: "10px" }}>
                                <Collapse isOpen={nestingCol2} className="accordion-collapse" id="accor_nestingExamplecollapse1" >
                                        <button
                                            className={classnames("accordion-button", { collapsed: !a1nestingCol1 })} type="button" onClick={t_a1nestingCol1} style={{ cursor: "pointer" }} >
                                            B-A                                                                    </button>
                                        <div style={{ paddingLeft: "10px" }}>
                                            <Collapse isOpen={a1nestingCol1} className="accordion-collapse" id="accor_nesting2Examplecollapse1" >

                                               

                                                    <button
                                                        className={classnames("accordion-button", { collapsed: !b1nestingCol1 })} type="button" onClick={t_b1nestingCol1} style={{ cursor: "pointer" }} >
                                                        B-A-A                                                                                    </button>
                                                    <div style={{ paddingLeft: "10px" }}>
                                                        <Collapse isOpen={b1nestingCol1} className="accordion-collapse" id="accor_nesting4Examplecollapse2" >
                                                            <div>-bbb   </div>
                                                            <div>-bbb   </div>
                                                            <div className="mail-list ">
                                                                <Link to="#" onClick={() => { toggleTab("all", "all", "all"); }} className={classnames({ active: activeTabs === 'all' })}>
                                                                    <i className="ri-mail-fill me-3 align-middle fw-medium"></i>{" "}
                                                                    <span className="mail-list-link">
                                                                        All{" "}
                                                                    </span>
                                                                    <span className="badge badge-soft-success ms-auto">5</span>
                                                                </Link>
                                                            </div> <div className="mail-list ">
                                                                <Link to="#" onClick={() => { toggleTab("inbox", "all", "all"); }} className={classnames({ active: activeTabs === 'inbox' })}>
                                                                    <i className="ri-inbox-archive-fill me-3 align-middle fw-medium"></i>{" "}
                                                                    <span className="mail-list-link">
                                                                        Inbox{" "}
                                                                    </span>
                                                                    <span className="badge badge-soft-success ms-auto">5</span>
                                                                </Link>
                                                            </div>
                                                        </Collapse>
                                                    </div>
                                                
                                            </Collapse>
                                        </div>
                                    
                                  

                                        <button
                                            className={classnames("accordion-button", { collapsed: !a1nestingCol2 })} type="button" onClick={t_a1nestingCol2} style={{ cursor: "pointer" }} >
                                            B-B                                                                   </button>
                                        <div style={{ paddingLeft: "10px" }}>
                                            <Collapse isOpen={a1nestingCol2} className="accordion-collapse" id="accor_nesting2Examplecollapse1" >

                                                

                                                    <button
                                                        className={classnames("accordion-button", { collapsed: !b1nestingCol2 })} type="button" onClick={t_b1nestingCol2} style={{ cursor: "pointer" }} >
                                                        B-B-A                                                                                    </button>
                                                    <div style={{ paddingLeft: "10px" }}>
                                                        <Collapse isOpen={b1nestingCol2} className="accordion-collapse" id="accor_nesting4Examplecollapse2" >
                                                            <div>-bbb   </div>
                                                            <div>-bbb   </div>
                                                            <div className="mail-list ">
                                                                <Link to="#" onClick={() => { toggleTab("all", "all", "all"); }} className={classnames({ active: activeTabs === 'all' })}>
                                                                    <i className="ri-mail-fill me-3 align-middle fw-medium"></i>{" "}
                                                                    <span className="mail-list-link">
                                                                        All{" "}
                                                                    </span>
                                                                    <span className="badge badge-soft-success ms-auto">5</span>
                                                                </Link>
                                                            </div> <div className="mail-list ">
                                                                <Link to="#" onClick={() => { toggleTab("inbox", "all", "all"); }} className={classnames({ active: activeTabs === 'inbox' })}>
                                                                    <i className="ri-inbox-archive-fill me-3 align-middle fw-medium"></i>{" "}
                                                                    <span className="mail-list-link">
                                                                        Inbox{" "}
                                                                    </span>
                                                                    <span className="badge badge-soft-success ms-auto">5</span>
                                                                </Link>
                                                            </div>
                                                        </Collapse>
                                                    </div>
                                                
                                            </Collapse>
                                        </div>
                                  
                                </Collapse>
                            </div>


                            <button
                                className={classnames("accordion-button", { collapsed: !nestingCol3 })} type="button" onClick={t_nestingCol3} style={{ cursor: "pointer" }} >
                                C                                                    </button>
                            <div style={{ paddingLeft: "10px" }}>
                                <Collapse isOpen={nestingCol3} className="accordion-collapse" id="accor_nestingExamplecollapse1" >
                                        <button
                                            className={classnames("accordion-button", { collapsed: !a2nestingCol1 })} type="button" onClick={t_a2nestingCol1} style={{ cursor: "pointer" }} >
                                            C-A                                                                    </button>
                                        <div style={{ paddingLeft: "10px" }}>
                                            <Collapse isOpen={a2nestingCol1} className="accordion-collapse" id="accor_nesting2Examplecollapse1" >

                                               

                                                    <button
                                                        className={classnames("accordion-button", { collapsed: !b2nestingCol1 })} type="button" onClick={t_b2nestingCol1} style={{ cursor: "pointer" }} >
                                                        C-A-A                                                                                    </button>
                                                    <div style={{ paddingLeft: "10px" }}>
                                                        <Collapse isOpen={b2nestingCol1} className="accordion-collapse" id="accor_nesting4Examplecollapse2" >
                                                            <div>-ccc  </div>
                                                            <div>-ccc  </div>
                                                            <div className="mail-list ">
                                                                <Link to="#" onClick={() => { toggleTab("all", "all", "all"); }} className={classnames({ active: activeTabs === 'all' })}>
                                                                    <i className="ri-mail-fill me-3 align-middle fw-medium"></i>{" "}
                                                                    <span className="mail-list-link">
                                                                        All{" "}
                                                                    </span>
                                                                    <span className="badge badge-soft-success ms-auto">5</span>
                                                                </Link>
                                                            </div> <div className="mail-list ">
                                                                <Link to="#" onClick={() => { toggleTab("inbox", "all", "all"); }} className={classnames({ active: activeTabs === 'inbox' })}>
                                                                    <i className="ri-inbox-archive-fill me-3 align-middle fw-medium"></i>{" "}
                                                                    <span className="mail-list-link">
                                                                        Inbox{" "}
                                                                    </span>
                                                                    <span className="badge badge-soft-success ms-auto">5</span>
                                                                </Link>
                                                            </div>
                                                        </Collapse>
                                                    </div>
                                                
                                            </Collapse>
                                        </div>
                                    
                                  

                                        <button
                                            className={classnames("accordion-button", { collapsed: !a2nestingCol2 })} type="button" onClick={t_a2nestingCol2} style={{ cursor: "pointer" }} >
                                            C-B                                                                   </button>
                                        <div style={{ paddingLeft: "10px" }}>
                                            <Collapse isOpen={a2nestingCol2} className="accordion-collapse" id="accor_nesting2Examplecollapse1" >

                                                

                                                    <button
                                                        className={classnames("accordion-button", { collapsed: !b2nestingCol2 })} type="button" onClick={t_b2nestingCol2} style={{ cursor: "pointer" }} >
                                                        C-B-A                                                                                    </button>
                                                    <div style={{ paddingLeft: "10px" }}>
                                                        <Collapse isOpen={b2nestingCol2} className="accordion-collapse" id="accor_nesting4Examplecollapse2" >
                                                            <div>-ccc  </div>
                                                            <div>-ccc   </div>
                                                            <div className="mail-list ">
                                                                <Link to="#" onClick={() => { toggleTab("all", "all", "all"); }} className={classnames({ active: activeTabs === 'all' })}>
                                                                    <i className="ri-mail-fill me-3 align-middle fw-medium"></i>{" "}
                                                                    <span className="mail-list-link">
                                                                        All{" "}
                                                                    </span>
                                                                    <span className="badge badge-soft-success ms-auto">5</span>
                                                                </Link>
                                                            </div> <div className="mail-list ">
                                                                <Link to="#" onClick={() => { toggleTab("inbox", "all", "all"); }} className={classnames({ active: activeTabs === 'inbox' })}>
                                                                    <i className="ri-inbox-archive-fill me-3 align-middle fw-medium"></i>{" "}
                                                                    <span className="mail-list-link">
                                                                        Inbox{" "}
                                                                    </span>
                                                                    <span className="badge badge-soft-success ms-auto">5</span>
                                                                </Link>
                                                            </div>
                                                        </Collapse>
                                                    </div>
                                                
                                            </Collapse>
                                        </div>
                                  
                                


                                </Collapse>
                            </div>

                            <button
                                className={classnames("accordion-button", { collapsed: !nestingCol1 })} type="button" onClick={t_nestingCol1} style={{ cursor: "pointer" }} >
                                A                                                    </button>
                            <div style={{ paddingLeft: "10px" }}>
                                <Collapse isOpen={nestingCol1} className="accordion-collapse" id="accor_nestingExamplecollapse1" >
                                        <button
                                            className={classnames("accordion-button", { collapsed: !anestingCol1 })} type="button" onClick={t_anestingCol1} style={{ cursor: "pointer" }} >
                                            A-A                                                                    </button>
                                        <div style={{ paddingLeft: "10px" }}>
                                            <Collapse isOpen={anestingCol1} className="accordion-collapse" id="accor_nesting2Examplecollapse1" >

                                               

                                                    <button
                                                        className={classnames("accordion-button", { collapsed: !bnestingCol1 })} type="button" onClick={t_bnestingCol1} style={{ cursor: "pointer" }} >
                                                        A-A-A                                                                                    </button>
                                                    <div style={{ paddingLeft: "10px" }}>
                                                        <Collapse isOpen={bnestingCol1} className="accordion-collapse" id="accor_nesting4Examplecollapse2" >
                                                            <div>-aaa   </div>
                                                            <div>-aaa   </div>
                                                            <div className="mail-list ">
                                                                <Link to="#" onClick={() => { toggleTab("all", "all", "all"); }} className={classnames({ active: activeTabs === 'all' })}>
                                                                    <i className="ri-mail-fill me-3 align-middle fw-medium"></i>{" "}
                                                                    <span className="mail-list-link">
                                                                        All{" "}
                                                                    </span>
                                                                    <span className="badge badge-soft-success ms-auto">5</span>
                                                                </Link>
                                                            </div> <div className="mail-list ">
                                                                <Link to="#" onClick={() => { toggleTab("inbox", "all", "all"); }} className={classnames({ active: activeTabs === 'inbox' })}>
                                                                    <i className="ri-inbox-archive-fill me-3 align-middle fw-medium"></i>{" "}
                                                                    <span className="mail-list-link">
                                                                        Inbox{" "}
                                                                    </span>
                                                                    <span className="badge badge-soft-success ms-auto">5</span>
                                                                </Link>
                                                            </div>
                                                        </Collapse>
                                                    </div>
                                                
                                            </Collapse>
                                        </div>
                                    
                                  

                                        <button
                                            className={classnames("accordion-button", { collapsed: !anestingCol2 })} type="button" onClick={t_anestingCol2} style={{ cursor: "pointer" }} >
                                            A-B                                                                   </button>
                                        <div style={{ paddingLeft: "10px" }}>
                                            <Collapse isOpen={anestingCol2} className="accordion-collapse" id="accor_nesting2Examplecollapse1" >

                                                

                                                    <button
                                                        className={classnames("accordion-button", { collapsed: !bnestingCol2 })} type="button" onClick={t_bnestingCol2} style={{ cursor: "pointer" }} >
                                                        A-B-A                                                                                    </button>
                                                    <div style={{ paddingLeft: "10px" }}>
                                                        <Collapse isOpen={bnestingCol2} className="accordion-collapse" id="accor_nesting4Examplecollapse2" >
                                                            <div>-aaa   </div>
                                                            <div>-aaa   </div>
                                                            <div className="mail-list ">
                                                                <Link to="#" onClick={() => { toggleTab("all", "all", "all"); }} className={classnames({ active: activeTabs === 'all' })}>
                                                                    <i className="ri-mail-fill me-3 align-middle fw-medium"></i>{" "}
                                                                    <span className="mail-list-link">
                                                                        All{" "}
                                                                    </span>
                                                                    <span className="badge badge-soft-success ms-auto">5</span>
                                                                </Link>
                                                            </div> <div className="mail-list ">
                                                                <Link to="#" onClick={() => { toggleTab("inbox", "all", "all"); }} className={classnames({ active: activeTabs === 'inbox' })}>
                                                                    <i className="ri-inbox-archive-fill me-3 align-middle fw-medium"></i>{" "}
                                                                    <span className="mail-list-link">
                                                                        Inbox{" "}
                                                                    </span>
                                                                    <span className="badge badge-soft-success ms-auto">5</span>
                                                                </Link>
                                                            </div>
                                                        </Collapse>
                                                    </div>
                                                
                                            </Collapse>
                                        </div>
                                  
                                


                                </Collapse>
                            </div>


                            <button
                                className={classnames("accordion-button", { collapsed: !nestingCol2 })} type="button" onClick={t_nestingCol2} style={{ cursor: "pointer" }} >
                              B                                                </button>
                            <div style={{ paddingLeft: "10px" }}>
                                <Collapse isOpen={nestingCol2} className="accordion-collapse" id="accor_nestingExamplecollapse1" >
                                        <button
                                            className={classnames("accordion-button", { collapsed: !a1nestingCol1 })} type="button" onClick={t_a1nestingCol1} style={{ cursor: "pointer" }} >
                                            B-A                                                                    </button>
                                        <div style={{ paddingLeft: "10px" }}>
                                            <Collapse isOpen={a1nestingCol1} className="accordion-collapse" id="accor_nesting2Examplecollapse1" >

                                               

                                                    <button
                                                        className={classnames("accordion-button", { collapsed: !b1nestingCol1 })} type="button" onClick={t_b1nestingCol1} style={{ cursor: "pointer" }} >
                                                        B-A-A                                                                                    </button>
                                                    <div style={{ paddingLeft: "10px" }}>
                                                        <Collapse isOpen={b1nestingCol1} className="accordion-collapse" id="accor_nesting4Examplecollapse2" >
                                                            <div>-bbb   </div>
                                                            <div>-bbb   </div>
                                                            <div className="mail-list ">
                                                                <Link to="#" onClick={() => { toggleTab("all", "all", "all"); }} className={classnames({ active: activeTabs === 'all' })}>
                                                                    <i className="ri-mail-fill me-3 align-middle fw-medium"></i>{" "}
                                                                    <span className="mail-list-link">
                                                                        All{" "}
                                                                    </span>
                                                                    <span className="badge badge-soft-success ms-auto">5</span>
                                                                </Link>
                                                            </div> <div className="mail-list ">
                                                                <Link to="#" onClick={() => { toggleTab("inbox", "all", "all"); }} className={classnames({ active: activeTabs === 'inbox' })}>
                                                                    <i className="ri-inbox-archive-fill me-3 align-middle fw-medium"></i>{" "}
                                                                    <span className="mail-list-link">
                                                                        Inbox{" "}
                                                                    </span>
                                                                    <span className="badge badge-soft-success ms-auto">5</span>
                                                                </Link>
                                                            </div>
                                                        </Collapse>
                                                    </div>
                                                
                                            </Collapse>
                                        </div>
                                    
                                  

                                        <button
                                            className={classnames("accordion-button", { collapsed: !a1nestingCol2 })} type="button" onClick={t_a1nestingCol2} style={{ cursor: "pointer" }} >
                                            B-B                                                                   </button>
                                        <div style={{ paddingLeft: "10px" }}>
                                            <Collapse isOpen={a1nestingCol2} className="accordion-collapse" id="accor_nesting2Examplecollapse1" >

                                                

                                                    <button
                                                        className={classnames("accordion-button", { collapsed: !b1nestingCol2 })} type="button" onClick={t_b1nestingCol2} style={{ cursor: "pointer" }} >
                                                        B-B-A                                                                                    </button>
                                                    <div style={{ paddingLeft: "10px" }}>
                                                        <Collapse isOpen={b1nestingCol2} className="accordion-collapse" id="accor_nesting4Examplecollapse2" >
                                                            <div>-bbb   </div>
                                                            <div>-bbb   </div>
                                                            <div className="mail-list ">
                                                                <Link to="#" onClick={() => { toggleTab("all", "all", "all"); }} className={classnames({ active: activeTabs === 'all' })}>
                                                                    <i className="ri-mail-fill me-3 align-middle fw-medium"></i>{" "}
                                                                    <span className="mail-list-link">
                                                                        All{" "}
                                                                    </span>
                                                                    <span className="badge badge-soft-success ms-auto">5</span>
                                                                </Link>
                                                            </div> <div className="mail-list ">
                                                                <Link to="#" onClick={() => { toggleTab("inbox", "all", "all"); }} className={classnames({ active: activeTabs === 'inbox' })}>
                                                                    <i className="ri-inbox-archive-fill me-3 align-middle fw-medium"></i>{" "}
                                                                    <span className="mail-list-link">
                                                                        Inbox{" "}
                                                                    </span>
                                                                    <span className="badge badge-soft-success ms-auto">5</span>
                                                                </Link>
                                                            </div>
                                                        </Collapse>
                                                    </div>
                                                
                                            </Collapse>
                                        </div>
                                  
                                </Collapse>
                            </div>


                            <button
                                className={classnames("accordion-button", { collapsed: !nestingCol3 })} type="button" onClick={t_nestingCol3} style={{ cursor: "pointer" }} >
                                C                                                    </button>
                            <div style={{ paddingLeft: "10px" }}>
                                <Collapse isOpen={nestingCol3} className="accordion-collapse" id="accor_nestingExamplecollapse1" >
                                        <button
                                            className={classnames("accordion-button", { collapsed: !a2nestingCol1 })} type="button" onClick={t_a2nestingCol1} style={{ cursor: "pointer" }} >
                                            C-A                                                                    </button>
                                        <div style={{ paddingLeft: "10px" }}>
                                            <Collapse isOpen={a2nestingCol1} className="accordion-collapse" id="accor_nesting2Examplecollapse1" >

                                               

                                                    <button
                                                        className={classnames("accordion-button", { collapsed: !b2nestingCol1 })} type="button" onClick={t_b2nestingCol1} style={{ cursor: "pointer" }} >
                                                        C-A-A                                                                                    </button>
                                                    <div style={{ paddingLeft: "10px" }}>
                                                        <Collapse isOpen={b2nestingCol1} className="accordion-collapse" id="accor_nesting4Examplecollapse2" >
                                                            <div>-ccc  </div>
                                                            <div>-ccc  </div>
                                                            <div className="mail-list ">
                                                                <Link to="#" onClick={() => { toggleTab("all", "all", "all"); }} className={classnames({ active: activeTabs === 'all' })}>
                                                                    <i className="ri-mail-fill me-3 align-middle fw-medium"></i>{" "}
                                                                    <span className="mail-list-link">
                                                                        All{" "}
                                                                    </span>
                                                                    <span className="badge badge-soft-success ms-auto">5</span>
                                                                </Link>
                                                            </div> <div className="mail-list ">
                                                                <Link to="#" onClick={() => { toggleTab("inbox", "all", "all"); }} className={classnames({ active: activeTabs === 'inbox' })}>
                                                                    <i className="ri-inbox-archive-fill me-3 align-middle fw-medium"></i>{" "}
                                                                    <span className="mail-list-link">
                                                                        Inbox{" "}
                                                                    </span>
                                                                    <span className="badge badge-soft-success ms-auto">5</span>
                                                                </Link>
                                                            </div>
                                                        </Collapse>
                                                    </div>
                                                
                                            </Collapse>
                                        </div>
                                    
                                  

                                        <button
                                            className={classnames("accordion-button", { collapsed: !a2nestingCol2 })} type="button" onClick={t_a2nestingCol2} style={{ cursor: "pointer" }} >
                                            C-B                                                                   </button>
                                        <div style={{ paddingLeft: "10px" }}>
                                            <Collapse isOpen={a2nestingCol2} className="accordion-collapse" id="accor_nesting2Examplecollapse1" >

                                                

                                                    <button
                                                        className={classnames("accordion-button", { collapsed: !b2nestingCol2 })} type="button" onClick={t_b2nestingCol2} style={{ cursor: "pointer" }} >
                                                        C-B-A                                                                                    </button>
                                                    <div style={{ paddingLeft: "10px" }}>
                                                        <Collapse isOpen={b2nestingCol2} className="accordion-collapse" id="accor_nesting4Examplecollapse2" >
                                                            <div>-ccc  </div>
                                                            <div>-ccc   </div>
                                                            <div className="mail-list ">
                                                                <Link to="#" onClick={() => { toggleTab("all", "all", "all"); }} className={classnames({ active: activeTabs === 'all' })}>
                                                                    <i className="ri-mail-fill me-3 align-middle fw-medium"></i>{" "}
                                                                    <span className="mail-list-link">
                                                                        All{" "}
                                                                    </span>
                                                                    <span className="badge badge-soft-success ms-auto">5</span>
                                                                </Link>
                                                            </div> <div className="mail-list ">
                                                                <Link to="#" onClick={() => { toggleTab("inbox", "all", "all"); }} className={classnames({ active: activeTabs === 'inbox' })}>
                                                                    <i className="ri-inbox-archive-fill me-3 align-middle fw-medium"></i>{" "}
                                                                    <span className="mail-list-link">
                                                                        Inbox{" "}
                                                                    </span>
                                                                    <span className="badge badge-soft-success ms-auto">5</span>
                                                                </Link>
                                                            </div>
                                                        </Collapse>
                                                    </div>
                                                
                                            </Collapse>
                                        </div>
                                  
                                


                                </Collapse>
                            </div>
                              <button
                                className={classnames("accordion-button", { collapsed: !nestingCol1 })} type="button" onClick={t_nestingCol1} style={{ cursor: "pointer" }} >
                                A                                                    </button>
                            <div style={{ paddingLeft: "10px" }}>
                                <Collapse isOpen={nestingCol1} className="accordion-collapse" id="accor_nestingExamplecollapse1" >
                                        <button
                                            className={classnames("accordion-button", { collapsed: !anestingCol1 })} type="button" onClick={t_anestingCol1} style={{ cursor: "pointer" }} >
                                            A-A                                                                    </button>
                                        <div style={{ paddingLeft: "10px" }}>
                                            <Collapse isOpen={anestingCol1} className="accordion-collapse" id="accor_nesting2Examplecollapse1" >

                                               

                                                    <button
                                                        className={classnames("accordion-button", { collapsed: !bnestingCol1 })} type="button" onClick={t_bnestingCol1} style={{ cursor: "pointer" }} >
                                                        A-A-A                                                                                    </button>
                                                    <div style={{ paddingLeft: "10px" }}>
                                                        <Collapse isOpen={bnestingCol1} className="accordion-collapse" id="accor_nesting4Examplecollapse2" >
                                                            <div>-aaa   </div>
                                                            <div>-aaa   </div>
                                                            <div className="mail-list ">
                                                                <Link to="#" onClick={() => { toggleTab("all", "all", "all"); }} className={classnames({ active: activeTabs === 'all' })}>
                                                                    <i className="ri-mail-fill me-3 align-middle fw-medium"></i>{" "}
                                                                    <span className="mail-list-link">
                                                                        All{" "}
                                                                    </span>
                                                                    <span className="badge badge-soft-success ms-auto">5</span>
                                                                </Link>
                                                            </div> <div className="mail-list ">
                                                                <Link to="#" onClick={() => { toggleTab("inbox", "all", "all"); }} className={classnames({ active: activeTabs === 'inbox' })}>
                                                                    <i className="ri-inbox-archive-fill me-3 align-middle fw-medium"></i>{" "}
                                                                    <span className="mail-list-link">
                                                                        Inbox{" "}
                                                                    </span>
                                                                    <span className="badge badge-soft-success ms-auto">5</span>
                                                                </Link>
                                                            </div>
                                                        </Collapse>
                                                    </div>
                                                
                                            </Collapse>
                                        </div>
                                    
                                  

                                        <button
                                            className={classnames("accordion-button", { collapsed: !anestingCol2 })} type="button" onClick={t_anestingCol2} style={{ cursor: "pointer" }} >
                                            A-B                                                                   </button>
                                        <div style={{ paddingLeft: "10px" }}>
                                            <Collapse isOpen={anestingCol2} className="accordion-collapse" id="accor_nesting2Examplecollapse1" >

                                                

                                                    <button
                                                        className={classnames("accordion-button", { collapsed: !bnestingCol2 })} type="button" onClick={t_bnestingCol2} style={{ cursor: "pointer" }} >
                                                        A-B-A                                                                                    </button>
                                                    <div style={{ paddingLeft: "10px" }}>
                                                        <Collapse isOpen={bnestingCol2} className="accordion-collapse" id="accor_nesting4Examplecollapse2" >
                                                            <div>-aaa   </div>
                                                            <div>-aaa   </div>
                                                            <div className="mail-list ">
                                                                <Link to="#" onClick={() => { toggleTab("all", "all", "all"); }} className={classnames({ active: activeTabs === 'all' })}>
                                                                    <i className="ri-mail-fill me-3 align-middle fw-medium"></i>{" "}
                                                                    <span className="mail-list-link">
                                                                        All{" "}
                                                                    </span>
                                                                    <span className="badge badge-soft-success ms-auto">5</span>
                                                                </Link>
                                                            </div> <div className="mail-list ">
                                                                <Link to="#" onClick={() => { toggleTab("inbox", "all", "all"); }} className={classnames({ active: activeTabs === 'inbox' })}>
                                                                    <i className="ri-inbox-archive-fill me-3 align-middle fw-medium"></i>{" "}
                                                                    <span className="mail-list-link">
                                                                        Inbox{" "}
                                                                    </span>
                                                                    <span className="badge badge-soft-success ms-auto">5</span>
                                                                </Link>
                                                            </div>
                                                        </Collapse>
                                                    </div>
                                                
                                            </Collapse>
                                        </div>
                                  
                                


                                </Collapse>
                            </div>


                            <button
                                className={classnames("accordion-button", { collapsed: !nestingCol2 })} type="button" onClick={t_nestingCol2} style={{ cursor: "pointer" }} >
                              B                                                </button>
                            <div style={{ paddingLeft: "10px" }}>
                                <Collapse isOpen={nestingCol2} className="accordion-collapse" id="accor_nestingExamplecollapse1" >
                                        <button
                                            className={classnames("accordion-button", { collapsed: !a1nestingCol1 })} type="button" onClick={t_a1nestingCol1} style={{ cursor: "pointer" }} >
                                            B-A                                                                    </button>
                                        <div style={{ paddingLeft: "10px" }}>
                                            <Collapse isOpen={a1nestingCol1} className="accordion-collapse" id="accor_nesting2Examplecollapse1" >

                                               

                                                    <button
                                                        className={classnames("accordion-button", { collapsed: !b1nestingCol1 })} type="button" onClick={t_b1nestingCol1} style={{ cursor: "pointer" }} >
                                                        B-A-A                                                                                    </button>
                                                    <div style={{ paddingLeft: "10px" }}>
                                                        <Collapse isOpen={b1nestingCol1} className="accordion-collapse" id="accor_nesting4Examplecollapse2" >
                                                            <div>-bbb   </div>
                                                            <div>-bbb   </div>
                                                            <div className="mail-list ">
                                                                <Link to="#" onClick={() => { toggleTab("all", "all", "all"); }} className={classnames({ active: activeTabs === 'all' })}>
                                                                    <i className="ri-mail-fill me-3 align-middle fw-medium"></i>{" "}
                                                                    <span className="mail-list-link">
                                                                        All{" "}
                                                                    </span>
                                                                    <span className="badge badge-soft-success ms-auto">5</span>
                                                                </Link>
                                                            </div> <div className="mail-list ">
                                                                <Link to="#" onClick={() => { toggleTab("inbox", "all", "all"); }} className={classnames({ active: activeTabs === 'inbox' })}>
                                                                    <i className="ri-inbox-archive-fill me-3 align-middle fw-medium"></i>{" "}
                                                                    <span className="mail-list-link">
                                                                        Inbox{" "}
                                                                    </span>
                                                                    <span className="badge badge-soft-success ms-auto">5</span>
                                                                </Link>
                                                            </div>
                                                        </Collapse>
                                                    </div>
                                                
                                            </Collapse>
                                        </div>
                                    
                                  

                                        <button
                                            className={classnames("accordion-button", { collapsed: !a1nestingCol2 })} type="button" onClick={t_a1nestingCol2} style={{ cursor: "pointer" }} >
                                            B-B                                                                   </button>
                                        <div style={{ paddingLeft: "10px" }}>
                                            <Collapse isOpen={a1nestingCol2} className="accordion-collapse" id="accor_nesting2Examplecollapse1" >

                                                

                                                    <button
                                                        className={classnames("accordion-button", { collapsed: !b1nestingCol2 })} type="button" onClick={t_b1nestingCol2} style={{ cursor: "pointer" }} >
                                                        B-B-A                                                                                    </button>
                                                    <div style={{ paddingLeft: "10px" }}>
                                                        <Collapse isOpen={b1nestingCol2} className="accordion-collapse" id="accor_nesting4Examplecollapse2" >
                                                            <div>-bbb   </div>
                                                            <div>-bbb   </div>
                                                            <div className="mail-list ">
                                                                <Link to="#" onClick={() => { toggleTab("all", "all", "all"); }} className={classnames({ active: activeTabs === 'all' })}>
                                                                    <i className="ri-mail-fill me-3 align-middle fw-medium"></i>{" "}
                                                                    <span className="mail-list-link">
                                                                        All{" "}
                                                                    </span>
                                                                    <span className="badge badge-soft-success ms-auto">5</span>
                                                                </Link>
                                                            </div> <div className="mail-list ">
                                                                <Link to="#" onClick={() => { toggleTab("inbox", "all", "all"); }} className={classnames({ active: activeTabs === 'inbox' })}>
                                                                    <i className="ri-inbox-archive-fill me-3 align-middle fw-medium"></i>{" "}
                                                                    <span className="mail-list-link">
                                                                        Inbox{" "}
                                                                    </span>
                                                                    <span className="badge badge-soft-success ms-auto">5</span>
                                                                </Link>
                                                            </div>
                                                        </Collapse>
                                                    </div>
                                                
                                            </Collapse>
                                        </div>
                                  
                                </Collapse>
                            </div>


                            <button
                                className={classnames("accordion-button", { collapsed: !nestingCol3 })} type="button" onClick={t_nestingCol3} style={{ cursor: "pointer" }} >
                                C                                                    </button>
                            <div style={{ paddingLeft: "10px" }}>
                                <Collapse isOpen={nestingCol3} className="accordion-collapse" id="accor_nestingExamplecollapse1" >
                                        <button
                                            className={classnames("accordion-button", { collapsed: !a2nestingCol1 })} type="button" onClick={t_a2nestingCol1} style={{ cursor: "pointer" }} >
                                            C-A                                                                    </button>
                                        <div style={{ paddingLeft: "10px" }}>
                                            <Collapse isOpen={a2nestingCol1} className="accordion-collapse" id="accor_nesting2Examplecollapse1" >

                                               

                                                    <button
                                                        className={classnames("accordion-button", { collapsed: !b2nestingCol1 })} type="button" onClick={t_b2nestingCol1} style={{ cursor: "pointer" }} >
                                                        C-A-A                                                                                    </button>
                                                    <div style={{ paddingLeft: "10px" }}>
                                                        <Collapse isOpen={b2nestingCol1} className="accordion-collapse" id="accor_nesting4Examplecollapse2" >
                                                            <div>-ccc  </div>
                                                            <div>-ccc  </div>
                                                            <div className="mail-list ">
                                                                <Link to="#" onClick={() => { toggleTab("all", "all", "all"); }} className={classnames({ active: activeTabs === 'all' })}>
                                                                    <i className="ri-mail-fill me-3 align-middle fw-medium"></i>{" "}
                                                                    <span className="mail-list-link">
                                                                        All{" "}
                                                                    </span>
                                                                    <span className="badge badge-soft-success ms-auto">5</span>
                                                                </Link>
                                                            </div> <div className="mail-list ">
                                                                <Link to="#" onClick={() => { toggleTab("inbox", "all", "all"); }} className={classnames({ active: activeTabs === 'inbox' })}>
                                                                    <i className="ri-inbox-archive-fill me-3 align-middle fw-medium"></i>{" "}
                                                                    <span className="mail-list-link">
                                                                        Inbox{" "}
                                                                    </span>
                                                                    <span className="badge badge-soft-success ms-auto">5</span>
                                                                </Link>
                                                            </div>
                                                        </Collapse>
                                                    </div>
                                                
                                            </Collapse>
                                        </div>
                                    
                                  

                                        <button
                                            className={classnames("accordion-button", { collapsed: !a2nestingCol2 })} type="button" onClick={t_a2nestingCol2} style={{ cursor: "pointer" }} >
                                            C-B                                                                   </button>
                                        <div style={{ paddingLeft: "10px" }}>
                                            <Collapse isOpen={a2nestingCol2} className="accordion-collapse" id="accor_nesting2Examplecollapse1" >

                                                

                                                    <button
                                                        className={classnames("accordion-button", { collapsed: !b2nestingCol2 })} type="button" onClick={t_b2nestingCol2} style={{ cursor: "pointer" }} >
                                                        C-B-A                                                                                    </button>
                                                    <div style={{ paddingLeft: "10px" }}>
                                                        <Collapse isOpen={b2nestingCol2} className="accordion-collapse" id="accor_nesting4Examplecollapse2" >
                                                            <div>-ccc  </div>
                                                            <div>-ccc   </div>
                                                            <div className="mail-list ">
                                                                <Link to="#" onClick={() => { toggleTab("all", "all", "all"); }} className={classnames({ active: activeTabs === 'all' })}>
                                                                    <i className="ri-mail-fill me-3 align-middle fw-medium"></i>{" "}
                                                                    <span className="mail-list-link">
                                                                        All{" "}
                                                                    </span>
                                                                    <span className="badge badge-soft-success ms-auto">5</span>
                                                                </Link>
                                                            </div> <div className="mail-list ">
                                                                <Link to="#" onClick={() => { toggleTab("inbox", "all", "all"); }} className={classnames({ active: activeTabs === 'inbox' })}>
                                                                    <i className="ri-inbox-archive-fill me-3 align-middle fw-medium"></i>{" "}
                                                                    <span className="mail-list-link">
                                                                        Inbox{" "}
                                                                    </span>
                                                                    <span className="badge badge-soft-success ms-auto">5</span>
                                                                </Link>
                                                            </div>
                                                        </Collapse>
                                                    </div>
                                                
                                            </Collapse>
                                        </div>
                                  
                                


                                </Collapse>
                            </div>

                        
                    </Accordion>
                     
                     {/* <MenuBar/> */}
                </SimpleBar>

             

            </div>

           


                    <div className="email-content">
                <div className="p-4 pb-0">
                    <div className="border-bottom border-bottom-dashed">
                   
                    </div>

                    <SimpleBar className="message-list-content mx-n4 px-4 message-list-scroll">
                    <Row>
                        <Col lg={12}>
                            <Card>
                                

                            <CardBody>
                                    <div id="table-gridjs">
                                        <BaseExample />
                                       
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    </SimpleBar>
                </div>
            </div >

           

           


            <Modal id="composemodal" className="modal-lg" isOpen={modal} toggle={toggle} centered>
                <ModalHeader className="p-3 bg-light" toggle={toggle}>
                    New Message
                </ModalHeader>
                <ModalBody>
                    <div>
                        <div className="mb-3 position-relative">
                            <Input
                                type="text"
                                className="form-control email-compose-input"
                                defaultValue="support@themesbrand.com"
                            />
                            <div className="position-absolute top-0 end-0">
                                <div className="d-flex">
                                    <button
                                        className="btn btn-link text-reset fw-semibold px-2"
                                        type="button"
                                    >
                                        Cc
                                    </button>
                                    <button
                                        className="btn btn-link text-reset fw-semibold px-2"
                                        type="button"
                                    >
                                        Bcc
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="collapse" id="CcRecipientsCollapse">
                            <div className="mb-3">
                                <label>Cc:</label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    placeholder="Cc recipients"
                                />
                            </div>
                        </div>
                        <div className="collapse" id="BccRecipientsCollapse">
                            <div className="mb-3">
                                <label>Bcc:</label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    placeholder="Bcc recipients"
                                />
                            </div>
                        </div>

                        <div className="mb-3">
                            <Input type="text" className="form-control" placeholder="Subject" />
                        </div>
                        <div className="ck-editor-reverse">
                            <CKEditor
                                editor={ClassicEditor}
                                onReady={(editor) => {
                                    // You can store the "editor" and use when it is needed.

                                }}
                                onChange={(event, editor) => {
                                    editor.getData();
                                }}
                            />
                        </div>
                    </div>
                </ModalBody>
                <div className="modal-footer">
                    <button
                        type="button"
                        className="btn btn-ghost-danger"
                        onClick={() => {
                            setModal(false);
                        }}
                    >
                        Discard
                    </button>

                    <UncontrolledDropdown className="btn-group">
                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={() => {
                                setModal(false);
                            }}
                        >
                            Send
                        </button>
                        <DropdownToggle
                            tag="button"
                            type="button"
                            className="btn btn-success"
                            split
                        >
                            <span className="visually-hidden">Toggle Dropdown</span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-end">
                            <li>
                                <DropdownItem href="#">
                                    <i className="ri-timer-line text-muted me-1 align-bottom"></i>{" "}
                                    Schedule Send
                                </DropdownItem>
                            </li>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </div>
            </Modal>
        </React.Fragment >
    );
};

export default EmailToolbar;