import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import logo from "/home/mahmoud/ad-BTEC-assignment/ad-frontend/src/assets/logo.png";


class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Health and Drug pharmacy
                    </Navbar.Brand>
                </Container>
            </Navbar>
        )
    }
}

export default Header;