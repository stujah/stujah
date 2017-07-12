import React from 'react';
import ReactDOM from 'react-dom';
// import tachyons from 'tachyons';
import emoji from 'node-emoji'

class App extends React.Component {
  render() {
    const globeEmoji = emoji.get('earth_americas');
    const fireEmoji = emoji.get('fire')
    return (
      <div className='mh4 mv4'>
        <h1 className='green mb2 tc'>
          {globeEmoji} Stujah {globeEmoji}
        </h1>
        <div className='green tc'>
          The Fellini of Code / The Duke of Kooks / The Buddha of Stu's
        </div>
      </div>
    );
  }
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
);
