export const Title=() =>{
    return(
        <a href ="/">
       <img className="logo"  alt="logo" src="https://i.pngimg.me/thumb/f/720/comvecteezy583808.jpg"/>
       </a>
    );
}
const Header=() =>{
    return(
        <>
        <div className="header">
        <Title/>
        <h1>Grace SeaFoods</h1>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact us</li>
                <li>Cart</li>
            </ul>

        </div>
        </div>
        </>
    );
}
export default Header;
