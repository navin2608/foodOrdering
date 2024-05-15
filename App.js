import React from "react";
import ReactDOM from "react-dom";

const Header=()=>{
    return (
        <div className="header">
        <div className="logo-container">
            <img className="logo" src="data:image/png;base64,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"></img>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li> Contact Us</li>
                <li> Cart</li>
            </ul>
        </div>
        </div>
    )
}

const AppLayout=()=>{
    return (
        <div className="app">
          
            <Header />
        </div>
    )
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)