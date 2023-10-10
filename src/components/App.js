import React, { useState, useEffect }from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [lis,setLis]=useState('http://localhost:6001/listings/')
  const list = 'http://localhost:6001/listings'
  const [idata,setData]=useState([])
  useEffect(()=> {
    const fetchData=async ()=>{
     try {
      const response = await fetch(list); 
      const data= await response.json(); 
      setData(data);
    }catch(error) {
      console.error('error',error);}}
      fetchData();
    })
    

  return (
    <div className="app">
      <Header />
      <ListingsContainer idata={idata} lis={lis} setLis={setLis}/>
    </div>
  );
}

export default App;
