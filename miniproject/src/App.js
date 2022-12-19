import React from "react";

function App() {
  let currDate=new Date(2022,12,1,8);
currDate=currDate.getHours();

let greeting="";

const cssStyle={};

if(currDate>=1 && currDate<12){
greeting="GOOD MORNING";
cssStyle.color="darkgreen"
}else if(currDate>=12 && currDate<19){
  greeting="GOOD AFTERNOON";
  cssStyle.color="yellow"
}else{
  greeting="GOOD NIGHT";
  cssStyle.color="black"
}
const img="https://m.media-amazon.com/images/I/41lfJiRMNLL.jpg"
return(
  <>
   <div className='heading'>
  <h1>This is the Mini-Projext </h1>
  </div>
  <div className='image'>
    <img src={img} />
  </div>
  <div className='greting'>
  <p>Hello Everyone,<span style={cssStyle}> {greeting} </span></p>
  </div>
  </>
 
)
}

export default App;
