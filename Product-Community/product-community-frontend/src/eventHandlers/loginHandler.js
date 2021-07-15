import React from "react"
import UserServices from "../Services/UserServices"
import { getUserDetails } from "../redux/actions/projectActions"
import { connect } from 'react-redux'



class LoginHandler extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            msg: "",
            user: "",
            article: []
        }
    }

    changeHandler = (event, fieldName) => {
        this.setState({
            [fieldName]: event.target.value
        })
    }

    submitHandler = (event) => {
        const userLoginInfo = {
            email: this.state.email,
            password: this.state.password,
            firstname: this.state.firstname
        }
        event.preventDefault()

        UserServices.getUserAuth(userLoginInfo.email, userLoginInfo.password).then((res) => {
            if (res.data != null && res.data.password == userLoginInfo.password) {
                this.setState({
                    user: res.data.firstName + " " + res.data.lastName
                })
                this.props.getUserDetails(this.state.user);
                localStorage.setItem('user', this.state.user)
                localStorage.setItem('email', res.data.email)

                this.props.history.push({
                    pathname: "/dashboard",
                })


            } else {
                this.setState({
                    msg: "Invalid Details"
                })
            }

        }).catch((err) => {
            this.setState({
                msg: "Email Does'not Exists Signup Instead"
            })
        })
    }

    render() {

        return (
            <div className="form-container">
                <div className="error-msg">
                    <h6>{this.state.msg}</h6>
                </div>
                <form onSubmit={(event) => this.submitHandler(event)}>
                    Email: <input type="Email" name="email" onChange={(event) => this.changeHandler(event, "email")} required /><br />
                    Password: <input type="Password" name="pass" onChange={(event) => this.changeHandler(event, "password")} required /><br /><br />
                    <input type="submit" value="Login" />
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = {
    getUserDetails,
}

export default connect(null, mapDispatchToProps)(LoginHandler);