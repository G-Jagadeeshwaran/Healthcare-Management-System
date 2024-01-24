import React from "react";
import "../Home page/home.css";
import pimg from '../Assets/patientimg.svg';
import dimg from '../Assets/docimg.jpg';

const Home = () => {
    return (
        <div className="home" id="Home">

            <div className="home-head">
                <h1>HEALTH CARE MANAGEMENT SYSTEM</h1>
            </div>

            <div className="card">
                <img src={pimg} alt="" />
                <p>Patient login</p>

                <div className="l-btn">
                    <a href="/Plogin">Login</a>
                </div>
            </div>

            <div className="card">
                <img src={dimg} className="docimg" alt="" />
                <p>Doctor login</p>
                <div className="l-btn">
                    <a href="/Dlogin">Login</a>
                </div>
            </div>

        </div>
    )
}
export default Home;