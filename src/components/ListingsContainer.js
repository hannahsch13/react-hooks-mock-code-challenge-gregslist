import React, {useState, useEffect} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({list}) {
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
    <main>
      <ul className="cards">
        {idata.map((list)=>{return <ListingCard key={list.id} image={list.image} description={list.description} location={list.location}/>})}
      </ul>
    </main>
  );
};

export default ListingsContainer;


// const [idata,setData]=useState([])
// useEffect(()=>{const fetchData=async(()=>{try{const response= await fetch(list) 
//   const data= await response.json() setData(data)}catch(error){console.error("error",error)}}) fetchData()