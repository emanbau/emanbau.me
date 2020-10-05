import React from 'react'
import './HomePage.css'
import {  useEffect, useRef } from "react";
import { gsap } from "gsap";
import Shapes from './Shapes';
import Shapes2 from './Shapes2';

function HomePage() {

    let line1 = useRef(null);
    let line2 = useRef(null);     
    let line3 = useRef(null);      
 

    useEffect(() => {
        gsap.from([line1, line2, line3], 1.75, {
            delay: 1,
            opacity: 0,
            ease: "circ.out",
            y: 90,
            stagger: {
            amount: 1.2
            }
        });
    }, [line1, line2, line3]);

    return (
        <div className="homeContainer">
            <div className='shapesBigContainer'>
                <Shapes />
                <Shapes2 />
            </div>
            <div className="helloContainer">
                <h1 ref={el => (line1 = el)} className="helloContainerText">hello im</h1>
                <div className="emanAnimation">
                    <h1 ref={el => (line2 = el)}>
                        eman.
                    </h1>
                </div>
            </div>
            <div ref={el => (line3 = el)} className="socialsContainer">
                <div className="socialMediaContainer">
                    <ul className="socialMedia">
                        <li>
                            <a href='https://www.facebook.com/profile.php?id=100009543622740' target="_blank" rel="noopener noreferrer">
                           <img src={require('./SocialMedia/Icon simple-facebook.png')} alt='' className='socialIcon' /> 
                           </a>
                        </li>
                        <li>
                            <a href='https://github.com/emanbau' target="_blank" rel="noopener noreferrer">
                           <img src={require('./SocialMedia/Icon simple-github.png')} alt='' className='socialIcon' /> 
                           </a>
                        </li>
                        <li>
                            <a href='https://www.instagram.com/eman.bau/' target="_blank" rel="noopener noreferrer">
                           <img src={require('./SocialMedia/Icon simple-instagram.png')} alt='' className='socialIcon' />
                           </a> 
                        </li>
                        <li>
                            <a href='https://www.linkedin.com/in/eman-bautista-9994ba1b2/' target="_blank" rel="noopener noreferrer">
                           <img src={require('./SocialMedia/Icon simple-linkedin.png')} alt='' className='socialIcon' />
                           </a> 
                        </li>
                        <li>
                            <a href='https://twitter.com/emanbau' target="_blank" rel="noopener noreferrer">
                           <img src={require('./SocialMedia/Icon simple-twitter.png')} alt='' className='socialIcon' /> 
                           </a>
                        </li>
                    </ul>
                </div>
                <div className="socialEmailContainer">
                    <img src={require('./SocialMedia/emanbau2@gmail.com@2x.png')} alt='' className="email" />
                </div>
            </div>
        </div>
    )
}
export default HomePage
