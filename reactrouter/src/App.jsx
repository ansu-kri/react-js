
import './App.css';
import {Routes,Route,Link} from "react-router-dom";
import Navbar from "./Components/Navbar";
import AllRoutes from './Pages/AllRoutes';

//e.preventDefault;


function App() {
  return (
    <div className="App">
         <div style={{
            display:"flex",
    alignItems:"center",
    justifyContent:"space-around",
    width:"80%",
    margin:"auto"
    }}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/users">Users</Link>
    </div>
    <Routes>
        <Route path="/" element={<h1>Home</h1>}></Route>
        {/* path---what is the path
        element-----which element you want to show */}
  
  
        <Route path="/about" element={<h1>About</h1>}></Route>
        <Route path="/contact" element={<h1>Contact</h1>}></Route>
        <Route path="/users" element={<h1>Users</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
