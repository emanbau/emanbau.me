import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import '../pages/Home.css'
import HALO from 'vanta/dist/vanta.halo.min'
import Navbar from '../components/navbar/Navbar';


const VantaTest = (props) => {
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(HALO({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        baseColor: 0xd70dcb,
        backgroundColor: 0x1e1e1e,
        amplitudeFactor: 2.50,
        xOffset: 0.19,
        yOffset: 0.02,
        size: 2.80
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return (
      <div className ='vanta-container'>
        <div className='vanta-screen' ref={myRef} />
        <div className='navbar-container'>
          <Navbar />
        </div>
      </div>
  )
}

export default VantaTest;