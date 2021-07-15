import axios from "axios"
const API_URL = "http://localhost:7001/community";

class UserServices {

    addUser(user) {
        return axios.post(API_URL + "/signup", user);
    }

    userExists(email) {
        return axios.get(API_URL + "/user/" + email);
    }

    getUserAuth(email, password) {
        return axios.get(API_URL + "/login/" + email + "/" + password)
    }

    getUser(email) {
        return axios.get(API_URL + "/details/" + email)
    }

}

export default new UserServices();