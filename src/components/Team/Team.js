import React from 'react';
import ayush from './ayush.JPEG';
import rahul from './rahul.JPEG';
import karan from './karan.JPEG';
import shataksh from './shataksh.JPEG';
import ayushg from './ayushg.JPEG';
import ram from './Ram.jpg';
import yuvraj from './Yuvraj.png';
import LinkedIcon from './LinkedinIcon.png';
import './Team.css';

const Team = () => {
    return(
        <div className = 'lineup'>
           <article className="w5 design br3 pa2 pa4-ns mv3 mh3 grow pointer shadow-5">
                <div className="tc">
                    <img src = {ayush} className="br-100 h4 w4 dib ba b--black-05 pa2" alt="Ayush Yadav"/>
                    <h1 className="f4 mb2">Ayush Yadav</h1>
                    <h2 className="f5 fw4 mt0">Founder</h2>
                    <a  href ='https://www.linkedin.com/in/ayush-yadav-a1b39115b/'><img className = 'dim' alt = 'instagram' src = {LinkedIcon} height = '25px' width = '30px'/></a>
                </div>
            </article>
            <article className="w5 design br3 pa2 pa4-ns mv3 mh3 grow pointer shadow-5">
                <div className="tc">
                    <img src = {yuvraj} className="br-100 h4 w4 dib ba b--black-05 pa2" alt="Yuvraj Joshi"/>
                    <h1 className="f4 mb2">Yuvraj Joshi</h1>
                    <a className = 'mv3' href ='https://www.linkedin.com/in/yuvraj-joshi-7229631aa/'><img className = 'dim' alt = 'instagram' src = {LinkedIcon} height = '25px' width = '30px'/></a>
                </div>
            </article>
            <article className="w5 design br3 pa2 pa4-ns mv3 mh3 grow pointer shadow-5">
                <div className="tc">
                    <img src = {rahul} className="br-100 h4 w4 dib ba b--black-05 pa2" alt="Rahul Nath"/>
                    <h1 className="f4 mb2">Rahul Nath</h1>
                    <a href ='https://www.linkedin.com/in/rahul-nath-b22943178/'><img className = 'dim' alt = 'instagram' src = {LinkedIcon} height = '25px' width = '30px'/></a>
                </div>
            </article>
            <article className="w5 design br3 pa2 pa4-ns mv3 mh3 grow pointer shadow-5">
                <div className="tc">
                    <img src = {karan} className="br-100 h4 w4 dib ba b--black-05 pa2" alt="Karan Raina"/>
                    <h1 className="f4 mb2">Karan Raina</h1>
                    <a href ='https://www.linkedin.com/in/karan-raina-510839169/'><img className = 'dim' alt = 'instagram' src = {LinkedIcon} height = '25px' width = '30px'/></a>
                </div>
            </article>
            <article className="w5 design br3 pa2 pa4-ns mv3 mh3 grow pointer shadow-5">
                <div className="tc">
                    <img src = {shataksh} className="br-100 h4 w4 dib ba b--black-05 pa2" alt="Shataksh Bhardwaj"/>
                    <h1 className="f4 mb2">Shataksh Bhardwaj</h1>
                    <a href ='https://www.linkedin.com/in/shataksh-bhardwaj-097537170/'><img className = 'dim' alt = 'instagram' src = {LinkedIcon} height = '25px' width = '30px'/></a>
                </div>
            </article>
            <article className="w5 design br3 pa2 pa4-ns mv3 mh3 grow pointer shadow-5">
                <div className="tc">
                    <img src = {ram} className="br-100 h4 w4 dib ba b--black-05 pa2" alt="Ram Gumber"/>
                    <h1 className="f4 mb2">Ram Gumber</h1>
                    <a href ='https://www.linkedin.com/in/ram-gumber-253798187/'><img className = 'dim' alt = 'instagram' src = {LinkedIcon} height = '25px' width = '30px'/></a>
                </div>
            </article>
            <article className="w5 design br3 pa2 pa4-ns mv3 mh3 grow pointer shadow-5">
                <div className="tc">
                    <img src = {ayushg} className="br-100 h4 w4 dib ba b--black-05 pa2" alt="Ayush Giri"/>
                    <h1 className="f4 mb2">Ayush Giri</h1>
                    <a href ='https://www.linkedin.com/in/ayush-giri-270187195/'><img className = 'dim' alt = 'instagram' src = {LinkedIcon} height = '25px' width = '30px'/></a>
                </div>
            </article>
        </div>    
    )
}

export default Team;
