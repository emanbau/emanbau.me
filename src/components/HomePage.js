import React from 'react'
import './HomePage.css'
import {  useEffect, useRef } from "react";
import { gsap } from "gsap";
import Shapes from './Shapes';

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
            <div className="helloContainer">
                <h1 ref={el => (line1 = el)} className="helloContainerText">hello im</h1>
                <div className="emanAnimation">
                    <svg ref={el => (line2 = el)} width="436" height="67" viewBox="0 0 436 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M68.88 33.96C68.88 34.2 68.76 35.88 68.52 39H19.68C20.56 43 22.64 46.16 25.92 48.48C29.2 50.8 33.28 51.96 38.16 51.96C41.52 51.96 44.48 51.48 47.04 50.52C49.68 49.48 52.12 47.88 54.36 45.72L64.32 56.52C58.24 63.48 49.36 66.96 37.68 66.96C30.4 66.96 23.96 65.56 18.36 62.76C12.76 59.88 8.44 55.92 5.4 50.88C2.36 45.84 0.839996 40.12 0.839996 33.72C0.839996 27.4 2.32 21.72 5.28 16.68C8.32 11.56 12.44 7.59999 17.64 4.79999C22.92 1.91999 28.8 0.479996 35.28 0.479996C41.6 0.479996 47.32 1.83999 52.44 4.55999C57.56 7.27999 61.56 11.2 64.44 16.32C67.4 21.36 68.88 27.24 68.88 33.96ZM35.4 14.64C31.16 14.64 27.6 15.84 24.72 18.24C21.84 20.64 20.08 23.92 19.44 28.08H51.24C50.6 24 48.84 20.76 45.96 18.36C43.08 15.88 39.56 14.64 35.4 14.64Z" fill="#2A2A2A"/>
                        <path d="M177.223 0.479996C185.303 0.479996 191.703 2.87999 196.423 7.67999C201.223 12.4 203.623 19.52 203.623 29.04V66H184.903V31.92C184.903 26.8 183.823 23 181.663 20.52C179.583 17.96 176.583 16.68 172.663 16.68C168.263 16.68 164.783 18.12 162.223 21C159.663 23.8 158.383 28 158.383 33.6V66H139.663V31.92C139.663 21.76 135.583 16.68 127.423 16.68C123.103 16.68 119.663 18.12 117.103 21C114.543 23.8 113.263 28 113.263 33.6V66H94.5431V1.43999H112.423V8.88C114.823 6.15999 117.743 4.07999 121.183 2.64C124.703 1.2 128.543 0.479996 132.703 0.479996C137.263 0.479996 141.383 1.4 145.063 3.24C148.743 4.99999 151.703 7.59999 153.943 11.04C156.583 7.68 159.903 5.08 163.903 3.24C167.983 1.4 172.423 0.479996 177.223 0.479996Z" fill="#2A2A2A"/>
                        <path d="M259.642 0.479996C269.642 0.479996 277.322 2.87999 282.682 7.67999C288.042 12.4 290.723 19.56 290.723 29.16V66H273.202V57.96C269.682 63.96 263.122 66.96 253.522 66.96C248.562 66.96 244.242 66.12 240.562 64.44C236.962 62.76 234.202 60.44 232.282 57.48C230.362 54.52 229.402 51.16 229.402 47.4C229.402 41.4 231.642 36.68 236.122 33.24C240.682 29.8 247.682 28.08 257.122 28.08H272.003C272.003 24 270.763 20.88 268.283 18.72C265.802 16.48 262.082 15.36 257.122 15.36C253.682 15.36 250.282 15.92 246.922 17.04C243.642 18.08 240.842 19.52 238.522 21.36L231.802 8.27999C235.322 5.79999 239.522 3.87999 244.402 2.51999C249.362 1.15999 254.442 0.479996 259.642 0.479996ZM258.202 54.36C261.402 54.36 264.243 53.64 266.723 52.2C269.203 50.68 270.963 48.48 272.003 45.6V39H259.163C251.483 39 247.642 41.52 247.642 46.56C247.642 48.96 248.562 50.88 250.402 52.32C252.322 53.68 254.922 54.36 258.202 54.36Z" fill="#2A2A2A"/>
                        <path d="M360.105 0.479996C368.105 0.479996 374.545 2.87999 379.425 7.67999C384.385 12.48 386.865 19.6 386.865 29.04V66H368.145V31.92C368.145 26.8 367.025 23 364.785 20.52C362.545 17.96 359.305 16.68 355.065 16.68C350.345 16.68 346.585 18.16 343.785 21.12C340.985 24 339.585 28.32 339.585 34.08V66H320.865V1.43999H338.745V8.99999C341.225 6.27999 344.305 4.2 347.985 2.75999C351.665 1.24 355.705 0.479996 360.105 0.479996Z" fill="#2A2A2A"/>
                        <path d="M424.114 66.96C420.834 66.96 418.074 65.84 415.834 63.6C413.594 61.36 412.474 58.56 412.474 55.2C412.474 51.76 413.594 49 415.834 46.92C418.074 44.76 420.834 43.68 424.114 43.68C427.394 43.68 430.154 44.76 432.394 46.92C434.634 49 435.754 51.76 435.754 55.2C435.754 58.56 434.634 61.36 432.394 63.6C430.154 65.84 427.394 66.96 424.114 66.96Z" fill="#2A2A2A"/>
                    </svg>

                </div>
            </div>
        </div>
    )
}
export default HomePage
