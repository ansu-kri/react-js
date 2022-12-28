import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";


const links=[{path:'/',title:'home'},{path:'/about',title:'About'},
{path:'/contact',title:'Contact'},{path:'/user',title:'Uaers'}]
function Navbar(){

const defaultStyle={
    textDecoration:"none",
    color:"black",
};
const activeStyle={
    textDecoration:"none",
    color:"red",
}

    return(
        <div style={{
            display:"flex",
    alignItems:"center",
    justifyContent:"space-around",
    width:"80%",
    height:"50px",
    margin:"auto",
    backgroundColor:"blue",
    marginTop:"60px"
    }}>

    {links.map((link)=>(<NavLink 
    className={({isActive})=>{
        return isActive ? styles.active: styles.default;
    }}
    //  style={({isActive})=>{
    //     return isActive ? activeStyle: defaultStyle;
    // }}
    key={link.path} to={link.path}>
    {link.title}
    </NavLink>))}
      {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/users">Users</Link> */}
    </div>
    )
}
export default Navbar;