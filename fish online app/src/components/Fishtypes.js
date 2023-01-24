import { Fishlistapi } from "./Fishlistapi";

const Fishtypes=({thumb ,name ,price})=>
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
