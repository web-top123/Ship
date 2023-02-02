import React, { useState } from 'react'
import MySidebar from './MySidebar'
import MyTabBar from './MyTabBar'
import MyInformation from './MyInformation'
import MyBrowser from './MyBrowser'
import MyPurchase from './MyPurchase'
import '../Test/test-page-custom.css'


import { Col, Container, Row, Card, CardBody,TabContent, cardHeaderTab, cardHeaderToggle } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";


const ViewData = () => {
    document.title = "My Profile";

    const [verticalTab, setverticalTab] = useState("1");
    const toggleVertical = (tab) => {
        if (verticalTab !== tab) {
            setverticalTab(tab);
        }
    };

    
    // Card Header Tabs
    const [cardHeaderTab, setcardHeaderTab] = useState("1");
    const cardHeaderToggle = (tab) => {
        if (cardHeaderTab !== tab) {
            setcardHeaderTab(tab);
        }
    };

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="View Data Field" />
                        <Row>
                            <Col xl={3} lg={4}>
                                <MySidebar toggleVertical={toggleVertical} verticalTab ={verticalTab}/>
                            </Col>
                            <Col xl={9} lg={8}>
                                <Card>
                                    <CardBody>
                                        <MyTabBar cardHeaderToggle={cardHeaderToggle} cardHeaderTab ={cardHeaderTab}/>
                                        <TabContent
                                            activeTab= {cardHeaderTab}
                                            className="text-muted mt-4 mt-md-0 text-align"
                                            id="v-pills-tabContent"
                                            style={{textAlign: "center"}}
                                        >
                                            <MyInformation />
                                            <MyBrowser />
                                            <MyPurchase />
                                        </TabContent>
                                    </CardBody>
                                </Card>
                            </Col> 
                        </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default ViewData;