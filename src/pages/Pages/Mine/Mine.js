import React from 'react';
import Footer from '../../Landing/footer';
import MineSidebar from '../../../Components/Common/MineSidebar';
const Mine = () => {
    document.title = "Landing | Velzon - React Admin & Dashboard Template";
    return (
        <React.Fragment>
            <div className="layout-wrapper landing wrap-container ">
                <main>
                    <section className="section pb-0 hero-section" id="hero">
                        <div className=""></div>
                        <div className='container py-2'>
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