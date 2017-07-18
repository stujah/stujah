import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import SvgCircleGroup from './svg_circle_group.js';

class App extends React.Component {
  render() {
    return (
      <SvgCircleGroup num="100"/>
      // <div className='h-100'>
      //   <div className='green tc h-100'>
      //     <div id='drawing' className='h-100 tc'>
      //       <h1 className='mb2'>
      //         Stephen Call
      //       </h1>
      //       <div className='mb2'>
      //         Director, Software Development @ MarketMonitors
      //       </div>
      //     </div>
      //   </div>
      // 
      // </div>
    );
  }
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
);
