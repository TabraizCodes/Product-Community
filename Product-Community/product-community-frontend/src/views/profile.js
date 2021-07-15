import React from "react"
import DashboardNavbar from "../components/dasboardNavbar"
import "../styling/stylesheet.css"
import UserServices from "../Services/UserServices"
import ArticleServices from "../Services/ArticleServices"
import profileImg from "../images/profileImg.png"


class Profile extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            loggedUserArticles: [],
            userData: ""

        }
    }

    componentDidMount() {
        UserServices.getUser(localStorage.getItem("email")).then((res) => {
            this.setState({
                userData: res.data,
            })
        })

        ArticleServices.getUserArticles(localStorage.getItem("email")).then((res) => {
            this.setState({
                loggedUserArticles: res.data
            })
        })
    }

    render() {
        return (
            <div>
                <DashboardNavbar />
                {
                    <div className="card-profile">
                        <img className="profileposter" src={profileImg} />
                        <h6>First Name: {this.state.userData.firstName}</h6>
                        <h6>Last Name: {this.state.userData.lastName}</h6>
                        <h6>User Email: {this.state.userData.email}</h6>
                    </div>
                }
                <h4 className="labels">My Posts</h4>
                <div>
                    {
                        <div>
                            {
                                this.state.loggedUserArticles.map((data, index) =>
                                    <div className="card" key={index}>
                                        <h6>Subject: {data.subject}</h6>
                                        <h6>Product: {data.product}</h6>
                                        <h6>content: {data.content}</h6>
                                        <div className="comment" > <button onClick={() => {
                                            this.props.history.push({
                                                pathname: "/model",
                                                state: {
                                                    id: data.id, subject: data.subject, product: data.product,
                                                    content: data.content, postedBy: this.state.userData.firstName + " " + this.state.userData.lastName
                                                }
                                            })
                                        }}>Comments</button> </div>
                                    </div>

                                )
                            }

                        </div>

                    }

                </div>

            </div>
        )

    }
}


export default Profile;

