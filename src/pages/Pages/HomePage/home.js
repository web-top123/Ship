import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import "./homepage.css"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import software from "./assets/creative.jpeg";
import testfield from "./assets/default.jpeg";
import studyfield from "./assets/interactive.jpeg";
const Home = () => {
    return (
        <React.Fragment>
            <section className="section pb-0 hero-section" id="home">
                <Carousel>
                    <div>
                        <div className="ca-background">
                            <img src={software} />
                        </div>
                        <div className="ca-title">
                            <div className='background-overlay'></div>
                            <div className='slide-inner-wrapper'>
                                <div className='text-center'>
                                    <h1 className='home-slide-title'><span
                                        className="">Our Ship</span></h1>
                                    <h1 className="home-slide-title">Rent management office </h1>
                                </div>
                                <p className="text-white home-slide-sub-title pt-5">We are carrying out training and retraining of trade barge crews based on the operation management of ships by exploration of crude oil in the sea and charter brokerage of barges for ship cargoes for export and import.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="ca-background">
                            <img src={testfield} />
                        </div>
                        <div className="ca-title">
                            <div className='background-overlay'></div>
                            <div className='slide-inner-wrapper'>
                                <div className='text-center'>
                                    <h1 className='home-slide-title'><span
                                        className="">testfield</span></h1>
                                    <h1 className="home-slide-title">Rent management office </h1>
                                </div>
                                <p className="text-white home-slide-sub-title pt-5">We are carrying out training and retraining of trade barge crews based on the operation management of ships by exploration of crude oil in the sea and charter brokerage of barges for ship cargoes for export and import.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="ca-background">
                            <img src={studyfield} />
                        </div>
                        <div className="ca-title">
                            <div className='background-overlay'></div>
                            <div className='slide-inner-wrapper'>
                                <div className='text-center'>
                                    <h1 className='home-slide-title'><span
                                        className="">studyfield</span></h1>
                                    <h1 className="home-slide-title">Rent management office </h1>
                                </div>
                                <p className="text-white home-slide-sub-title pt-5">We are carrying out training and retraining of trade barge crews based on the operation management of ships by exploration of crude oil in the sea and charter brokerage of barges for ship cargoes for export and import.</p>
                            </div>
                        </div>
                    </div>
                </Carousel>
                {/* <div className='background container-fluid'>
                    <Row>
                        <Col lg={6} className="slide-content-wrapper">
                            <div className='background-overlay'></div>
                            <div className='slide-inner-wrapper'>
                                <div className='text-center'>
                                    <h1 className='home-slide-title'><span
                                        className="">Our Ship</span></h1>
                                    <h1 className="home-slide-title">Rent management office </h1>
                                </div>
                                <p className="text-white home-slide-sub-title pt-5">We are carrying out training and retraining of trade barge crews based on the operation management of ships by exploration of crude oil in the sea and charter brokerage of barges for ship cargoes for export and import.</p>
                            </div>
                        </Col>
                    </Row>
                </div> */}
            </section>
        </React.Fragment>
    );
};

export default Home;