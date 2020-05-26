import React from 'react';
import logo from './logo.png';
import Tilt from 'react-tilt'
import './Home.css';

const Home = () => {
    return(
        <div>
            <center>
            <Tilt className="Tilt" options={{ max : 50 }} style={{ height: 300, width: 500 }} >
                <img alt = 'logo' src = {logo} height = '300px' width = '500px'/>
            </Tilt>
                <p className = 'f2 b'>Research , Design , Innovate & Develop</p>
                <p className = 'f3 b'>Where passion meets profession</p>
            </center>
                <article className="design bg-navy fl br3 ba b--black-10">
                    <div className = 'des br3' >
                        <p className = 'f1 white'>Antescend</p>
                        <p className = 'f4 white'>
                        Welcome to antescend, your number one source for all projects. 
                        We're dedicated to giving you the very best of our product with a focus on three characteristics, ie: dependability,
                        customer service and uniqueness. We hope you enjoy our products as much as we enjoy offering them to you. 
                        If you have any questions or comments, please don't hesitate to contact us.
                        </p>
                    </div>
                    <div className = 'de br3'>
                        <p className = 'f1 white'>Reach Us</p>
                            <p className = 'f4 white'><span role="img" aria-label="phone">📞</span>+91-70887 18122</p>
                            <p className = 'f4 white'><span role="img" aria-label="email">📧</span>antescendllp4@gmail.com</p>
                        <p className = 'f4 white link'></p>
                    </div>
                </article>
                    <p>© antescend.com | All rights reserved</p>
        </div>
    );
}

export default Home;
