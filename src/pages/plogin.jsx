import React from "react";
import "../css/plogin.css"

const Plogin = () => {
    return (
        <div className="login" id="loginform">
            <div className="input-div">
                <input type="text" placeholder="Enter username" />
                <br />
                <input type="password" placeholder="Enter password" />
            </div>
            <div className="summit-btn">
                <input type="submit" value="Submit" />
            </div>
        </div>
    )
}
export default Plogin;