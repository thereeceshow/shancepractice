import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import TheNav from './TheNav';
import Shancelot from './images/Shancelot-HeaderName.svg'

export default function Header() {
    return (
        <div id="header">
            <TheNav />
            <Container className="title">
                <h2 className="text-center text-white mb-4 sans fs-1"><strong>RECORD-BREAKING SPRINTER</strong></h2>
                <img src={Shancelot} />
                <div className="d-flex">
                    <div className="arrow down mx-auto mt-4" />

                </div>
            </Container>
            <Container fluid className="text-white bottom pb-4 px-5">
                <Row align-items-end className="align-items-end mb-3 fs-5">
                    <Col>
                        <span className="sans test bluetext">STANDING AT BUCK POND FARM</span>
                    </Col>
                    <Col>
                        <nav className="text-end">Inquires to Doug Arnold:(859)873-4081</nav>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}