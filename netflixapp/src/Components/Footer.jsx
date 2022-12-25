import React from "react";

function Footer (){
    const footer={
        width:"100%",
        height:"500px",
        backgroundColor:"white",
        borderTop:"10px solid #222222"
    }
    const footers={
        width:"50%",
        height:"350px",
        border:"1px solid white",
        margin:"auto",
        marginTop:"60px"
    }
    return(
        <>
        <div className="footer" style={footer}>
            <div className="footers" style={footers}>
                <h1 className="head">Questions? Call 000-800-919-1694</h1>
                <div className="containers">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Footer;