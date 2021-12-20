import React from "react";
import {Col, Row} from "antd";
import './style.css'
import {FaFacebook, FaTwitter, FaLinkedin} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

const CustomFooter = () => {
    return(
        <footer style={{ background: '#1B1C1F'}}>
            <Row className="footerContainer">
                <Col xl={4} md={4} xs={24}>

                </Col>
                <Col xl={6} md={6} xs={24}>
                    <div className="aboutSection">
                        <div className="footerLogoContainer">
                            <img src='https://chex.ai/wp-content/themes/chex/assets/images/logo.png' alt="chex" style={{height: '50px', width: '150px'}}/>
                        </div>
                        <p className="footerAboutDescription">
                            Chex.<span style={{color: '#FF7A00'}}>AI </span>is a licensed vehicle inspection solution. Our automated platform simplifies and expedites the process for driver acquisition.
                        </p>
                    </div>
                </Col>
                <Col xl={4} md={4} xs={24}>
                    <div className="menuContainer">
                        <h6 className="headingFooter">
                            Menu
                        </h6>

                        <ul className="footerMenuList">
                            <li>
                                <a href="">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Uber Inspections
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Lyft Inspections
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Contact us
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col xl={4} md={4} xs={24}>
                    <div className="ContactContainer">


                        <h6 className="headingFooter">
                            Contact Us
                        </h6>
                        <div>

                            <h6 className="textFooter">
                                <AiOutlinePhone size={24} color="#FFF" style={{marginRight:10,marginTop:0,}} />

                                (415) 234-3496

                            </h6>
                            <h6 className="textFooter">
                                <AiOutlineMail size={24} color="#FFF" style={{marginRight:10,marginTop:0,}} />

                                support@chex.ai

                            </h6>
                        </div>
                    </div>
                </Col>
                <Col xl={6} md={6} xs={24}>
                    <div className="footerLinks">
                        <div className="iconsContainer">
                            <a href="">
                                <FaLinkedin size={30} color="rgba(98, 102, 112, 1)" style={{marginRight:10,marginTop:0,}} />
                            </a>
                            <a href="">
                                <FaFacebook size={30} color="rgba(98, 102, 112, 1)" style={{marginRight:10,marginTop:0,}} />
                            </a>
                            <a href="">
                                <FaTwitter size={30} color="rgba(98, 102, 112, 1)" style={{marginRight:10,marginTop:0,}} />
                            </a>

                        </div>
                        {/*<div className="ss">*/}
                        <span>
            <Link to="/termsAndPolicy" style={{color:'white'}}>
                Terms of use
            </Link>
                   </span>
                        <span>
            <Link to="/termsAndPolicy" style={{color:'white'}}>
                Privacy Policy
            </Link>
                </span>

                        {/*</div>*/}
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xl={3} md={3} xs={24}>

                </Col>
                <Col xl={4} md={4} xs={24}>
                    <div className="copyrightText">
                        <p style={{color:'#808389'}}>
                            © 2020 CHEX.AI
                        </p>
                    </div>
                </Col>
            </Row>
        </footer>
    )
}

export default CustomFooter
