import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


class NavBar extends Component {
    render() {
        return (
            < Navbar bg="primary" variant="dark" >
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#Home">Home</Nav.Link>
                            <Nav.Link href="#link">About Us</Nav.Link>
                            <NavDropdown title="Branches" id="basic-nav-dropdown">
                                {this.props.branchesArray.map(branch => {
                                    return (
                                        <NavDropdown.Item href="">{branch.name.replace(/([A-Z])/g, ' $1').trim()}</NavDropdown.Item>
                                    );
                                })}
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        )
    }
}

export default NavBar;