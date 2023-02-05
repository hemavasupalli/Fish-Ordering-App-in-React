import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import Fishtypes from "./Fishtypes";
const FishDetails =()=>{
    const {fid} = useParams();
 const [fishDetail ,setfishDetail ]= useState();
    useEffect(()=>{
        // fetch("https://api.tendercuts.in/catalog/product/?store_id=1").then((result)=> result.json()).then((result)=> setfishlist(result[0].products[1]));
     getFishDetail();
  
       },[])
       async function getFishDetail() {
         const data = await fetch(
           "https://api.tendercuts.in/catalog/product/?store_id=1"
         );
         const json = await data.json();
         //console.log(json[5]?.products[1]);
         // Optional Chaining
         setfishDetail((json[5]?.products));
         console.log(json[5]?.products)?.map((e)=>{return e.name});
       
       }
   
    return (
        <div className="fish-detail">
               <h1 className="fishName">{fishDetail?.[fid].name}</h1> 
               <div className="fishDesc">{fishDetail?.[fid].short_description}</div>
               <div className="details">
                    <img className="fishImg" src={fishDetail?.[fid].thumb}/>
                    <div className="fishPrice"> Price : {fishDetail?.[fid].price}</div>
                     <div className="fishquantity">Quantity : {fishDetail?.[fid].weight_from} - {fishDetail?.[fid].weight_to} {fishDetail?.[fid].weight_label} </div>
                </div>
           

        </div>
    )
}
export default FishDetails;