import React from "react";
import "../css/psignup.css";

const Psignup = () => {
    return (
        <div className="signup" id="psignup">
                <div className="psignup-content">
                    <h1>PATIENT SIGNUP</h1>

                    <div className="input-div">
                        <input type="text" placeholder="Enter username" />
                        <br />
                        <input type="password" placeholder="Enter password" />
                        <br />
                        <input type="email" placeholder="Enter email" />
                    </div>

                    <div className="summit-btn">
                        <input type="submit" value="signup" />
                    </div>

                    <div className="login-link">
                        <span>Back to login page <a href="/Plogin">Login</a></span>
                    </div>
                </div>
        </div>
    )
}
export default Psignup;