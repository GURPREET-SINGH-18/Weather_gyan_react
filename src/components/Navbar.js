import React from 'react';
import {Navbar,Container} from 'react-bootstrap';
import img from '../assets/logo.png'
const MyNav = () => {

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">
                <img
                alt=""
                src={img}
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
