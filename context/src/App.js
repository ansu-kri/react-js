import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const initData=[
  {id:1,label:"noodles", price:100, quantity:1},
  {id:2,label:"biryani",price:200,quantity:3},
  {id:3,label:"chips",price:150,quantity:5}
];

const LabelPrice=({label,price})=>{
  return(
    <div
    style={{
      border:"1px solid #fff",
      padding:"7px",
      margin:"7px",
      width:"80%",
      display:"flex",
      alignItems:"center",
      justifyContent:"space-around",
      background:"blue"
    }}
    >
    <h3>{label}</h3>
    <h3>INR : {price}</h3>

    </div>
  )
}

const Quantity=({id,quantity,handleDataChange})=>{
  return(
    <div
    style={{
      display:"flex",
      justifyContent:"center",
      width:"15%",
      padding:"24px",
      background:"green"
    }}
    >
    <Button btnText="-" onClick={()=>handleDataChange(id,-1)} />
    <div style={{
      padding:"2px",
    }}>{quantity}</div>
    <Button btnText="+" onClick={()=>handleDataChange(id,1)}>+</Button>
    </div>
  )
}

const Button=({btnText,onClick})=>{
  return(
    <button
    style={{
      padding:"8px",
      color:"white",
      background:"black",
      border:"none"
    }}
    onClick={onClick}
    >
      {btnText}
    </button>
  )
}
const CartItem =({id,label,price,quantity,handleDataChange})=>{
  return(
    <div
    style={{
      border:"1px solid #ffffff",
      padding:"8px",
      margin:"8px",
      display:"flex",
      alignItems:"center",
      justifyContent:"space-between",
      background:"fef8ff"
    }}>
      <LabelPrice label={label}price={price}/>
      <Quantity
      id={id}
      quantity={quantity}
      handleDataChange={handleDataChange}
      ></Quantity>
    </div>
  )
}

const CartContainer =()=>{
  const [data,setData]=useState(initData);

  const handleDataChange=(id, value)=>{
    const updateData=data.map((item)=>
    item.id===id?{...item,quantity:item.quantity+value}:item
    );
    setData(updateData);
}
return(
  <div style={{
    background:"pink",
  }}>
    {data.map((item)=>(
      <CartItem key={item.id}{...item} handleDataChange={handleDataChange}/>
    ))}
  </div>
)
};

function App() {
  return (
    <div className="App">
      <CartContainer />
    </div>
  );
}


export default App;
