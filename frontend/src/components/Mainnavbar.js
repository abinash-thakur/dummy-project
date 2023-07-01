import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

export default function Mainnavbar() {
    return (
        <Container fluid className='m-0 p-0'>
            <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#">MovieListingApplication</Navbar.Brand>
                </Container>
            </Navbar>
        </Container>
    )
}
