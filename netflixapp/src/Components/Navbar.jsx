import React from "react";

function Navbar(){
    
        const topnav={
            display:"flex",
            width:"100%",
            height:"70px",
            backgroundColor:"black"
          }
          const heading={
            // display:"felx",
            // alignIitems: "center",
            textAlign:"center",
            // justifyContent:"center",
            margin:"auto",
            marginLeft:"200px",
            width:"50%",
            height:"30px",
            border:"1px solid white",

          }
          const header={
            margin:"auto",
            marginTop:"50px",
            textItems:"center",
            textDecoration:"none",
            color:"#fff",
            padding:"0px 45px"
          }
          const signin={
            margin:"auto",
            width:"15%",
            height:"30px",
            textAlign:"center"
          }
          const sign={
            textAlign:"center",
            color:"Red",
            textDecoration:"none",
            fontSize:"20px"
          }
          return (
            <>
             <div className="topnav" style={topnav}>
                    <div>
                        <a href="#">
                            <img src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png" width={100} />
                        </a>
                        
                    </div>
                    <div className="heading" style={heading}>
                        <a href="" className="header" style={header}>Home</a>
                        <a href="" className="header" style={header}>Movies</a>
                        <a href="" className="header" style={header}>Sports</a>
                        <a href="" className="header" style={header}>Cartoon</a>
                    </div>
                    <div className="signin" style={signin}>
                        <a href="" className="sign" style={sign}>SignIn</a>
                    </div>
        
                </div>
            </>
           
                
          );
    
}
export default Navbar;