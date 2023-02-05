import { useState } from "react";
import {Link} from "react-router-dom"
export const Title=() =>{
    return(
        <a href ="/">
       <img className="logo"  alt="logo" src="https://i.pngimg.me/thumb/f/720/comvecteezy583808.jpg"/>
       </a>
    );
}
// const LoggedinUser=()=>{
//     return true;
// }
const Header=() =>{
    const [isLoggedin, setisLoggedin]= useState(true)
    return(
        <>
        <div className="header">
        <Title/>
        <h1 className="title">Grace SeaFoods</h1>
        <div className="nav-items">
            <ul>
           <li><Link to="/">Home</Link></li>
           <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
            <li>cart</li>
            <li>
                <div>
            {
                isLoggedin? <button className="login" onClick={()=>setisLoggedin(false)}>Login</button>:
                    <button className="login" onClick={()=>setisLoggedin(true)}>Logout</button>}
            </div>

                </li>
            </ul>
           
        </div>
        </div>
        </>
    );
}
export default Header;
