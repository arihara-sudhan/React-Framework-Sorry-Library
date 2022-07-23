// REACT 8 - State
/*
  * ARIHARASUDHAN S - Learn REACT
  * Create a constructor() inside which there resides a state ( this denotes the invoked one! )
  * A State consists of many properties as Key-Value Pairs
  * Remember the syntax KEY : VALUE not KEY = VALUE 😑
  * It can be accessed like {this.state.propertyName}
*/

import React from 'react';

class App extends React.Component {
  constructor() {
    super(); 
    this.state = {color:'red',name:'good',emoji:'❤️'};
  }
  render() {
    return(
      <>
        <h1>So you are {this.state.name} and {this.state.color} in color {this.state.emoji}</h1>
      </>
      );
  }
}
export default App;
