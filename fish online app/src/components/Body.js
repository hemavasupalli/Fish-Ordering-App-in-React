import { Fishlistapi } from "./Fishlistapi";
import Fishtypes from "./Fishtypes";
import { useState } from "react";


function filterData(searchText,fishlist){
    return fishlist.filter((f)=> f.name.includes(searchText));

}

const Body =()=>{
   
    const [searchText , setSearchText]=useState("");
    const [searchButton ,setsearchButton ]= useState("true"); 
    const [fishlist, setfishlist ]=useState(Fishlistapi)
   return(
    
   <>
    <div className=" search-bar">
        <input className="search" type="text" 
                value={searchText} 
                onChange={(e)=> setSearchText(e.target.value)}
                placeholder="Search Fish here"/>
         <button className="search-btn" 
                onClick={()=>{
                    const data= filterData(searchText,Fishlistapi);
                    setfishlist(data);
                }} 
                >🔍</button>
        
        </div>
    <div className="fish-list">
        {fishlist.map((fish)=>{
            return <Fishtypes  {...fish}/>
        })}
   
    </div>
   </>
   )
}
export default Body;