// REACT 11 - getDerivedStateFromProps
/*
  * ARIHARASUDHAN S - Learn REACT
  * It is called just before elements are rendered
  * Pass a props value to the constructor 
  * Use getDerivedStateFromProps to reassign the state with props value
  * This method should be static
*/

import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {name:'Hari'};
  }
  static getDerivedStateFromProps(props,state) {
    return {name:props.name}; 
  }
  render() {
    return <h1>Hello {this.state.name}!</h1>;
  }
}
export default App;
