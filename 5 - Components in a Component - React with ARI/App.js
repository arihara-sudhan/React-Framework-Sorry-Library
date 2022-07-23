// REACT 5 - Components in a Component
/*
  * ARIHARASUDHAN S - Learn REACT
  * Create a Class Component App
  * Create another Class Component App2
  * Return the App2 component as <App2/> (General Syntax for rendering components) in App
  * It can be done with functional components also! And mixture both too!
*/

import React from 'react';

class App2 extends React.Component {
  render() {
    return(
      <>
      <h1>HIII REACT LOVERS!!!!</h1>
      <h2>HIII REACT LOVERS!!!!</h2>
      <h3>HIII REACT LOVERS!!!!</h3>
      <h4>HIII REACT LOVERS!!!!</h4>
      <h5>HIII REACT LOVERS!!!!</h5>
      <h6>HIII REACT LOVERS!!!!</h6>
      </>
      );
  }
}


class App extends React.Component {
  render() {
    return(
      <>
      <App2/>
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
