import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
// import { Twitter } from "./images/twitterLogo.svg"


export default function Past() {
    return (
        <div>
            <div id="past" className="gradient2">
                <Row className="pt-5">
                    <Col className="ps-5">
                        <h2 className="pt-5 ps-5">6: 3-2-1 | $624,300</h2>
                    </Col>
                    <Col className="ms-auto text-end">
                        <button className="pastBTN px-5 py-4">PAST PERFORMANCES</button>

                    </Col>

                </Row>
                <table frame="true" className="border frame solid">
                    <tbody>
                        <tr>
                            <td className="wps">
                                1st
                            </td>
                            <td>
                                <p><strong>Amsterdam (G2)</strong> at Saratoga by 12 1/2 Lengths, 121 Beyer, setting a stakes record & nearly shattering Quality Road's track record for 6.5 furlongs.</p>
                                <p><strong>AOC</strong> at Monmouth by 6 1/4 Lengths, _ _ _ Beyer</p>
                                <p><strong>MSW</strong> at Gulfstream Park defeating Grade 1 winner Bodexpress</p>
                            </td>
                        </tr>
                        <tr>
                            <td className="wps">
                                2nd
                            </td>
                            <td>
                                <p><strong>Santa Anita Sprint (G1)</strong> at Santa Anita by a nose to multiple Grade 1 winner Omaha Beach, _ _ _ Beyer</p>
                                <p><strong>Breeders' Cup Spring (G1)</strong> at Santa Anita by a 1 1/4 lengths to champion Mitole, _ _ _ Beyer</p>
                            </td>
                        </tr>
                        <tr>
                            <td className="wps">
                                3rd
                            </td>
                            <td>
                                <p><strong>H. Allen Jerkens (G1)</strong> at Saratoga by a head to Grade 1 winners Mind Control & Hog Creek Hustle, _ _ _ Beyer</p>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>

        </div>
    )
}
