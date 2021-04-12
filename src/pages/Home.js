import React from 'react'
import { useRef, useEffect } from 'react';
import './Home.css';
import logo from '../assets/Eman Logo@3x.png';
import eman from '../assets/emanphoto.jpg';
import { StyleSheet, css } from 'aphrodite';
import Typed from 'typed.js';

function Home() {
    const typedComponentRef = useRef()

    useEffect(() => {
        const options = {
            strings: ['web developer', 'ui/ux designer', 'student', 'React enthusiast', 'certified lover boy'],
            typeSpeed: 100,
            backSpeed: 100,
            loop: true,
            loopCount: Infinity,
            showCursor: true,
            startDelay: 500,
            backDelay: 1500,
            smartBackspace: false,
        }

        new Typed(typedComponentRef.current, options)
    }, [typedComponentRef])

    return (
        <div className="home-page">
            <div className='landing-page-container'>
                <img className={css(styles.logo)} src={logo} alt='logo'/>
                <div className={css(styles.landingTextContainer)}>
                    <h1 className='heading'>Hey, I'm <span className='bold'>Eman</span>.</h1>
                    <p className='paragraph'>I’m a <span className='bold' ref={typedComponentRef} /> <br/> focusing on helping others build <br/> <span className="bold">meaningful</span> experiences. </p>
                    <a href='https://www.upwork.com/freelancers/~0144c5c1dc348b1f32' target="_blank" rel="noreferrer noopener" className='button'>Hire Me!</a>
                </div>
                <div className={css(styles.nav)}>
                    <div className='item1'>
                        <a className='nav-title'>Work</a>
                        <div className='bars'/>
                    </div>
                    <div className='item2'>
                        <a href='https://www.upwork.com/freelancers/~0144c5c1dc348b1f32' target="_blank" rel="noreferrer noopener" className='nav-title'>Contact</a>
                        <div className='bars' />
                    </div>
                </div>
            </div>
            <div className="about-me">
                <div className="about-me-content-container">
                    <img src={eman} alt="" className="eman-photo"/>
                    <div className="about-me-text-container">
                        <h1 className='about-me-heading'>About Me</h1>
                        <div className='about-me-paragraph'>
                            Currently, I work as a <span className="bold2">freelance web developer and ui/ux designer</span> to help clients
                            bring their ideas to life. I am also working on developing a free to use translation app
                            called <span className="bold2">TranslateSmart</span> with react-native, as well as creating and managing a 
                            lofi/chillhop/jazzhop radio called <span className="bold2">The Bap Café</span>. I am currently a student at the
                            <span className="bold2"> University of Maryland</span> studying <span className="bold2">Computer Science</span>.
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home

// Aphrodite Styles
const styles = StyleSheet.create({
    logo: {
        position: 'absolute',
        left: '10vw',
        top: '10vh',
        maxWidth: '60px',
        height: 'auto',
    },

    landingTextContainer: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'column',
        '@media screen and (min-width: 992px)': {
            marginLeft: '25vw',
        },
        '@media screen and (max-width: 991px) and (min-width: 766px)': {
            marginLeft: '13vw',
        },
        '@media screen and (max-width: 767px)': {
            marginLeft: '0vw',
        },
    },

    nav: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'center',
        minHeight: 'auto',
        minWidth: 'auto',
        right: '0%',
        marginRight: '30px',
        '@media screen and (max-width: 767px)': {
            display: 'none',
        },
    },

})