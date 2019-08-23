import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import logo from "./icons/logo.svg"
import "./Header.css";


const Header: React.FC = () => {
    return (
    <div className = "header">
        <Navbar bg = {"light"} variant = {"light"} fixed= {"top"}>
            <Navbar.Brand href="#home">
                <img
                  src={logo}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
            </Navbar.Brand>
            <Navbar.Brand href="#home">Partify</Navbar.Brand>
            <Nav className = "mr-auto">
                <Nav.Link href="#home">About Us</Nav.Link>
            </Nav>
        </Navbar>
    </div>
    )
}
export default Header;