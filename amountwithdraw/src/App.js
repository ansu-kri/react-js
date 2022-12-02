import './App.css';
// import reaact from "react"
// import { ReactDOM } from 'react';
import {useState} from "react";




function App() {
  const [amount, setAmount] = useState(0);

  // const handleDeposit = () => {
  //   setAmount(amount + 100);
  //   setAmount(amount + 100)
  //   setAmount(amount + 900)
  // };
  // const handleDeposit = (amt) => {
  //   setAmount(amount + amt);
  //   setAmount(amount + amt);
  //   setAmount(amount + amt);
  // };
  const handleDeposit = (amt) => {
    setAmount(amount + 200);
    setAmount((prev) => prev + amt);
    setAmount((prev) => prev + amt);
    setAmount((prev) => prev + amt);
    setAmount((prev) => prev + amt);
  };

  const handlewithdraw = () => {
    setAmount(amount - 100);
  };
  return (
    <div className="App">
      <h1>Current Amount:{amount}</h1>
      {/* <button onClick={handleDeposit}>Deposit 100</button>
      <button onClick={handlewithdraw}>Withdraw 100</button> */}
      <button onClick={() => handleDeposit(100)}>Deposit 100</button>
      <button onClick={handlewithdraw}>Withdraw 100</button>
    </div>
    
  );
}

export default App;
