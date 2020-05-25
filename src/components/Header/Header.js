import React from 'react';
import FacebookLogo from './FacebookLogo.png';
import InstagramLogo from './InstagramLogo.png';
import LinkdinLogo from './LinkdinLogo.jpg';

const Header = ({onRouteChange}) => {
    return(
        <div>
            <nav className="db dt-l w-100 border-box pa3 ph5-l shadow-5">
                <p className="db dtc-l v-mid mid-gray link w-100 w-25-l tc tl-l mb2 mb0-l ">
                    <a href = 'https://www.facebook.com/Antescend-llp-107636654279577/'><img src = {FacebookLogo} className="dib w2 h2 br-100 grow pointer" alt="Site Name"/></a>
                    <a href = 'https://www.instagram.com/antescend.llp/'><img src = {InstagramLogo} className="dib w2 h2 br-100 grow pointer mh3" alt="Site Name"/></a>
                    <a href = 'https://www.linkedin.com/in/antescend-llp-8028261a9/'><img src = {LinkdinLogo} className="dib w2 h2 br-100 grow pointer " alt="Site Name"/></a>
                </p>
                <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
                    <p className="link dim dark-gray f4 f5-l dib mr3 mr4-l pointer b" title="Home" onClick = {() => onRouteChange('home')}>Home</p>
                    <p className="link dim dark-gray f4 f5-l dib mr3 mr4-l pointer b" title="Projects" onClick = {() => onRouteChange('projects')}>Projects</p>
                    <p className="link dim dark-gray f4 f5-l dib mr3 mr4-l pointer b" title="Team" onClick = {() => onRouteChange('team')}>Our Team</p>
                    <a href = 'http://eepurl.com/g4hnir'><p className="link dim dark-gray f4 f5-l dib pointer b" title="ContactUs">Contact Us</p></a>
                </div>
            </nav>

        </div>
    )
}

export default Header;