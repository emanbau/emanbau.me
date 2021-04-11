import React from 'react'
import { useRef, useEffect } from 'react';
import './Home.css';
import logo from '../assets/Eman Logo@3x.png'
import { StyleSheet, css } from 'aphrodite';
import Typed from 'typed.js';

function Home() {
    const typedComponentRef = useRef()

    useEffect(() => {
        const options = {
            strings: ['ui/ux designer', 'web developer', 'node.js hero', 'certified lover boy'],
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
        <div className='landing-page-container'>
            <img className={css(styles.logo)} src={logo} alt='logo'/>
            <div className={css(styles.landingTextContainer)}>
                <h1 className='heading'>Hey, I'm <span className='bold'>Eman</span>.</h1>
                <p className='paragraph'>I’m a <span className='bold' ref={typedComponentRef} /> <br/> focusing on helping others build <br/> <span className="bold">meaningful</span> experiences. </p>
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
})