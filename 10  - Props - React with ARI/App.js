// REACT 10 - Props
/*
  * ARIHARASUDHAN S - Learn REACT
  * Pass a props value to the constructor 
  * While working with props, never forget to pass it to the super()
*/

import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {name:props.name};
  }
  render() {
    return <h1>Hello {this.state.name}!</h1>;
  }
}
export default App;
