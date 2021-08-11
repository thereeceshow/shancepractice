import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import Twitter from './images/twitterLogo.svg'

export default function TheNav() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="bg-transparent" variant="dark">
                <Container fluid>
                    <Navbar.Brand href="#home">NEW FOR 2021: $7,500 LFSN</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link>PEDIGREE</Nav.Link>
                            <Nav.Link>PAST PERFORMANCES</Nav.Link>
                            <Nav.Link>TRUENICKS</Nav.Link>
                            <Nav.Link>
                                <img id="twitter" src={Twitter} />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}
