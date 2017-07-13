import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import emoji from 'node-emoji'

class App extends React.Component {
  render() {
    return (
      <div className='mh4 mv4'>
        <h1 className='gray mb2'>
          Stephen Call
        </h1>
        <div className='gray mb2'>
          Director, Software Development @ MarketMonitors
        </div>
      </div>
    );
  }
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
);
