import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from './views/home';
import Login from "./views/login";
import Signup from "./views/signup";
import dashboard from "./views/dashboard"
import NewTopic from "./views/newTopic";
import { Provider } from "react-redux"
import store from "./redux/store";
import Model from "./views/model";
import Profile from "./views/profile";

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={dashboard} />
            <Route path="/newTopic" component={NewTopic} />
            <Route path="/model" component={Model} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </BrowserRouter>
      </Provider>


    )
  }
}

export default App
