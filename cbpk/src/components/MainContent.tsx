import React from 'react';
import './MainContent.css';

function MainContent(): JSX.Element {
  return (
    <div className='MainContent'>
      <h1 className='Mc-Title'>Cyberpunk facts</h1>
      <ul className='Mc-List'>
        <li className='Mc-ListItem'>
          Product of New Wave science fiction in the 60s - 70s
        </li>
        <li className='Mc-ListItem'>
          The term ‘cyberpunk’ combines ‘cybernetics’ and ‘punk’
        </li>
        <li className='Mc-ListItem'>
          It focuses on showing low-life people in a high-tech setting{' '}
        </li>
        <li className='Mc-ListItem'>
          The revolution of computers gave it its popularity
        </li>
        <li className='Mc-ListItem'>
          Notable media franchises featuring this genre: Blade Runner, Final
          Fantasy VII, Ghost in the Shell
        </li>
      </ul>
    </div>
  );
}

export default MainContent;
