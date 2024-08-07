import { LOGO_URL } from "../../utils/constants";
import {useState} from "react";
import {Link} from "react-router-dom";
import useOnlineState from "../../utils/useOnlineState";
const Header=()=>{
    const [btnNameReact,setBtnNameReact]=useState("Login")
    const  onlineState=useOnlineState();

    return (
        <div className="header">
        <div className="logo-container">
            <img className="logo" src={LOGO_URL}></img>
        </div>
        <div className="nav-items">
            <ul>
                <li>Online: {onlineState?"🟢":"🔴"}
                </li>
                <li >
                    <Link to="/">Home</Link>
                    </li>
                <li >
                    <Link to="/about">About Us</Link>
                        </li>
                <li> 
                    <Link to="/contactus">Contact Us</Link></li>
                <li> Cart</li>
                <button className="login" onClick={()=>
                btnNameReact==="Login"?setBtnNameReact("Logout"):setBtnNameReact("Login")}>{btnNameReact}</button>
                
            </ul>
        </div>
        </div>
    )
}
export default Header;