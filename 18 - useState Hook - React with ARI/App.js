// REACT 18 - useState Hook
/*
  * ARIHARASUDHAN S - Learn REACT
  * Create a button. Use onClick instead of onclick
  * We will have access to the type of event
  * NOTE : Hooks can be run within function components only. They can't
  * be called conditionally. They must execute in exact order.
*/

import React,{ useState } from 'react';

function App() {
const [count,setCount] = useState(7);       // useState returns a state and a function that can alter the state
                                                // state (count) is 7. setCount can alter it.    
    function chg(event,op) {
      if(op==='+')
        setCount(prevCount=>prevCount+1)
      else
        setCount(prevCount=>prevCount-1)
    }
    return(
      <>
        <button onClick={event=>chg(event,'+')}>+</button>
        <span>{count}</span>
        <button onClick={event=>chg(event,'-')}>-</button>
      </>
      );
}
export default App;
