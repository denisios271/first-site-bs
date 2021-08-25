import React from 'react';
import { Nav, Navbar, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';


export function NaviBar(){

    return (
    <>
        <Navbar collapseOnSelect expand ="lg" bg="dark" variant="dark" >
            <Navbar.Brand className="ms-4">WebDev Blog</Navbar.Brand>
            <Navbar.Toggle aria-controls = "responsive-navbar-nav" />
            <Navbar.Collapse id = "responsive - navbar-nav" >
                <Nav className ="mx-auto">
                    <Nav.Link as = {Link} to="/">Home</Nav.Link>
                    <Nav.Link as = {Link}to="/users">Users </Nav.Link>
                    <Nav.Link as = {Link} to="/about">About </Nav.Link>
                </Nav>
                <Nav>
                    <Button variant ="primary" className = "me-2" > Log In</Button>
                    <Button variant ="primary" className = "me-2"  > Sign out</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>
)}