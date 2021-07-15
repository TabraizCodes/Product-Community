import React from "react"
import Navbar from "../components/navbar"
import "../styling/stylesheet.css"
import LoginHandler from "../eventHandlers/loginHandler";
import { useHistory } from "react-router";

const Login = () => {

    let history = useHistory();

    return (
        <div>
            <Navbar />
            <h3>Login</h3>
            <LoginHandler history={history} />
        </div>
    )
};

export default Login;