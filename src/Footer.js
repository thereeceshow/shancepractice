import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Buck from './images/BuckPondLogo_White.svg'
import Silks from './images/CrawfordRacingSilks.svg'
import Ribbon from './images/PinkRibbon.png'

export default function Footer() {
    return (
        <div id="Footer" className="bg-dark text-white px-5">
            <Container fluid className="">
                <Row className="pt-4 px-5">
                    <Col className="">
                        {/* <div className="mt-5"> */}
                        <center>
                            <p className="">STANDING AT</p>
                            <img className="buck" src={Buck} />
                        </center>
                        {/* </div> */}
                    </Col>
                    <Col className="mt-4">
                        <p className="">
                            Inquires to Doug Arnold:
                            <br />
                            (859)873-4081
                        </p>
                        <p>
                            <strong>1055 PAYNES MILL Road<br />
                                VERSAILLES, KENTUCKY 40383</strong>
                        </p>

                    </Col>
                    <Col className="crawford">
                        <div className="vertical-center d-flex text-center">
                            <img className="silks" src={Silks} />
                            <div><p>RACED BY</p><h5>CRAWFORD FARMS RACING</h5></div>
                            <img className="silks" src={Ribbon} />
                        </div>


                    </Col>
                </Row>
            </Container>

        </div>
    )
}
