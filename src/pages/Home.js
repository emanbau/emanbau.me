import React from 'react'
import VantaTest from '../components/VantaTest'
import './Home.css'
import TypedComponent from '../components/TypedComponent';

function Home() {


    return (

        <div className='home-container'>
            <VantaTest />
            <div className='home-text-container'>
                <TypedComponent strings={[
                    'Developer.',
                    'Designer.',
                    'Student.'
                ]}
                />
            </div>
        </div>
    )
}

export default Home
