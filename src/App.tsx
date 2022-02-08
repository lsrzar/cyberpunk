import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(): JSX.Element {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h2 className='App-title'>
          cyber<span style={{ color: '#6170FB' }}>p</span>unk
        </h2>
        <h3 className='App-description'>the genre of the future</h3>
      </header>
    </div>
  );
}

export default App;
