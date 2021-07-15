import React from "react"
import Navbar from "../components/navbar"
import "../styling/stylesheet.css"

const Home = () => {
    return (
        <div>
            <Navbar />

            <div className="intro">
                <h1><b>THE COMMUNITY</b></h1>
                <h6>Find Solutions,Ask Question,Share Ideas</h6>
                <p>Connect with Users across the world.</p>
            </div>
        </div>
    )
};

export default Home;