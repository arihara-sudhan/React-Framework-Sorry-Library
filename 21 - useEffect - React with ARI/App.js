// REACT 20 - Object in useState
/*
  * ARIHARASUDHAN S - Learn REACT
  * Pass an object to useState
  * Update
*/

import React,{ useState } from 'react';

function App() {
const [count,setCount] = useState(()=>{
  return {val:2,name:'Ari'};
});
    function chg(event,op) {
      if(op==='+')
        setCount(prevState=> {return {val:prevState.val+1}})
      else
        setCount(prevState=> {return {...prevState,val:prevState.val-1}})

      // REMEMBER : The object will be overridden! To make it retain it's state forever, use a 
      // spread operator as return {...prevState,val:prevState.val-1}
    }
    return(
      <>
        <button onClick={event=>chg(event,'+')}>+</button>
        <span>{count.val} and {count.name}</span>
        <button onClick={event=>chg(event,'-')}>-</button>
      </>
      );
}
export default App;
