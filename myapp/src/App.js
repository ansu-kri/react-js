import logo from './logo.svg';
import './App.css';
import { useState, useRef,useEffect } from 'react';

const fixtimeString=(time)=> (time<10? `0${time}`:time);


const formateTimeToString=(time)=>{
  const seconds=time%60;
  const minutes=Math.floor(time/60)%60;
  const outputString=`00:0${minutes}:${fixtimeString(seconds)}`;

  return outputString;
}

function App() {
  
  const [timer,setTimer]=useState(61);
  const ref =useRef(null); //i can access it anywhere
  //ref.current:{current:null}

  useEffect(()=>{
    const cleanup=()=>{
      stopTimer();

    }
    return cleanup;
  },[]);
  const startTimer=()=>{
    if(ref.current!==null) return;
    ref.current=setInterval(()=>{
      setTimer((prevTimer)=> prevTimer+1);
    },1000);
  }

  const stopTimer=()=>{
    clearInterval(ref.current);
    ref.current=null
  }

  const resetTimer=()=>{
    //it should stop timer
    stopTimer();
    //it should change vslue back to 0;
    setTimer(0);
  }
  console.log(ref);
  return (
    <div className="App">
      {/* <h1>Timer:{timer}</h1> */}
      <h1>{formateTimeToString(timer)}</h1>
      <button onClick={startTimer}>START</button>
      <button onClick={stopTimer}>STOP</button>
      <button onClick={resetTimer}>RESET</button>
    </div>
  );
}

export default App;
