// import { Button } from 'bootstrap'
import { Row, Button, Container, Col } from 'react-bootstrap'
import React from 'react'

export default function Conf() {
    return (
        <div>
            <div id="confirmation">
            </div>
            <div className="gradient2 p40 relative">
                <div className="bg-white brilliant billboard vertical-center center">
                    <Container className="px-5">
                        <Row>
                            <Col className="mt-5">
                                <h2 className="fs-1 mt-4">
                                    <strong>BRILLIANT SPRINTER SHANCELOT RETIRES TO STUD IN KENTUCKY</strong>
                                </h2>
                                <p className="mt-4 fs-5">
                                    A history-making sprinter when winning the Grade 2 Amsterdam Stakes wiht a 121 Beyer Speed Figure - the highest Beyer by a 3-year-old sprinter in history - Shancelot has been retired to Buck Pond Farm, Crawford Farms Racing announced January 11th.  He will stand for a fee of $7,500 in 2021...
                                </p>

                            </Col>
                        </Row>
                        <Row className="">
                            <Col className="">
                                <Button className="readmore px-5 py-4 sans">
                                    <strong>
                                        READ MORE
                                    </strong>
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </div>

            </div>
            <div id="quote1">
                <Container className="text-center">
                    <div className="p50">

                        <h2 className="text-white tripleSpace">                            
                                "He is an absolutely gorgeous horse.  He has limitless ability.  He was mentally talented with a great disposition.  I'm looking forward to seeing his offspring."
                        </h2>
                        <h3 className="bluetext spaced sans mt-4">TRAINER STEVE ASMUSSEN</h3>
                    </div>

                </Container>

            </div>
        </div>
    )
}
