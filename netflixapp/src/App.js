import React from "react";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
// import "./App.css";
import Footer from "./Components/Footer";
import Sdata from "./Components/Sdata";

// function ncard(val){
//   console.log(val)
//   return(
//     <Card className="kuch"
//       imgsrc={val.imgscr}
//       title={val.title}
//       sname={val.sname}
//       />
//   )
// }


function App() {
  return(
    <>
      
      <Navbar/>
      <h1 className="heading_style">
            List of Top Netflix
        </h1>
      {/* // {Sdata.map(function ncard(val) */}
      {Sdata.map((val,index)=>{
        return(
              <Card className="kuch"
                imgsrc={val.imgscr}
                title={val.title}
                sname={val.sname}
                />
            )
      })
      }
      
  )
      {/* <Footer/> */}
      
    </>
    
  )
  
}

export default App;
