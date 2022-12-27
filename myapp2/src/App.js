import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import {AppContext} from "./Context/AppContextProvider";



function App() {

  const style={
    light:{
      color:"black",
      background:"#cecece",
      padding:"50px"
    },
    dark:{
      color:"white",
      background:"black",
      padding:"50px"
    }
  }

  //Consume
  //useContext hook from react will help us consume the data
  //data is consume here:
  const {theme,toggleTheme}=useContext(AppContext);
  return (
    <div className="App" style={theme==="dark" ? style.dark:style.light}>
      <h1> This the theme changing app</h1>
      <h2>Theme is {theme}</h2>
      <button 
      style={
        theme==="dark" ?{
          background:"black",
          color:"white",
          border:"none",
          padding:"5px"
        }:{
          background:"pink",
          color:"balck",
          border:"none",
          padding:"5px"
        }
      }
      onClick={toggleTheme}
      >CHANGE THEME</button>
    </div>
  );
}

export default App;
