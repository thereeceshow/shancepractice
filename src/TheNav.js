import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import Twitter from './images/twitterLogo.svg'

export default function TheNav() {
    return (
        <div className="px-5 pt-3 sans">
            <Navbar collapseOnSelect expand="lg" bg="bg-transparent" variant="dark">
                <Container fluid>
                    <Navbar.Brand className="fs-4" href="#header"><strong><span className="d-none d-xl-block">NEW FOR 2021:</span> $7,500 LFSN</strong></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="bluetext">
                        <Nav className="ms-auto fs-5">
                            <Nav.Link href="#pedigree">PEDIGREE</Nav.Link>
                            <Nav.Link href="#past">PAST PERFORMANCES</Nav.Link>
                            <Nav.Link href="https://www.google.com/search?q=truenicks" target="_blank">TRUENICKS</Nav.Link>
                            <Nav.Link href="https://twitter.com/?lang=en" target="_blank" className="">
                                <img className="" id="twitter" src={Twitter} />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}
