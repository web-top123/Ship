import React from 'react';
import Navbar from '../../Landing/navbar';
import Footer from '../../Landing/footer';
const QuestionService = () => {
    document.title = "Landing | Velzon - React Admin & Dashboard Template";
    return (
        <React.Fragment>

            <div className="layout-wrapper landing">
                <Navbar />
                <section className="section pb-0 hero-section" id="hero">
                    <div className="bg-overlay bg-overlay-pattern"></div>
                    <div className='container'>
                        <div className="pages-mine-bread d-flex justify-content-between">
                            <h2>My page</h2>
                            <div className="mine-score-banner">
                                <span className="pe-2">current free score 2000</span>
                                <span>adding score 1000</span>
                            </div>
                        </div>
                    </div>

                </section>
                <Footer />
            </div>
        </React.Fragment>
    );
};

export default QuestionService;