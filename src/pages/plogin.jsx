import React from "react";
import "../css/plogin.css"
import Limg from "../assets/news.png";

const Plogin = () => {
    return (
        <div className="login" id="plogin">
                <div className="plogin-content">
                    <h1>PATIENT LOGIN</h1>

                    <div className="input-div">
                        <input type="text" placeholder="Enter username" />
                        <br />
                        <input type="password" placeholder="Enter password" />
                    </div>

                    <div className="summit-btn">
                        <input type="submit" value="Login" />
                    </div>

                    <div className="signup-link">
                        <span>Don't have an account register ? <a href="/Psignup">Signup</a></span>
                    </div>
                </div>
        </div>
    )
}
export default Plogin;