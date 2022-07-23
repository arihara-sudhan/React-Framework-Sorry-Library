// REACT 17 - Conditionals : if,else if,else,ternary
/*
  * ARIHARASUDHAN S - Learn REACT
  * Create a button. Use onClick instead of onclick
  * We will have access to the type of event
*/

import React from 'react';

class App extends React.Component {
  constructor() {
    super(); 
    this.state = {num:0,color:'red',name:'EVEN',emoji:'❤️'};
  }
  change = (num) => {
    if(num===1)
      this.setState({num:1,color:'green',emoji:'💚'});
    else if(num===2)
      this.setState({num:2,color:'blue',emoji:'💙'});
    else if(num===3)
      this.setState({num:3,color:'yellow',emoji:'💛'});
    else
      this.setState({num:4,color:'purple',emoji:'💜'});
    (num%2)?this.setState({name:'ODD'}):this.setState({name:'EVEN'});
  }
  render() {
    return(
      <>
        <button onClick={()=>this.change(1)}>1</button>
        <button onClick={()=>this.change(2)}>2</button>
        <button onClick={()=>this.change(3)}>3</button>
        <button onClick={()=>this.change(4)}>4</button>
        <h1>So you are {this.state.num} and {this.state.color} in color {this.state.emoji}</h1>
        <h1>YOU ARE {this.state.name}!</h1>
      </>
      );
  }
}
export default App;
