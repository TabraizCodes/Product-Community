import React from "react";
import DashboardNavbar from "../components/dasboardNavbar"
import ArticleServices from "../Services/ArticleServices";
import "../styling/stylesheet.css"

class Model extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      data: []
    }
  }

  componentDidMount() {
    ArticleServices.getComments(this.props.location.state.id).then((res) => {
      this.setState({
        data: res.data
      })
    })
  }
  render() {
    return (
      <div>
        <DashboardNavbar />
        <div className="model">
          <div className="posted-by"> <h6>Posted By: {this.props.location.state.postedBy}</h6></div>
          <h6>  Subject: {this.props.location.state.subject}</h6>
          <h6>Product: {this.props.location.state.product}</h6>
          <h6 >  content: {this.props.location.state.content}</h6>
        </div>
        <h4>Comments</h4>
        {
          this.state.data.map((articleData, index) =>
            <div className="card-comment" key={index}>
              <div >
                <h6 className="posted-by">Commented By: {articleData.posterName}</h6>
                <p>{articleData.comments}</p>
              </div>
            </div>
          )
        }

      </div>
    )
  }
}

export default Model;