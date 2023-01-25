import React from 'react';
import Navbar from '../../Landing/navbar';
import Footer from '../../Landing/footer';
import MineSidebar from '../../../Components/Common/MineSidebar';
const Mine = () => {
    document.title = "Landing | Velzon - React Admin & Dashboard Template";
    return (
        <React.Fragment>

            <div className="layout-wrapper landing wrap-container ">
                <Navbar />
                <main>
                    <section className="section pb-0 hero-section" id="hero">
                        <div className="bg-overlay bg-overlay-pattern"></div>
                        <div className='container'>
                            <div className="pages-mine-bread d-flex justify-content-between">
                                <h4>My page</h4>
                                <div className="mine-score-banner">
                                    <span className="pe-2"><b>current free score</b> 2000</span>
                                    <span><b>adding score</b> 1000</span>
                                </div>
                            </div>
                            <div className="row mt-lg-5 pt-5">
                                <MineSidebar />
                            </div>
                            

                        </div>

                    </section>
                </main>
                
                <Footer />
            </div>
        </React.Fragment>
    );
};

export default Mine;