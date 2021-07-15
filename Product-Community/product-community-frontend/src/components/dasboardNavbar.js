import React from "react"
import { useSelector } from "react-redux";
import "../styling/stylesheet.css"
import profile from "../images/profile.png"


const DashboardNavbar = (props) => {
    const user = useSelector(state => state.user.user);
    return (
        <div>
            <ul>
                <li><b><a href="/dashboard">Community</a></b></li>
                <li> <a href="/newTopic" >New Topic</a></li>
                <li style={{ float: "right" }}> <img className="profileImg" src={profile} alt="" />
                    <div className="dropdown">
                        <span> {user}</span>
                        <div className="dropdown-content">
                            <p><a href="/profile" >Profile</a></p>
                            <p><a onClick={() => { localStorage.clear() }} href="/login">Sign Out</a></p>
                        </div>
                    </div>
                </li>

            </ul>

        </div>
    )
};

export default DashboardNavbar;