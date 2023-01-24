import React, { useState } from 'react';
import classnames from "classnames";
import { Card, CardBody, Col, Container, Nav, NavItem, NavLink, Row, TabContent, TabPane } from "reactstrap";
const MineSidebar = () => {
    // Vertical Nav Tabs
    const [verticalTab, setverticalTab] = useState("1");
    const toggleVertical = (tab) => {
        if (verticalTab !== tab) {
            setverticalTab(tab);
        }
    };

    return (
        <React.Fragment>
            <Col xxl={12}>
                <Row>
                    <Col md={3}>
                        <Nav pills className="flex-column" id="v-pills-tab">
                            <NavItem>
                                <NavLink
                                    style={{ cursor: "pointer" }}
                                    className={classnames({

                                        "mb-2": true,
                                        "text-center": true,
                                        active: verticalTab === "1",
                                    })}
                                    onClick={() => {
                                        toggleVertical("1");
                                    }}
                                    id="v-pills-myinformation-tab"
                                >
                                    My Information
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    style={{ cursor: "pointer" }}
                                    className={classnames({
                                        "mb-2": true,
                                        "text-center": true,
                                        active: verticalTab === "2",
                                    })}
                                    onClick={() => {
                                        toggleVertical("2");
                                    }}
                                    id="v-pills-browserhistory-tab"
                                >
                                    Browser History
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    style={{ cursor: "pointer" }}
                                    className={classnames({
                                        "mb-2": true,
                                        "text-center": true,
                                        active: verticalTab === "3",
                                    })}
                                    onClick={() => {
                                        toggleVertical("3");
                                    }}
                                    id="v-pills-testhistory-tab"
                                >
                                    Test History
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    style={{ cursor: "pointer" }}
                                    className={classnames({
                                        "mb-2": true,
                                        active: verticalTab === "4",
                                        "text-center": true,
                                    })}
                                    onClick={() => {
                                        toggleVertical("4");
                                    }}
                                    id="v-pills-purchasehistory-tab"
                                >
                                    Purchase History
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    style={{ cursor: "pointer" }}
                                    className={classnames({
                                        "mb-2": true,
                                        active: verticalTab === "5",
                                        "text-center": true,
                                    })}
                                    onClick={() => {
                                        toggleVertical("5");
                                    }}
                                    id="v-pills-scorehistory-tab"
                                >
                                    
                                    Score Management
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    style={{ cursor: "pointer" }}
                                    className={classnames({
                                        "mb-2": true,
                                        active: verticalTab === "6",
                                        "text-center": true,
                                    })}
                                    onClick={() => {
                                        toggleVertical("6");
                                    }}
                                    id="v-pills-imgpurchase-tab"
                                >
                                    Image Icon Purchase
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    style={{ cursor: "pointer" }}
                                    className={classnames({
                                        "mb-2": true,
                                        active: verticalTab === "7",
                                        "text-center": true,
                                    })}
                                    onClick={() => {
                                        toggleVertical("7");
                                    }}
                                    id="v-pills-opinion-tab"
                                >
                                    Opinion Box
                                </NavLink>
                            </NavItem>

                        </Nav>
                    </Col>
                    <Col md={9}>
                        <TabContent
                            activeTab={verticalTab}
                            className="text-muted mt-4 ms-5 mt-md-0"
                            id="v-pills-tabContent"
                        >
                            <TabPane tabId="1" id="v-pills-home">
                                <div className="d-flex mb-2">
                                    <div className="flex-shrink-0">
                                    </div>
                                    <div className="flex-grow-1">
                                        <p className="mb-0">You always want to make sure that your fonts work well together and try to limit the number of fonts you use to three or less. Experiment and play around with the fonts that you already have in the software you’re working with reputable font websites.</p>
                                    </div>
                                </div>
                                <p className="mb-0">
                                    This may be the most commonly encountered tip I received from the designers I spoke with. They highly encourage that you use different fonts in one design, but do not over-exaggerate and go overboard.
                                </p>
                            </TabPane>
                            <TabPane tabId="2" id="v-pills-profile">
                                <div className="d-flex mb-2">
                                    <div className="flex-shrink-0">
                                    </div>
                                    <div className="flex-grow-1">
                                        <p className="mb-0"> I also decreased the transparency in the text so that the mountains come through the text, bringing the quote truly to life. Make sure that the placement of your text is pleasing to look at, and you try to achieve symmetry for this effect.</p>
                                    </div>
                                </div>
                                <p className="mb-0">
                                    You've probably heard that opposites attract. The same is true for fonts. Don't be afraid to combine font styles that are different but complementary. You can always play around with the text that is overlaid on an image.
                                </p>

                            </TabPane>
                            <TabPane tabId="3" id="v-pills-messages">
                                <div className="d-flex mb-2">
                                    <div className="flex-shrink-0">
                                    </div>
                                    <div className="flex-grow-1">
                                        <p className="mb-0">In this image, you can see that the line height has been reduced significantly, and the size was brought up exponentially. Experiment and play around with the fonts that you already have in the software you’re working with reputable font websites.</p>
                                    </div>
                                </div>
                                <p className="mb-0">
                                    They highly encourage that you use different fonts in one design, but do not over-exaggerate and go overboard This may be the most commonly encountered tip I received from the designers I spoke with.
                                </p>
                            </TabPane>

                            <TabPane tabId="4" id="v-pills-settings">
                                <div className="d-flex mb-2">
                                    <div className="flex-shrink-0">
                                    </div>
                                    <div className="flex-grow-1">
                                        <p className="mb-0">When designing, the goal is to draw someone’s attention and portray to them what you’re trying to say. You can make a big statement by using little tricks, like this one. Use contrasting fonts. you can use a bold sanserif font with a cursive.</p>
                                    </div>
                                </div>
                                <p className="mb-0">
                                    If you’re using multiple elements, make sure that your principal object is larger than the others, as the eye of your viewer will automatically be drawn to the larger of the two objects.
                                </p>
                            </TabPane>
                        </TabContent>
                    </Col>
                </Row>
            </Col>
        </React.Fragment>
    );
};

export default MineSidebar;