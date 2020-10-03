import React from 'react'
import ParallaxMousemove from 'react-parallax-mousemove';
import './HomePage.css';
import {  useEffect, useRef } from "react";
import { gsap } from "gsap";

function Shapes() {

    let image1 = useRef(null);     

    useEffect(() => {
        gsap.from([image1], 7, {
            delay: .9,
            opacity: 0,
            ease: "power2.out",
            y: 90,
        });
    }, [image1]);

    const style = {
        parallaxOutter: {
            height: '100vh',
            width: '100vw',
            position: 'absolute',
            zIndex: '2',
            fontSize: '16px',
            overflow: 'none',
        },
        
        circle1: {
            display: 'inline-block',
            position: 'relative',
            zIndex: '3',
            marginTop: '9em',
            marginLeft: '109em',
        },
        circle2: {
            display: 'inline-block',
            position: 'relative',
            zIndex: '3',
            marginTop: '21em',
            marginLeft: '84em',
        },
        polygon1: {
            display: 'inline-block',
            position: 'relative',
            zIndex: '3',
            marginTop: '10em',
            marginLeft: '64em',
        },
        polygon2: {
            display: 'inline-block',
            position: 'relative',
            zIndex: '3',
            marginTop: '48em',
            marginLeft: '105em',
        },
        polygon3: {
            display: 'inline-block',
            position: 'relative',
            zIndex: '3',
            marginTop: '40em',
            marginLeft: '68em',
        },
        rectangle3: {
            display: 'inline-block',
            position: 'relative',
            zIndex: '3',
            marginTop: '30em',
            marginLeft: '110em',
        },
        rectangle4: {
            display: 'inline-block',
            position: 'relative',
            zIndex: '3',
            marginTop: '51em',
            marginLeft: '89em',
        },
    }
    return (
        <div>
            <div ref={el => (image1 = el)} className='shapeIntro'>
                <ParallaxMousemove containerStyle={style.parallaxOutter} fullheight={true}>
                    <div className='shapeDiv'>
                        <ParallaxMousemove.Layer layerStyle={style.circle1} config={{
                            xFactor: -0.07,
                            yFactor: 0.10,
                            springSettings: {
                                stiffness: 50,
                                damping: 100
                            }
                        }}>
                            <img src={require('./BackgroundShapesImg2/Ellipse1.png')} alt="" />
                        </ParallaxMousemove.Layer>
                    </div>
                    <div className='shapeDiv'>
                        <ParallaxMousemove.Layer layerStyle={style.circle2} config={{
                            xFactor: 0.11,
                            yFactor: -0.10,
                            springSettings: {
                                stiffness: 30,
                                damping: 90
                            }
                        }}>
                            <img src={require('./BackgroundShapesImg2/Ellipse2.png')} alt="" />
                        </ParallaxMousemove.Layer>
                    </div>
                    <div className='shapeDiv'>
                        <ParallaxMousemove.Layer layerStyle={style.polygon1} config={{
                            xFactor: -0.04,
                            yFactor: -0.07,
                            springSettings: {
                                stiffness: 35,
                                damping: 55
                            }
                        }}>
                            <img src={require('./BackgroundShapesImg2/Polygon1.png')} alt="" />
                        </ParallaxMousemove.Layer>
                    </div>
                    <div className='shapeDiv'>
                        <ParallaxMousemove.Layer layerStyle={style.polygon2} config={{
                            xFactor: 0.04,
                            yFactor: -0.04,
                            springSettings: {
                                stiffness: 40,
                                damping: 40 
                            }
                        }}>
                            <img src={require('./BackgroundShapesImg2/Polygon2.png')} alt="" />
                        </ParallaxMousemove.Layer>
                    </div>
                    <div className='shapeDiv'>
                        <ParallaxMousemove.Layer layerStyle={style.polygon3} config={{
                            xFactor: 0.08,
                            yFactor: 0.06,
                            springSettings: {
                                stiffness: 35,
                                damping: 50
                            }
                        }}>
                            <img src={require('./BackgroundShapesImg2/Polygon3.png')} alt="" />
                        </ParallaxMousemove.Layer>
                    </div>
                    <div className='shapeDiv'>
                        <ParallaxMousemove.Layer layerStyle={style.rectangle3} config={{
                            xFactor: 0.08,
                            yFactor: -0.07,
                            springSettings: {
                                stiffness: 30,
                                damping: 90
                            }
                        }}>
                            <img src={require('./BackgroundShapesImg2/Rectangle3.png')} alt="" />
                        </ParallaxMousemove.Layer>
                    </div>
                    <div className='shapeDiv'>
                        <ParallaxMousemove.Layer layerStyle={style.rectangle4} config={{
                            xFactor: -0.06,
                            yFactor: 0.04,
                            springSettings: {
                                stiffness: 50,
                                damping: 100
                            }
                        }}>
                            <img src={require('./BackgroundShapesImg2/Rectangle4.png')} alt="" />
                        </ParallaxMousemove.Layer>
                    </div>                                                                                                                           
                </ParallaxMousemove>
            </div>
        </div>
    )
}

export default Shapes
