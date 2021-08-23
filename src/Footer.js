import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Buck from './images/BuckPondLogo_White.svg'
import Silks from './images/CrawfordRacingSilks.svg'
import Ribbon from './images/PinkRibbon.png'

export default function Footer() {
    return (
        <div className="bg-dark text-white px-5 py-auto">
            <Container fluid className="d-none d-xl-block">
                <Row id="Footer" className="px-5 justify-content-center">
                    <Col className="crawford">
                        <div className="vertical-center">
                            <center>
                                <p className="">STANDING AT</p>
                                <img className="buck" src={Buck} />
                            </center>
                        </div>
                    </Col>
                    <Col className="crawford">
                        <div className="vertical-center doubleSpace">

                            <p className="fs-5">
                                Inquires to Doug Arnold:
                                <br />
                                (859)873-4081
                            </p>
                            <p className="sans fs-5">
                                <strong>1055 PAYNES MILL Road<br />
                                    VERSAILLES, KENTUCKY 40383</strong>
                            </p>
                        </div>

                    </Col>
                    <Col className="crawford">
                        <div className="vertical-center d-flex text-center">
                            <img className="silks" src={Silks} />
                            <div><p>RACED BY</p><h5 className="sans bolder">CRAWFORD FARMS RACING</h5></div>
                            <img className="silks" src={Ribbon} />
                        </div>


                    </Col>
                </Row>
            </Container>
            <Container className="d-xl-none">
                <Row>
                    <div className="py-5">
                        <center>
                            <p className="">STANDING AT</p>
                            <img className="" src={Buck} />
                        </center>
                    </div>
                </Row>
                <Row>
                    <div className="doubleSpace py-5">
                        <center>

                            <p className="fs-5">
                                Inquires to Doug Arnold:
                                <br />
                                (859)873-4081
                            </p>
                            <p className="sans fs-5">
                                <strong>1055 PAYNES MILL Road<br />
                                    VERSAILLES, KENTUCKY 40383</strong>
                            </p>
                        </center>
                    </div>
                </Row>
                <Row>
                    <div className="text-center py-5">
                        <center>
                            <div><p>RACED BY</p><h5 className="sans bolder">CRAWFORD FARMS RACING</h5></div>
                        </center>
                    </div>
                </Row>

            </Container>

        </div>
    )
}
