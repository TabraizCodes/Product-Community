import UserServices from "../Services/UserServices";



class SignupHandler {

    addNewUser(newUser, history) {
        UserServices.userExists(newUser.email).then((res) => {
            if (res.data) {
                alert("Email already exists")
                return "Email already exists"
            }
            if (newUser.password === newUser.cpassword) {
                UserServices.addUser(newUser);
                alert("Signup Sucessful")
                history.push("/login")
            } else {
                alert("Password Mismatch")
            }
        })

    }
}

export default new SignupHandler();