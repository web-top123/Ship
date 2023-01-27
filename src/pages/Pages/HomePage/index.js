import React from 'react';
import MetaTags from 'react-meta-tags';
import Home from './home';
import Client from './client';
import Services from './services';
import Features from './features';
import Plans from './plans';
import Faqs from './faq';
import Tabs from './tabs';
// import Reviews from './reviews';
import Counter from './counter';
import WorkProcess from './workProcess';
import Team from './team';
import Contact from './contact';
import Cta from './cta';
import Footer from './footer';

const HomePage = () => {
    document.title = "Landing | Velzon - React Admin & Dashboard Template";
    return (
        <React.Fragment>
            <div className="layout-wrapper landing">
                <Home />
                <Client />
                <Services />
                <Tabs />
                <Features />
                <Plans />
                <Faqs />
                {/* <Reviews /> */}
                <Counter />
                <WorkProcess />
                <Team />
                <Contact />
                <Cta />
                <Footer />
            </div>
          
        </React.Fragment>
    );
};

export default HomePage;