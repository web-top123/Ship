import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import { EffectFade, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


// Import Images
import imgpattern from "../../../assets/images/landing/img-pattern.png";

import defaultDemo from "../../../assets/images/shipdemos/default.jpeg";
import saasDemo from "../../../assets/images/shipdemos/saas.jpeg";
import materialDemo from "../../../assets/images/shipdemos/material.jpeg";
import minimalDemo from "../../../assets/images/shipdemos/minimal.jpeg";
import creativeDemo from "../../../assets/images/shipdemos/creative.jpeg";
import modernDemo from "../../../assets/images/shipdemos/modern.jpeg";
import interactiveDemo from "../../../assets/images/shipdemos/interactive.jpeg";


const Home = () => {
    return (
        <React.Fragment>
            <section className="section pb-0 hero-section" id="hero">
                <div className="bg-overlay bg-overlay-pattern"></div>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8} sm={10}>
                            <div className="text-center mt-lg-5 pt-5">
                                <h1 className="display-6 fw-semibold mb-3 lh-base">The better way to manage your website with <span
                                    className="text-success">Velzon </span></h1>
                                <p className="lead text-muted lh-base">Velzon is a fully responsive, multipurpose and premium Bootstrap 5 Admin & Dashboard Template built in multiple frameworks.</p>

                                <div className="d-flex gap-2 justify-content-center mt-4">
                                    <Link to="/register" className="btn btn-primary">Get Started <i className="ri-arrow-right-line align-middle ms-1"></i></Link>
                                    <Link to="/pages-pricing" className="btn btn-danger">View Plans <i className="ri-eye-line align-middle ms-1"></i></Link>
                                </div>
                            </div>

                            <div className='mt-4 mt-sm-5 pt-sm-5 mb-sm-n5 demo-carousel'>
                                <div className="demo-img-patten-top d-none d-sm-block">
                                    <img src={imgpattern} className="d-block img-fluid" alt="..." />
                                </div>
                                <div className="demo-img-patten-bottom d-none d-sm-block">
                                    <img src={imgpattern} className="d-block img-fluid" alt="..." />
                                </div>
                                <Swiper
                                    spaceBetween={30}
                                    effect={"fade"}
                                    loop={true}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                                    modules={[EffectFade, Autoplay]}
                                    className="mySwiper" >

                                    <SwiperSlide className="carousel-inner shadow-lg p-2 bg-white rounded">
                                        <img src={defaultDemo} className="d-block w-100" alt="..." />
                                    </SwiperSlide>
                                    <SwiperSlide className="carousel-inner shadow-lg p-2 bg-white rounded">
                                        <img src={saasDemo} className="d-block w-100" alt="..." />
                                    </SwiperSlide>
                                    <SwiperSlide className="carousel-inner shadow-lg p-2 bg-white rounded">
                                        <img src={materialDemo} className="d-block w-100" alt="..." />
                                    </SwiperSlide>
                                    <SwiperSlide className="carousel-inner shadow-lg p-2 bg-white rounded">
                                        <img src={minimalDemo} className="d-block w-100" alt="..." />
                                    </SwiperSlide>
                                    <SwiperSlide className="carousel-inner shadow-lg p-2 bg-white rounded">
                                        <img src={creativeDemo} className="d-block w-100" alt="..." />
                                    </SwiperSlide>
                                    <SwiperSlide className="carousel-inner shadow-lg p-2 bg-white rounded">
                                        <img src={modernDemo} className="d-block w-100" alt="..." />
                                    </SwiperSlide>
                                    <SwiperSlide className="carousel-inner shadow-lg p-2 bg-white rounded">
                                        <img src={interactiveDemo} className="d-block w-100" alt="..." />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <div className="position-absolute start-0 end-0 bottom-0 hero-shape-svg">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                        // xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 1440 120">
                        <g mask="url(&quot;#SvgjsMask1003&quot;)" fill="none">
                            <path d="M 0,118 C 288,98.6 1152,40.4 1440,21L1440 140L0 140z">
                            </path>
                        </g>
                    </svg>
                </div>

            </section>
        </React.Fragment>
    );
};

export default Home;