import { Fishlistapi } from "./Fishlistapi";
import Fishtypes from "./Fishtypes";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


function filterData(searchText,allfishlist){
    return allfishlist.filter((f)=> f.name?.toLowerCase()?.includes(searchText));

}


const Body =()=>{
   const[filteredFish , setfilteredFish]= useState();
    const [searchText , setSearchText]=useState("");
    const [searchButton ,setsearchButton ]= useState("true"); 
    const [allfishlist, setallfishlist ]=useState()

  useEffect(()=>{
   // fetch("https://api.tendercuts.in/catalog/product/?store_id=1").then((result)=> result.json()).then((result)=> setfishlist(result[0].products[1]));
getFish();
  },[])
  async function getFish() {
    const data = await fetch(
      "https://api.tendercuts.in/catalog/product/?store_id=1"
    );
    const json = await data.json();
    console.log(json[2]?.products);
    // Optional Chaining
    setallfishlist(json[5]?.products);
    setfilteredFish(json[5]?.products)
    // setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    // setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
 if (!allfishlist) return null
   return ((allfishlist?.length == 0)?(< Shimmer/>):(   
   <>
    <div className=" search-bar">
        <input className="search" type="text" 
                value={searchText} 
                onChange={(e)=> setSearchText(e.target.value)}
                placeholder="Search Fish here"/>
         <button className="search-btn" 
                onClick={()=>{
                    const data= filterData(searchText,allfishlist);
                    setfilteredFish(data);
                }} 
                >🔍</button> 
             
        
    </div>
    <div className="fish-list">
        {filteredFish.map((fish,entity_id)=>{
            return(
              <Link to={"/fishDetail/"+ entity_id} key={entity_id} >
              <Fishtypes {...fish} key={entity_id}/>
              </Link>)
              

        })}
   
    </div>
   </>
   ))
}
export default Body;