import React from "react"
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const CustomNavbar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="light">
                <b><Navbar.Brand href="/" style={{ color: "white" }}>Community</Navbar.Brand></b>
                <Nav className="mr-auto">
                    <Nav.Link href="/login" style={{ color: "white" }}>Login</Nav.Link>
                    <Nav.Link href="/signup" style={{ color: "white" }}>Sign Up</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
};

export default CustomNavbar;