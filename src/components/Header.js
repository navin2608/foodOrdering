import { LOGO_URL } from "../../utils/constants";
import {useState} from "react";
import {Link} from "react-router-dom";
import useOnlineState from "../../utils/useOnlineState";
const Header=()=>{
    const [btnNameReact,setBtnNameReact]=useState("Login")
    const  onlineState=useOnlineState();

    return (
        <div className="flex justify-between bg-orange-500 p-4 mt-2 shadow-lg mb-2">
        <div className="logo-container">
            <img className="w-24" src={LOGO_URL}></img>
        </div>
        <div className="flex items-center">
            <ul className="flex " >
                <li className="px-4">Online: {onlineState?"🟢":"🔴"}
                </li>
                <li className="px-4" >
                    <Link to="/">Home</Link>
                    </li>
                <li className="px-4" >
                    <Link to="/about">About Us</Link>
                        </li>
                <li className="px-4"> 
                    <Link to="/contactus">Contact Us</Link></li>
                <li className="px-4"> Cart</li>
                <button className="login" onClick={()=>
                btnNameReact==="Login"?setBtnNameReact("Logout"):setBtnNameReact("Login")}>{btnNameReact}</button>
                
            </ul>
        </div>
        </div>
    )
}
export default Header;