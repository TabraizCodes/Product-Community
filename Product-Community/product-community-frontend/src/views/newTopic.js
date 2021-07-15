import React from "react"
import DashboardNavbar from "../components/dasboardNavbar"
import { NewTopicForm } from "../components/form"
import "../styling/stylesheet.css"

const NewTopic = () => {

    return (
        <div>
            <DashboardNavbar />
            <h3>Start a New Topic</h3>
            <NewTopicForm />
        </div>
    )
};

export default NewTopic;