import React from 'react'
import VantaTest from '../components/VantaTest'
import './Home.css'
import TypedComponent from '../components/TypedComponent';

function Home() {


    return (

        <div className='home-container'>
            <div className='home-text-container'>
                <TypedComponent className='typed-container' strings={[
                    'Developer.',
                    'Designer.',
                    'Student.'
                ]}
                />
            </div>
            <VantaTest />
        </div>
    )
}

export default Home
