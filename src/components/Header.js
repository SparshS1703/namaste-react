import { LOGO_URL } from "../utils/constants";
import { useState ,useContext} from "react";
import {Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header=()=>{
    
    const [btnName,setBtnName]=useState("Login");
    const data=useContext(UserContext);

    const cartItems =useSelector((store)=>store.cart.items);
    // console.log(cartItems);
    



    return (
        
    <div className="flex justify-between bg-pink-100 shadow-lg">
        <div className="logo-container">
            <img className="w-56" src={LOGO_URL}></img>
        </div>
        <div className="flex items-center">
            <ul className="flex p-4 m-4">
                <li><Link to="/" className="px-4">Home</Link></li>
                <li><Link to="/about" className="px-4">About Us</Link></li>
                <li><Link to="/grocery" className="px-4">Grocery</Link></li>
                <li className="px-4">Contact Us</li>
                <li className="px-4"><Link to="/cart" className="px-4">Cart - {cartItems.length}</Link></li>
                <li className="px-4">{data.loggedInUser}</li>
                <button className="login" onClick={()=>{
                    btnName=="Login" ? setBtnName("Logout") : setBtnName("Login")
                }}>{btnName}</button>
            </ul>
        </div>


    </div>
    );
}
export default Header;