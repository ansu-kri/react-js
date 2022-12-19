import logo from './logo.svg';
import './App.css';

function App() {
  const library={
    backgroundColor:"#f1f1f1",
    width:"100%",
    height:"800px",
  }
  const image={
    marginLeft:"2px",
    width:"250px"
  }
  const heading={
    textAlign:"center",
    color:"blue",
    cursor:"Pointer",
    backgroundColor:"#f1f1f1"
  }
  const toppart={
    display:"flex",
    textAlign:"center",
    alignItem:"center",
    width:"100%",
    height:"70px",
    backgroundColor:" #192133"
  }
  const header={
    marginLeft:"100px",
    color:"#fff",
    padding:"25px 20px",
    textDecoration:"none"
  }
  
  const img1="https://i.pinimg.com/564x/c5/47/01/c547018e8d55bb0d712f01f086e6c1b8.jpg"
  const img2="https://img.freepik.com/premium-vector/cute-little-girl-hugging-bunny-illustration_102385-455.jpg?w=2000"
  const img3="https://pbs.twimg.com/media/Eq0iI-yXIAMVatK.jpg" 
  const img4="https://i.pinimg.com/originals/2e/3a/fd/2e3afdc54ad1bbba2faa28d9259a0377.jpg"
  const img5="https://i.pinimg.com/originals/c8/0d/1b/c80d1bda0da62d2b8aeda65ada57d109.jpg"
  const img6="https://i.pinimg.com/originals/fe/0f/7d/fe0f7dfb9fc55ea909a99d522f482c94.jpg"
  const img7="https://i.pinimg.com/originals/e8/41/e2/e841e2ba4f3a2ea377c27003ad37c9e4.jpg" 
  const img8="https://i.pinimg.com/originals/08/c4/5e/08c45e81e82033a7bafa3728575aebd5.jpg"
  return (
    <>
    <div className='toppart' style={toppart}>
      <a href='' className='header' style={header}>Home</a>
      <a href='' className='header' style={header}>About</a>
      <a href='' className='header' style={header}>library</a>
      <a href='' className='header' style={header}>Gallery</a>
    </div>
    <h1 className='heading' style={heading}>This is my library</h1>
    <div className='library' style={library}>
      <img className='image' style={image} src={img1}
      />
      <img className='image' style={image} src= {img2} />
      <img className='image' style={image} src={img3}
       />
      <img className='image' style={image} src={img4}  />
      <img className='image' style={image} src={img5}  />
      <img className='image' style={image} src={img6}  />
      <img className='image' style={image} src={img7} />
      <img className='image' style={image} src={img8}  />
    </div>
    </>
  );
}

export default App;
