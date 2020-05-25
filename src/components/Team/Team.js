import React from 'react';
import kushal from './kushal.JPEG';
import ayush from './ayush.JPEG';
import aastha from './aastha.jpg';
import rahul from './rahul.JPEG';
import karan from './karan.JPEG';
import shataksh from './shataksh.JPEG';
import ayushg from './ayushg.JPEG';
import ram from './Ram.jpg';
import instagramIcon from './InstagramIcon.png';
import './Team.css';

const Team = () => {
    return(
        <div className = 'lineup'>
           <article className="w5 mh2 design br3 pa2 pa4-ns mv3 mh3 grow pointer">
                <div className="tc">
                    <img src = {kushal} className="br-100 h4 w4 dib ba b--black-05 pa2" alt=" Kushal Ranga"/>
                    <h1 className="f4 mb2">Kushal Ranga</h1>
                    <h2 className="f5 fw4 mt0">Co-Founder</h2>
                    <a href ='https://www.instagram.com/kushal.44/'><img className = 'dim' alt = 'instagram' src = {instagramIcon} height = '20px' width = '20px'/></a>
                </div>
            </article>
            <article className="w5 mh2 design br3 pa2 pa4-ns mv3 mh3 grow pointer">
                <div className="tc">
                    <img src = {ayush} className="br-100 h4 w4 dib ba b--black-05 pa2" alt="Ayush Yadav"/>
                    <h1 className="f4 mb2">Ayush Yadav</h1>
                    <h2 className="f5 fw4 mt0">Founder & CEO (Chief Executive Officer)</h2>
                    <a href ='https://www.instagram.com/ayush_05_12/'><img className = 'dim' alt = 'instagram' src = {instagramIcon} height = '20px' width = '20px'/></a>
                </div>
            </article>
            <article className="w5 mh2 design br3 pa2 pa4-ns mv3 mh3 grow pointer">
                <div className="tc">
                    <img src = {aastha} className="br-100 h4 w4 dib ba b--black-05 pa2" alt="Aastha Bhardwaj"/>
                    <h1 className="f4 mb2">Aastha Bhardwaj</h1>
                    <h2 className="f5 fw4 mt0">CHRO(Chief Human Resource Officer)</h2>
                    <a href ='https://www.instagram.com/aasthabhardwaj_6/'><img className = 'dim' alt = 'instagram' src = {instagramIcon} height = '20px' width = '20px'/></a>
                </div>
            </article>
            <article className="w5 mh2 design br3 pa2 pa4-ns mv3 mh3 grow pointer">
                <div className="tc">
                    <img src = {rahul} className="br-100 h4 w4 dib ba b--black-05 pa2" alt="Rahul Nath"/>
                    <h1 className="f4 mb2">Rahul Nath</h1>
                    <h2 className="f5 fw4 mt0">COO (Chief Operating Officer)</h2>
                    <a href ='https://www.instagram.com/mr._nath__2904/'><img className = 'dim' alt = 'instagram' src = {instagramIcon} height = '20px' width = '20px'/></a>
                </div>
            </article>
            <article className="w5 mh2 design br3 pa2 pa4-ns mv3 mh3 grow pointer">
                <div className="tc">
                    <img src = {karan} className="br-100 h4 w4 dib ba b--black-05 pa2" alt="Karan Raina"/>
                    <h1 className="f4 mb2">Karan Raina</h1>
                    <h2 className="f5 fw4 mt0">CMO (Chief Marketing Officer)</h2>
                    <a href ='https://www.instagram.com/karan_raina_/'><img className = 'dim' alt = 'instagram' src = {instagramIcon} height = '20px' width = '20px'/></a>
                </div>
            </article>
            <article className="w5 mh2 design br3 pa2 pa4-ns mv3 mh3 grow pointer">
                <div className="tc">
                    <img src = {shataksh} className="br-100 h4 w4 dib ba b--black-05 pa2" alt="Shataksh Bhardwaj"/>
                    <h1 className="f4 mb2">Shataksh Bhardwaj</h1>
                    <h2 className="f5 fw4 mt0">Cloud Computing</h2>
                    <a href ='https://www.instagram.com/i_am_shataksh/'><img className = 'dim' alt = 'instagram' src = {instagramIcon} height = '20px' width = '20px'/></a>
                </div>
            </article>
            <article className="w5 mh2 design br3 pa2 pa4-ns mv3 mh3 grow pointer">
                <div className="tc">
                    <img src = {ayushg} className="br-100 h4 w4 dib ba b--black-05 pa2" alt="Ayush Giri"/>
                    <h1 className="f4 mb2">Ayush Giri</h1>
                    <h2 className="f5 fw4 mt0">Front-End Developer</h2>
                    <img className = 'dim' alt = 'instagram' src = {instagramIcon} height = '20px' width = '20px'/>
                </div>
            </article>
            <article className="w5 mh2 design br3 pa2 pa4-ns mv3 mh3 grow pointer">
                <div className="tc">
                    <img src = {ram} className="br-100 h4 w4 dib ba b--black-05 pa2" alt="Ram Gumber"/>
                    <h1 className="f4 mb2">Ram Gumber</h1>
                    <h2 className="f5 fw4 mt0">Full Stack Developer</h2>
                    <a href ='https://www.instagram.com/its_aar_gee/'><img className = 'dim' alt = 'instagram' src = {instagramIcon} height = '20px' width = '20px'/></a>
                </div>
            </article>
        </div>    
    )
}

export default Team;