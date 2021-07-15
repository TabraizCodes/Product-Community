import React, { useState } from "react"
import DashboardNavbar from "../components/dasboardNavbar"
import "../styling/stylesheet.css"
import poster from "../images/poster.jpg"
import ArticleDisplay from "../components/ArticleDisplay"
import { useHistory } from "react-router"


const Dashboard = () => {
    const history = useHistory();
    const [searchText, setSearchText] = useState("");

    const updateSearchText = (e) => {
        setSearchText(e.target.value);

    };

    const submitHandler = (e) => {

        const page = document.body.innerHTML;
        document.body.innerHTML = page.replace(new RegExp(searchText, "gi"), (match) =>
            `<mark style="background-color:black;color:white;">${match}</mark>`)

    }

    return (
        <div>
            <DashboardNavbar />
            <div className="poster">
                <img className="posterImg" src={poster} alt="" />
                <div className="centered">
                    <h4>Search Help Articles  </h4>
                    <form onSubmit={submitHandler}>
                        <input type="text" name="searchText" value={searchText} onChange={updateSearchText} required />
                        <input type="submit" value="Search" />
                    </form>

                </div>
                <div className="new-topic">

                </div>
            </div>
            <h4 className="labels">Timeline</h4>
            <ArticleDisplay history={history} />
        </div>
    )
}

export default Dashboard;