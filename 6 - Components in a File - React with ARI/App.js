// REACT 6 - Components in a Files
/*
  * ARIHARASUDHAN S - Learn REACT
  * Import the component Ari from ari.js
  * Create a Class Component App
  * Return the Ari component as <Ari/> in App
*/

import React from 'react';
import Ari from './ari.js';

class App extends React.Component {
  render() {
    return(
      <>
      <Ari/>
      <h1>Hellow React Lovers.....</h1>
      <h2>Hellow React Lovers.....</h2>
      <h3>Hellow React Lovers.....</h3>
      <h4>Hellow React Lovers.....</h4>
      <h5>Hellow React Lovers.....</h5>
      <h6>Hellow React Lovers.....</h6>
      </>
      );
  }
}
export default App;
