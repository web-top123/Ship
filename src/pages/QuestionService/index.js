import React from 'react';
import Navbar from '../Landing/navbar';
import Footer from '../Landing/footer';
import Home from '../Landing/home';
const QuestionService = () => {
    document.title = "Landing | Velzon - React Admin & Dashboard Template";
    return (
        <React.Fragment>

            <div className="layout-wrapper landing">
                <Navbar />
                    <div className="container">
                           content 
                    </div>
                <Footer />
            </div>
        </React.Fragment>
    );
};

export default QuestionService;