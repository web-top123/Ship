import classnames from "classnames";
import React, { useState } from "react";

import {
    Container,
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    Modal, ModalBody, ModalHeader,
    Row,
    Card,
    CardHeader,
    Col,
    Input,
    Button,
    CardBody,
    Table,
    Label,
} from "reactstrap";
import { Link } from "react-router-dom";
import BreadCrumb from "../../../Components/Common/BreadCrumb";





const Software = () => {





    return (
        <div className="page-content">


            <Container fluid>
                <BreadCrumb title="Detail Data" pageTitle="Ecommerce" />



                <div className="card pt-2 ">

                    <Row>
                        <div className="col-sm-11"></div>
                        <div className="col-sm-1  p-4 pt-2"> 
                        <Link to="/pages-study-field"><Button 
                            type="button"
                            className="btn-close"
                            style={{ float: "right" }}
                        >
                        </Button></Link></div>
                    </Row>
                    <div className="p-4">
                        <h1 className="text-center "><em> About ship Enginee</em></h1>
                       
                        
                    </div>


                    <div className="pt-0" style={{padding:"0 70px"}}>
                        <h3 className="text-center">Ship's engineers are responsible for installing, operating, maintaining and repairing engines, machinery and other mechanical and electronic equipment aboard ships and offshore structures. They operate a ship's engine to control the speed of the vessel, according to orders from the ship's captain.</h3>
                    </div>


                    <div  style={{padding:"50px 20%"}}>
                        <Row className="pt-4">
                            <div className="col-sm-6 text-center">
                                <Button color="light" onClick={() => { }} >Agree</Button>
                            </div>
                            <div className="col-sm-6 text-center">
                                <Button color="primary" onClick={() => {

                                }}>Disagree</Button>
                            </div>
                        </Row>
                    </div>
                </div>




            </Container>
        </div>
    );
};

export default Software;










