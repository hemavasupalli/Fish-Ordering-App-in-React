import { Fishlistapi } from "./Fishlistapi";

const Fishtypes=({thumb ,name ,price, entity_id})=>
{
  
   return (
     <>
    <div className="fishtypes">
    <img src={thumb}/>
    <div>{name} </div>
    <div> Price : {price}</div>
    </div>

    </>
   )
}
export default Fishtypes;
