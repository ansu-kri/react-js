import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


function App() {
  return(
    <div className="App">
      
      <Navbar/>
      <div className="cards">
        <div className="card">
          <img src="https://rukminim1.flixcart.com/image/416/416/kvlaaa80/poster/d/t/u/medium-dark-netflix-series-matte-finish-poster-postrwndr6202-original-imag8g9669uvygwv.jpeg?q=70" alt="" className="card_img" />
          <div className="card_info">
            <span className="card_Category">A Netflix Original Series</span>
            <h3 className="card_title">DARK</h3>
            <a href="" target="_blank">
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
  
}

export default App;
