import react from "react";
import ReactDom from "react-dom";

const CurrentDate=new Date().toLocaleDateString();
const CurrentTime=new Date().toLocaleTimeString();

const heading={
  color:"blue",
  textAlign:"center"
}
const para={
  textAlign:"center",
  fontSize:"20px"
}
const Current={
  display:"flex",
  flexDirection:"column",
  alignItem:"center",
  justifyContent:"center",
  textAlign:"center",
  marginTop:"40px",
  width:"300px",
  height:"300px",
  backgroundColor:"skyblue",
  margin:"auto"
}
const Dt={
  fontSize:"20px",
  color:"green"
}
ReactDom.render(
  
  <>
  <h1 className="heading" style={heading}>Hello, Eeveryone This is My first Simple app</h1>
  <p className="para" style={para}>This app shows the current Date and Current Time</p>
  <div className="Current" style={Current}>
    <p className="Dt" style={Dt}>Current Date is={CurrentDate}</p>
    <p className="Dt" style={Dt}>Current Time is={CurrentTime}</p>
  </div>
  </>,
  document.getElementById("root")
  
)