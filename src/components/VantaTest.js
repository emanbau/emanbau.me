import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import HALO from 'vanta/dist/vanta.halo.min'

const VantaTest = (props) => {
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(HALO({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        baseColor: 0xd70dcb,
        backgroundColor: 0x1e1e1e,
        amplitudeFactor: 2.10,
        xOffset: 0.12,
        size: 2.20
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return <div ref={myRef}>
  </div>
}

export default VantaTest;