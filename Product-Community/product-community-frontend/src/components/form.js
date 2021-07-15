import React, { useState } from "react"
import SignupHandler from "../eventHandlers/signUpHandler"
import "../styling/stylesheet.css"
import { useHistory } from "react-router-dom"
import ArticleServices from "../Services/ArticleServices"

export const SignupForm = () => {

    let history = useHistory();
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [msg, setMsg] = useState("");

    const updateEmail = (e) => {
        setEmail(e.target.value);
    }
    const updateFirstName = (e) => {
        setFirstName(e.target.value);
    }
    const updatLastName = (e) => {
        setLastName(e.target.value);
    }
    const updatePassword = (e) => {
        setPassword(e.target.value);
    }
    const updateConfirmPassword = (e) => {
        setCpassword(e.target.value);
    }

    const addUser = (e) => {
        e.preventDefault();
        let user = { firstName: firstName, lastName: lastName, email: email, password: password, cpassword: cpassword };
        let errMsg = SignupHandler.addNewUser(user, history);
        console.log({errMsg})
        setMsg(errMsg);
    }

    return (
        <div className="form-container">
            <div className="error-msg">
                <h6>{msg}</h6>
            </div>
            <form onSubmit={addUser}>
                Email: <input type="Email" name="email" value={email} onChange={updateEmail} required /><br />
                First Name: <input type="text" name="firstName" value={firstName} onChange={updateFirstName} required /><br />
                Last Name: <input type="text" name="lastName" value={lastName} onChange={updatLastName} required /><br />
                Password: <input type="Password" name="pass" value={password} onChange={updatePassword} required /><br />
                Confirm Password: <input type="Password" name="cpass" value={cpassword} onChange={updateConfirmPassword} required /><br /><br />
                <input type="submit" value="Sign Up" />
            </form>
        </div>
    )
}

export const NewTopicForm = () => {

    const [subject, setSubject] = useState("");
    const [product, setProduct] = useState("");
    const [content, setContent] = useState("");
    const [msg, setMsg] = useState("");
    let history = useHistory();


    const updateSubject = (e) => {
        setSubject(e.target.value);

    };
    const updateProduct = (e) => {
        setProduct(e.target.value)
    };
    const updateContent = (e) => {
        setContent(e.target.value)
    };

    const addArticle = e => {
        e.preventDefault();
        if (product == "") {
            setMsg("Please Select a Product")
        } else {

            const userDetails = {
                email: localStorage.getItem('email'),
            }

            if (userDetails.email === null) {
                setMsg("You must Login first")
            } else {
                let article = { subject: subject, product: product, content: content, user: userDetails }
                ArticleServices.addNewArticle(article);

                history.push("/dashboard")
                setMsg("")

            }


        }

    };

    return (
        <div className="form-container">
            <div className="error-msg">
                <h6>{msg}</h6>
            </div>
            <form onSubmit={addArticle}>
                Subject: <input type="text" name="subject" value={subject} onChange={updateSubject} required /><br /><br />
                Product: <br />
                <select name="product" value={product} onChange={updateProduct} >
                    <option value="" >Select a Product</option>
                    <option value="Airpods" >Airpods</option>
                    <option value="Iphone">Iphone</option>
                    <option value="MacBook">MacBook</option>
                    <option value="AirPlay">AirPlay</option>
                </select><br /><br />

                Body:<br />
                <textarea rows="10" name="content" value={content} onChange={updateContent} required /><br />
                <input type="submit" value="Post" />
            </form>
        </div>
    )
}