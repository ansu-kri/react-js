import React from "react";
import {add,sub,multi,div} from "./Components/Calci"


function App() {
  return (
   <>
   <ol>
    <li>Sum of Two no is {add(10,10)}</li>
    <li>sub of Two no is {sub(10,10)}</li>
    <li>multi of Two no is {multi(10,10)}</li>
    <li>div of Two no is {div(10,3)}</li>
    
   </ol>
   </>
  );
}

export default App;
