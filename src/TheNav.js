import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import Twitter from './images/twitterLogo.svg'

export default function TheNav() {
    return (
        <div className="px-5 pt-3 sans">
            <Navbar collapseOnSelect expand="lg" bg="bg-transparent" variant="dark">
                <Container fluid>
                    <Navbar.Brand className="fs-4" href="#home"><strong>NEW FOR 2021: $7,500 LFSN</strong></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto fs-5">
                            <Nav.Link>PEDIGREE</Nav.Link>
                            <Nav.Link>PAST PERFORMANCES</Nav.Link>
                            <Nav.Link>TRUENICKS</Nav.Link>
                            <Nav.Link className="">
                                <img className="" id="twitter" src={Twitter} />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}
