import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function Ped() {
    return (
        <div id="pedigree" className="gradient">
            <Container className="text-center d-flex">
                <Row className="mt-5">
                    <Col>
                        <div className="recordText doubleSpace">
                            <h2 className="mb-4 speed2 sans fs-1"><span className="bolder">SHANCELOT</span> (SHANGHAI BOBBY - TRUE KISS, BY IS IT TRUE)</h2>
                            <p className="text-start px-5 pt-2 mx-5 fs-5">By Champion 2-Year-Old Colt Shanghai Bobby, Shancelot is one of four stakes horses for the stakes-winning mare True Kiss.  That mare is a half-sister to Grade 1 winner Silver Max and a three-quarter sister to Grade 1 winner and successful sire Yes It's True.</p>
                            <button className="pastBTN px-5 py-4 mt-4 sans d-none d-xl-inline">
                                <div className="px-5 py-1">
                                    PEDIGREE
                                </div>
                            </button>
                            <div className="text-center d-block d-xl-none">
                                <button className="pastBTN sans px-2 py-2">
                                    <div className="">
                                        PEDIGREE
                                    </div>
                                </button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
