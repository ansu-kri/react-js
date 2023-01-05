import React, { useState } from 'react';
import './App.css';



function App() {
  const state=useState();
// console.log(state)

const [count, setCount]=useState(0)

// let count=1;

const IncNum=()=>{
  setCount(count+1)
  // console.log("clicked" + count++)
}
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={IncNum}>Click Me</button>
    </div>
  );
}

export default App;
