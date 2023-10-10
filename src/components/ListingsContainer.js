import React, {useState, useEffect} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({idata,setLis,lis}) {
      

  return (
    <main>
      <ul className="cards">
        {idata.map((list)=>{return <ListingCard lis={lis} setLis={setLis} key={list.id} list={list}image={list.image} description={list.description} id={list.id} location={list.location}/>})}
      </ul>
    </main>
  );
};

export default ListingsContainer;


// const [idata,setData]=useState([])
// useEffect(()=>{const fetchData=async(()=>{try{const response= await fetch(list) 
//   const data= await response.json() setData(data)}catch(error){console.error("error",error)}}) fetchData()