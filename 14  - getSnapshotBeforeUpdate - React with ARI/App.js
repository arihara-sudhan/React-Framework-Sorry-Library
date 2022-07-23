// REACT 14 - getSnapshotBeforeUpdate()
/*
  * ARIHARASUDHAN S - Learn REACT
  * Create an Arrow function inside which setState is used [ Normal function can't refer to the Parent ]
  * setState is the only way to change a state! (this.setState)
  * It won't work! Bcoz , yet to be called!
  * Create a button and assign an event onClick which is to call the change method. [Never forget : Here , it's onClick and not onclick]
  * getSnapshotBeforeUpdate() lets us keep track of the old state value
*/

import React from 'react';

class App extends React.Component {
  constructor() {
    super(); 
    this.state = {color:'red',name:'good',emoji:'❤️'};
  }

  getSnapshotBeforeUpdate(props,state) {
    document.getElementById('root1').innerHTML = 'Before updation , the color was '+ state.color+' '+state.emoji;
  }
  change = () => {
    this.setState({color:'green',emoji:'💚'});
  }
  render() {
    return(
      <>
        <button onClick={this.change}>Click Me</button>
        <h1>So you are {this.state.name} and {this.state.color} in color {this.state.emoji}</h1>
      </>
      );
  }
}
export default App;
