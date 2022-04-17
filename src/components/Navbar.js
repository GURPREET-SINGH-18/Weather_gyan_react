import React from 'react';
import {Navbar,Container} from 'react-bootstrap';
const MyNav = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">
                <img
                alt=""
                src="/logo.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                />{' '}
            Weather Gyan
            </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default MyNav;
