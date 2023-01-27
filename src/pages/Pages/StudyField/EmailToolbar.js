import React, { useEffect, useState } from 'react';
import MenuBar from './MenuBar';
import { Col, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink, Row, UncontrolledDropdown, UncontrolledTooltip, UncontrolledCollapse, ButtonGroup, Button, UncontrolledButtonDropdown, Modal, ModalBody, ModalHeader, Input, Progress, Card, CardHeader, CardBody, Alert } from 'reactstrap';
import { BaseExample, CardTableExample, PaginationExample, SearchExample, SortingExample, LoadingStateExample, FixedHeaderExample, HiddenColumnsExample } from './GridTablesData';

import { BrowserRouter } from 'react-router-dom';
import SimpleBar from "simplebar-react";





//redux
import { useSelector, useDispatch } from "react-redux";
import { getMailDetails, deleteMail } from '../../../store/actions';



const EmailToolbar = () => {

    const dispatch = useDispatch();

    const { mailDetails } = useSelector((state) => ({
        mailDetails: state.Mailbox.mailDetails,
    }));

    useEffect(() => {
        dispatch(getMailDetails());
    }, [dispatch]);

    const [mailList, setMailList] = useState([]);


    useEffect(() => {
        setMailList(mailDetails);
    }, [mailDetails]);





















    return (
        <React.Fragment>

            <div className="email-menu-sidebar">
                <div className="p-4 d-flex flex-column h-100">
                    <div className="pb-4 border-bottom border-bottom-dashed">
                        aaa
                    </div>

                    <SimpleBar
                        className="mx-n4 px-4 email-menu-sidebar-scroll"
                        data-simplebar
                    >

                        <div>
                            <MenuBar />
                        </div>

                    </SimpleBar>


                </div>
            </div>


            <div className="email-content">
                <div className="p-4 pb-0">
                    <div className="border-bottom border-bottom-dashed">
                        aaa
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
                        </Row>                    </SimpleBar>
                </div>
            </div >

        </React.Fragment >
    );
};

export default EmailToolbar;