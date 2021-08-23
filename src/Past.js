import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
// import { Twitter } from "./images/twitterLogo.svg"


export default function Past() {
    return (
        <div>
            <div id="past" className="gradient2">
                <Row className="pt-5 sans">
                    <Col className="ps-5">
                        <h2 className="pt-5 ps-5 bolder">6: 3-2-1 | $624,300</h2>
                    </Col>
                    <Col className="ms-auto text-end d-none d-xl-block">
                        <button className="pastBTN px-5 py-4 bolder">PAST PERFORMANCES</button>

                    </Col>

                </Row>
                <div frame="true" className="border frame solid">
                    <div>
                        <div className="row">
                            <div className="col-12 col-md-3 wps tBorder">
                                1st
                            </div>
                            <div className="col-12 col-md-9 d-flex align-items-center tBorder">
                                <div className="row ps-5">
                                    <div className="col-12 mt-4"><strong>Amsterdam (G2)</strong> at Saratoga by 12 1/2 Lengths, 121 Beyer, setting a stakes record & nearly shattering Quality Road's track record for 6.5 furlongs.</div>
                                    <div className="col-12 mt-4"><strong>AOC</strong> at Monmouth by 6 1/4 Lengths, _ _ _ Beyer</div>
                                    <div className="col-12 mt-4"><strong>MSW</strong> at Gulfstream Park defeating Grade 1 winner Bodexpress</div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-3 wps tBorder">
                                2nd
                            </div>
                            <div className="col-12 col-md-9 d-flex align-items-center tBorder">
                                <div className="row ps-5">
                                    <div className="col-12 mt-4"><strong>Santa Anita Sprint (G1)</strong> at Santa Anita by a nose to multiple Grade 1 winner Omaha Beach, _ _ _ Beyer</div>
                                    <div className="col-12 mt-4"><strong>Breeders' Cup Spring (G1)</strong> at Santa Anita by a 1 1/4 lengths to champion Mitole, _ _ _ Beyer</div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-3 wps tBorder">
                                3rd
                            </div>
                            <div className="col-12 col-md-9 d-flex align-items-center tBorder">
                                <div className="row ps-5">
                                    <div className="col-12 mt-4"><strong>H. Allen Jerkens (G1)</strong> at Saratoga by a head to Grade 1 winners Mind Control & Hog Creek Hustle, _ _ _ Beyer</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
