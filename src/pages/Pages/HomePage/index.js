import React from 'react';
import Navbar from '../../Landing/navbar';
import Footer from '../../Landing/footer';
import "./home-page.css";
import { Button } from 'reactstrap';

const HomePage = () => {
    document.title = "Landing | Velzon - React Admin & Dashboard Template";
   
    function select(){
        document.getElementById("select-question-service").style.display='block';
    }
    function back(){
        document.getElementById("select-question-service").style.display='none';
    }

    return (
        <React.Fragment>

            <div className="layout-wrapper landing">
                <Navbar />
                <section className="section pb-0 hero-section" id="hero">
                    <div className='homepage-body'>
                       
                    <div className="select-field">
                        <div className="select-button1">
                        <Button color="success" outline className="shadow-none" onMouseOver={select} onMouseOut={back}><a href='pages-study-field'>studyfield1</a></Button>
                          
                        </div>
                        <div className="select-button2">
                        {/* <button><a href='pages-company-introduction'>studyfield2</a></button> */}
                        <Button color="success" outline className="shadow-none"><a href='pages-study-field'>studyfield1</a></Button>
                        </div>
                        <div className="select-button3">
                        {/* <button><a href='pages-data-service'>studyfield3</a></button> */}
                        <Button color="success" outline className="shadow-none"><a href='pages-study-field'>studyfield1</a></Button>
                        </div>
                        <div className="select-button4">
                        {/* <button><a href='pages-question-service'>studyfield4</a></button> */}
                        <Button color="success" outline className="shadow-none"><a href='pages-question-service'>studyfield1</a></Button>
                        </div>
                        <div className='select-detail'>
                            <div className='select-study-field'id='select-study-field'>
                            <h6>title</h6>
                          <p>detaildetaildetaildetaildeta</p>
                            </div>
                            <div className='select-company-introduction'id='select-company-introduction'>
                            <h6>title</h6>
                          <p>detaildetaildetaildetaildeta</p>
                            </div>
                            <div className='select-data-service' id='select-data-service'>
                            <h6>title</h6>
                          <p>detaildetaildetaildetaildeta</p>
                            </div>
                            <div className='select-question-service'id='select-question-service'>
                            <h6>title</h6>
                          <p>detaildetaildetaildetaildeta</p>
                            </div>
                          
                        </div>
                      
                    </div>
                    <div className="seperate-field">
                    <Button color="success" className="btn-animation" data-text="Success"> <a href='pages-software'>Success</a> </Button>
                    <Button color="success" className="btn-animation" data-text="Success"> <a href='pages-test-field'>Success</a></Button>
                    <Button color="success" className="btn-animation" data-text="Success"> <a href='pages-my-page'>Success</a> </Button>
                    </div>
                    </div>
                    

                </section>
                <Footer />
            </div>
        </React.Fragment>
    );
};

export default HomePage;