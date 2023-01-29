import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import "./homepage.css"





const Home = () => {
    return (
        <React.Fragment>
            <section className="section pt-0 hero-section" id="home">
               <div className='background'>
                <div className='p-3'> <Row>
                    <Col lg={6}>
                        <div className='mt-5 text-center pt-5'>
                            <h1 className='pt-5'><span
                                    className="text-success display-6 fw-semibold mb-3 lh-base pt-5"><b>Our Ship </b></span></h1>
                        <h1 className="display-6 fw-semibold mb-3 lh-base">rent management office </h1>
                        </div>
                        <p className="lead text-muted p-5 text-center lh-base ">We are carrying out training and retraining of trade barge crews based on the operation management of ships by exploration of crude oil in the sea and charter brokerage of barges for ship cargoes for export and import.</p>
                    
                        
                    </Col>
                </Row></div>
               
               </div>

            </section>
        </React.Fragment>
    );
};

export default Home;