// REACT 19 - Functions in Hooks
/*
  * ARIHARASUDHAN S - Learn REACT
  * We can define functions inside the hook or we can invoke a function
  * that returns a state value
*/

import React,{ useState } from 'react';

function App() {
// --------------OBSERVE--------------------
const [count,setCount] = useState(()=>{
  return 7;
});
// ---------------OBSERVE-------------------
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
