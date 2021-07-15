import React from "react"
import ArticleServices from "../Services/ArticleServices";
import { getAllUserArticles } from "../redux/actions/projectActions"
import { connect } from "react-redux";
import "../styling/stylesheet.css"

class ArticleDisplay extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            article: [],
            comments:"",
        }
    }
    componentDidMount() {
        ArticleServices.getAllArticles().then((res) => {
            this.setState({
                article: res.data
            })
            this.props.getAllUserArticles(this.state.article)
            localStorage.setItem("allArticles", this.state.article)
        })
    }

    changeHandler = (event, fieldName) => {
        this.setState({
            [fieldName]: event.target.value
        })
    }
    submitHandler = (event,data) => {
        let id = data.id
        let user = localStorage.getItem("user")
        ArticleServices.addNewComment({comments:this.state.comments,posterName:user,articles:{id:data.id}})
    }
    render() {
        return (
            <div>
                {this.state.article.map((data, index) =>
                    <div className="card" key={index}>
                        <div className="posted-by"> <h6>Posted By: {data.user.firstName + " " + data.user.lastName}</h6></div>
                        <h6>  Subject: {data.subject}</h6>
                        <h6>Product: {data.product}</h6>
                        <h6 > Content: {data.content}</h6>
                        <div className="comment" > <button onClick={() => {
                            this.props.history.push({
                                pathname: "/model",
                                state: {
                                    id: data.id, subject: data.subject, product: data.product,
                                    content: data.content, postedBy: data.user.firstName + " " + data.user.lastName
                                }
                            })
                        }}>Comments</button> </div>

                        <div className="commentForm">
                            <form onSubmit={(event,articleData) => this.submitHandler(event,data)}>
                                <input type="text" name="comment" onChange={(event) => this.changeHandler(event, "comments")} placeholder="Write a Comment" required />
                                <input type="submit" value="Post" />
                            </form>
                        </div>


                    </div>)}

            </div>
        )
    }
}

export default connect(null, { getAllUserArticles })(ArticleDisplay);