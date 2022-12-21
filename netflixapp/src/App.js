import React from "react";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
// import "./App.css";
import Footer from "./Components/Footer";


function App() {
  return(
    <>
      
      <Navbar/>
      <h1>
            List of Top Netflix
        </h1>
      <Card imgsrc="https://rukminim1.flixcart.com/image/416/416/kvlaaa80/poster/d/t/u/medium-dark-netflix-series-matte-finish-poster-postrwndr6202-original-imag8g9669uvygwv.jpeg?q=70"
      title="A Netflix Original Series"
      sname="DARK"
      />
      <Card
      imgsrc="https://resizing.flixster.com/9_UFhNH0nIQR71Jn-w94AJZbDFI=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjcwMjA0Ny53ZWJw"
      title="A Netflix Original Series"
      sname="EXTRA CIRRICULAR"
      />
      
      <Card
      imgsrc="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/teen-movies-on-netflix-scary-stories-to-tell-in-the-dark-1667938935.jpeg?crop=1xw:1xh;center,top&resize=480:*"
      title="A Netflix Original Series"
      sname="EXTRA CIRRICULAR"
      />
      <Card 
      imgsrc="https://m.media-amazon.com/images/I/71tqf702KNL._SX466_.jpg"
      title="A Netflix Original Series"
      sname="EXTRA CIRRICULAR"
      /> 
      {/* <Footer/> */}
      
    </>
    
  )
  
}

export default App;
