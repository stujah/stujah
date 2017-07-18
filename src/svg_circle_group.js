import React from 'react';
import ReactDOM from 'react-dom';
import svg from 'svg.js';

class SvgCircleGroup extends React.Component {
  
  componentDidMount() {
    let draw = svg('drawing').size('100%', '100%')
    let dotGroup = draw.group()
    let dotNum = 400
    for (var i = 0; i < dotNum; i++) {
      let dot = draw.circle(Math.floor((Math.random() * 4) + 1)).fill('#19a974')
      
      let hInteger = Math.floor((Math.random() * 2000) + 0)
      let yInteger = Math.floor((Math.random() * 900) + 0)
      let speed = Math.floor((Math.random() * 90000) + 50000)
      let delay = Math.floor((Math.random() * 500) + 0)
      
      dot.animate(speed, '<>', delay).dmove(hInteger, yInteger).loop()
      dot.addTo(dotGroup)
    }
  }
  
  render() {
    return(
      <div id='drawing' className='h-100 green'></div>
    )
  }
}

export default SvgCircleGroup
