import React from 'react';
import ReactDOM from 'react-dom';
import svg from 'svg.js';

class SvgCircle extends React.Component {
  componentDidMount() {
    let draw = svg('drawing').size('100%', '100%')
    let circle = draw.circle(8).fill('#19a974')
    circle.animate(3000).move(100, 100).loop()
    // .path('M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80').animate(10000, '<>').plot('M10 80 C 40 150, 65 150, 95 80 S 150 10, 180 80').loop(true, true)
    
  	// .animate(1000, '<>')
  	// .plot('M10 80 C 40 150, 65 150, 95 80 S 150 10, 180 80')
  	// .loop(true, true)
    // move(1440, this.props.num)
  }
  
  render() {
    return (
      <div id="drawing" className='h1'></div>
    )
  }
}

export default SvgCircle
