import React from 'react';
import '../pages/Home.css';
import Typed from 'typed.js';

export default class TypedComponent extends React.Component {
    componentDidMount() {

      const { strings } = this.props;
      const options = {
        strings: strings,
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
        loopCount: Infinity,
        showCursor: false,
        startDelay: 500,
        backDelay: 1500,
        smartBackspace: false
      };
      this.typed = new Typed(this.el, options);
    }
  
    componentWillUnmount() {
      this.typed.destroy();
    }
  
    render() {
      return (
            <span
              className='home-text'
              ref={(el) => { this.el = el; }}
            />
          
      );
    }
  }
