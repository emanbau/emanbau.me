import React from 'react'
import './HomePage.css'
import {  useEffect, useRef } from "react";
import { gsap } from "gsap";
import Shapes from './Shapes';
import Shapes2 from './Shapes2';

function HomePage() {

    let line1 = useRef(null);
    let line2 = useRef(null);      

    useEffect(() => {
        gsap.from([line1, line2], 1.75, {
            delay: 1,
            opacity: 0,
            ease: "circ.out",
            y: 90,
            stagger: {
            amount: 1.2
            }
        });
    }, [line1, line2]);

    return (
        <div className="homeContainer">
            <Shapes />
            <Shapes2 />
            <div className="helloContainer">
                <h1 ref={el => (line1 = el)} className="helloContainerText">hello im</h1>
                <div className="emanAnimation">
                    <h1 ref={el => (line2 = el)}>
                        eman.
                    </h1>

                </div>
            </div>
        </div>
    )
}
export default HomePage
