import logo from './logo.svg';
import './App.css';
import { useState, useSyncExternalStore } from 'react';

const initState={
  username:"",
  email:"",
  password:"",
  country:"",
  maritalStatus:false
}


function App() {
  const [formData,setFormData]=useState(initState);
  const[users,setUsers]=useState([]);

  const handleChange=(e)=>{
    // console.log(e.target)
    // console.log(e.target.name);
    // console.log(e.target.value);
    // console.log(e.target.checked);
    // console.log(e.target.type)
    // const value =e.target.type==="checked"? e.target.checked:e.target.value
    // if(e.target.type==="checked"){
    //   value=e.target.checked
    // }
    // else{
    //   value=e.target.value;
    // }
    // setFormData((prevFormData)=>({...prevFormData, [e.target.name]: e.target.value}))
    const {type,checked,value,name}=e.target;
    const inputValue=type==="checked"? checked:value;

    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    setUsers([...users,formData])
    console.log(formData)
  }
  
  const {username,email,password,country,maritalStatus}=formData;

  return (
    <div className="App">
     <form onSubmit={handleSubmit}>
      <h1>FORM</h1>
      <label>
        Username:
         <input 
         name="username" type="text" value={username}
        onChange={handleChange} />
      </label>
      <br/>
      <br/>
      <label>
        Email:
         <input 
         name="email" type="email" value={email}
        onChange={handleChange} />
      </label>
      <br/>
      <br/>
      <label>
        Password:
         <input 
         name="password" type="password" value={password}
        onChange={handleChange} />
      </label>
      <br/>
      <br/>
      <label>
        Country:</label>
      <select name="country" value={country} onChange={handleChange}>
        <option value="in">INDIA</option>
        <option vlaue="usa">USA</option>
        <option value="canada">CANADA</option>
        <option value="america">AMERICA</option>
      </select>
      <br/>
      <br/>
      <label>
        MARITAL STATUS:
        <input type="checkbox" name="maritalStatus" onChange={handleChange} checked={maritalStatus} />
      </label>
      <br/>
      <br/>
      <input type="submit"/>
     </form>
     <br/>
     {
      users.map((user)=>{
        <li key={user.username}>{user.username}</li>
      })
     }
    </div>
  );
}

export default App;
