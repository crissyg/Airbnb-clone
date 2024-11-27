import React from 'react';
import './Home.css';
import Banner from './Banner';

//ES7 snippets to fo 'rfce'

function Home() {
  return (
    <div className = 'home'> 
        <Banner />
    </div>
  )


}

export default Home

  // Add this in your component file to check for than one instance of react that 
  // may differ from Web and Local

  // require('react-dom');
  // window.React2 = require('react');
  // console.log(window.React1 === window.React2);
