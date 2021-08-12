import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function Record() {
    return (
        <div id="record" className="gradient">
            <Container className="text-center d-flex">
                <Row>
                    <Col>
                    <div className="recordText doubleSpace">
                        <h2 className="mb-4">RECORD-BREAKING SPEED</h2>
                        <p className="text-start"><strong>Shancelot's record-breaking 121 Beyer Speed Figure is the fastest Beyer EVER posted by a 3-year-old sprinter.</strong> Overall for 3-year-olds, his figure is bested only by Arrogate in the 2015 Travers at ten furlongs (122) and Holy Bull in the 1994 Met Mile at eigher furlongs (122 by 3-year-old colts.</p>
                    </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
