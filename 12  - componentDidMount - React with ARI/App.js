// REACT 12 - componentDidMount
/*
  * ARIHARASUDHAN S - Learn REACT
  * It is called just after elements are rendered
  * Pass a props value to the constructor 
  * Use setTimeOut method to observe changes
*/

import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {name:'Hari'};
  }
  componentDidMount() {
  setTimeout(()=>{this.setState({name:'Ari'})},1000); }
  render() {
    return <h1>Hello {this.state.name}!</h1>;
  }
}
export default App;
