import React from 'react';
import ReactDOM from 'react-dom';
import Tachyons from 'tachyons/css/tachyons.min.css';
import SvgCircleGroup from './svg_circle_group.js';

class App extends React.Component {
  render() {
    return (
      <div className='h-100'>
        <SvgCircleGroup num="100"/>
        <div className='white relative z-1 tc' style={{top:'40%'}}>
          <h1 className='mb2'>
            Stephen Call
          </h1>
          <div className='mb2'>
            Director, Software Development @ MarketMonitors
          </div>
        </div>
      </div>
    );
  }
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
);
