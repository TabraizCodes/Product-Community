import React from "react"
import Navbar from "../components/navbar"
import { SignupForm } from "../components/form"
import "../styling/stylesheet.css"

const Signup = () => {
    return (
        <div>
            <Navbar />
            <h3>Registration</h3>
            <SignupForm />
        </div>
    )
};

export default Signup;