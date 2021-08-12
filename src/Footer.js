import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Buck from './images/BuckPondLogo_White.svg'

export default function Footer() {
    return (
        <div id="Footer" className="bg-dark text-white">
            <Container fluid>
                <Row>
                    <Col className="px-5">
                    <div className="">

                        <p className="text-center">STANDING AT</p>
                        <img className="img-fluid" src={Buck} />

                    </div>
                    </Col>
                    <Col>
                    <p>
                        Inquires to Doug Arnold:
                        <br />
                        (859)873-4081
                    </p>
                    <p>
                        <strong>1055 PAYNES MILL Road<br />
                        VERSAILLES, KENTUCKY 40383</strong>
                    </p>

                    </Col>
                    <Col>


                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}
