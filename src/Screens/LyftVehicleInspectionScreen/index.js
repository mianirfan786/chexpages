import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Divider } from 'antd';
import 'antd/dist/antd.css';


import './style.css';
import '../../App.css';
import PricingCard from "../../Components/PricingCard";
import ReviewCard from '../../Components/ReviewCard';
import footerLogo from "../../Assets/footerLogo.png";
import ImgCar from "../../Assets/ImgCar.png";
import CustomNavbar from "../../Components/Navbar";


import { AiOutlineMail, AiOutlinePhone, AiOutlinePlus, AiFillBook } from 'react-icons/ai';
import {GoPlus} from 'react-icons/go';
import {FaFacebook, FaTwitter, FaLinkedin} from 'react-icons/fa';
import Button from "../../Components/Button";
import HomeBadgeOverlapCard from '../../Components/HomeBadgeOverlapCard'
import {CustomFooter} from "../../Components";
import {Carousel} from "@trendyol-js/react-carousel";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
const LyftVehicleInspectionScreen = () => {
    return (
        <div>

            <div className='badge-container' >
                <CustomNavbar/>
                <div className='badge-image-inner-container'>
                    <div className='badge-inner-left'>
                        <p className='badge-main-heading'>Lyft Vehicle Inspection</p>
                        <p className='badge-main-para'>
                            Chex.<span style={{color:'#FF7A00'}}>AI</span> offers an online Lyft inspection through the app. All you need is a phone with a camera
                        </p>
                        <div className="btn_div_banner">


                            <button  className="btn_styling_banner"> Get Started </button>
                        </div>

                    </div>

                </div>
            </div>
            <section>
                <Row>
                    <Col xl={12} md={12} xs={24}>
                        <div className="vehicleIncpectionContainer">
                            <h3>
                                <span style={{color: ' #0d92d7',display:'block'}}>Vehicle Inspection  </span> Requirement for Uber Drivers
                            </h3>
                            <p>
                                Vehicle inspection is a standard requirement for all Uber drivers. There are multiple ways to meet the compliance but the most popular one is going to a mechanic shop which requires appointments and could delay getting certification by a few days.
                            </p>
                            <p>
                                Chex.AI is a modern and advanced solution to meet Uber’s car inspection requirement without having to go to any mechanic. Just simply visit our app via any web browser, upload photos and video clips from your driveway or any convenient location. Its that simple!
                            </p>

                            <ul className="vehicleListContainer">
                                <li>
                                    No appointments to the mechanic shops
                                </li>
                                <li>
                                    Complete inspection at your convenience
                                </li>
                                <li>

                                    Get certified same day
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col xl={12} md={12} xs={24}>
                        <div className="vehicleIncpectionContainerImg">
                            <img src={ImgCar} alt=""/>
                        </div>
                    </Col>
                </Row>
            </section>

            <div className='chexWorks-main-container'>
                <div className='chexwork-inner-container'>
                    {/*<p className='chaxwork-heading'>How Chex<span className='chaxwork-heading-span'>.AI</span> works</p>*/}
                    <Row>
                        <Col xs={24} sm={24} md={12} lg={6} >
                            <div className="chexworks-column" >
                                <img src='https://chex.ai/wp-content/uploads/2021/05/Rectangle-154.png' className='chexwork-img'/>
                                <h3 className='chexwork-image-title'>Sign Up</h3>
                                <p className='chexwork-image-desc'>Click <span className='chexwork-image-getStarted-span'>Get Started
                </span> to access our app and register your vehicle within minutes</p>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={6}>
                            <div className='chexworks-column'>
                                <img src='https://chex.ai/wp-content/uploads/2021/05/Rectangle-1555.png' className='chexwork-img'/>
                                <h3 className='chexwork-image-title'>Complete Inspection</h3>
                                <p className='chexwork-image-desc'>
                                    Follow the instructions for each inspection point within our app and upload photo and video clips.
                                    Once you're ready tap Next key at the bottom of the page</p>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={6} >
                            <div className='chexworks-column'>
                                <img src='https://chex.ai/wp-content/uploads/2021/05/Rectangle-156.png' className='chexwork-img'/>
                                <h3 className='chexwork-image-title'>Complete Payment</h3>
                                <p className='chexwork-image-desc'>
                                    Enter payment details or payment code provided by your ride-sharing company.
                                    <span className='chexwork-image-payment-span'> If you don't pass, your first re-inspection is free</span></p>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={6} >
                            <div className='chexworks-column'>
                                <img src='https://chex.ai/wp-content/uploads/2021/05/Rectangle-155-1.png' className='chexwork-img'/>
                                <h3 className='chexwork-image-title'>Same-day Certification</h3>
                                <p className='chexwork-image-desc'>
                                    All certifications completed within <span className='chexwork-image-getStarted-span'> 4 hours </span> or less.
                                    Downloadable verification in-app</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>


            <section className="pricingSections">
                <Row>
                    <Col>
                        <h3 className="headingPrcing">
                            Pricing
                        </h3>
                        <p className="paragraphPricing">
                            Convenience isn’t the only benefit of using Chex.AI. We offer best pricing for Uber & Lyft Inspections along with best in class customer support.
                        </p>

                    </Col>
                </Row>
                <Row >
                    <Col xl={6} md={12} xs={12}>
                        <div className="pricingPoints">
                            <GoPlus size={18} style={{color:'#2584E0', marginRight:10}} />
                            <p className="pricingPointsText">
                                Inspection results within 4 hours
                            </p>
                        </div>
                    </Col>
                    <Col xl={6} md={12} xs={12}>
                        <div className="pricingPoints">
                            <GoPlus size={18} style={{color:'#2584E0', marginRight:10}} />
                            <p className="pricingPointsText">
                                Inspection results within 4 hours
                            </p>
                        </div>
                    </Col>
                    <Col xl={6} md={12} xs={12}>
                        <div className="pricingPoints">
                            <GoPlus size={18} style={{color:'#2584E0', marginRight:10}} />
                            <p className="pricingPointsText">
                                Inspection results within 4 hours
                            </p>
                        </div>
                    </Col>
                    <Col xl={6} md={12} xs={12}>
                        <div className="pricingPoints">
                            <GoPlus size={18} style={{color:'#2584E0', marginRight:10}} />
                            <p className="pricingPointsText">
                                Inspection results within 4 hours
                            </p>
                        </div>
                    </Col>
                </Row>

                <Row className="pricingCardRow">
                    <Col  xl={8} md={8} xs={24} className="pricingColumn">
                        <div className="priceCardCompo">
                            <PricingCard

                                tagText="UBER INSPECTION"
                                priceText="$ 24.99"
                                ParagraphText="LYFT INSPECTION"
                                colorCode="#2584E0"
                            />
                        </div>

                    </Col>
                    <Col  xl={8} md={8} xs={24}  className="pricingColumn">
                        <div className="priceCardCompo">
                            <PricingCard
                                tagText="UBER INSPECTION"
                                priceText="$ 24.99"
                                ParagraphText="Single Inspection"
                            />
                        </div>
                    </Col>
                    <Col  xl={8} md={8} xs={24}  className="pricingColumn">
                        <div className="priceCardCompo">
                            <PricingCard
                                tagText="BUNDLED INSPECTION"
                                priceText="$ 39.98"
                                ParagraphText="Uber & Lyft Combined"
                            />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xl={24} md={24} xs={24}>
                        <div className="btn_div">


                            <button  className="btn_styling"> Get Started </button>
                        </div>

                    </Col>
                </Row>
            </section>



            <section className="main_section_review">
                <Row>
                    <Col xl={24} md={24} xs={24} style={{backgroundColor:'white'}}>
                        <h2 className="headingCustomerReviews">
                          What our  <span style={{color:'#2584E0'}}> Customers </span> are saying?
                        </h2>

                    </Col>
                </Row>
                <Row>
                    <Col xl={24} md={24} xs={24}>
                        <div className='review_container_main'>

                            <Carousel show={3} slide={1} swiping={true}
                                      rightArrow={<IoIosArrowForward size={32} color="gray" className='forward-arrow'/>}
                                      leftArrow={<IoIosArrowBack size={32} color="gray" className='back-arrow'/>}>
                                <ReviewCard reviewText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo adipiscing turpis tellus, ultricies.
                At vestibulum venenatis, etiam nunc, cras. Euismod nulla vitae, arcu lacinia porta sapien erat. Nisl scelerisque laoreet sit id.'
                                            reviewerName={'Richard A.'}/>
                                <ReviewCard reviewText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo adipiscing turpis tellus, ultricies.
                At vestibulum venenatis, etiam nunc, cras. Euismod nulla vitae, arcu lacinia porta sapien erat. Nisl scelerisque laoreet sit id.'
                                            reviewerName={'Richard A.'}/>
                                <ReviewCard reviewText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo adipiscing turpis tellus, ultricies.
                At vestibulum venenatis, etiam nunc, cras. Euismod nulla vitae, arcu lacinia porta sapien erat. Nisl scelerisque laoreet sit id.'
                                            reviewerName={'Richard A.'}/>
                                <ReviewCard reviewText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo adipiscing turpis tellus, ultricies.
                At vestibulum venenatis, etiam nunc, cras. Euismod nulla vitae, arcu lacinia porta sapien erat. Nisl scelerisque laoreet sit id.'
                                            reviewerName={'Richard A.'}/>
                                <ReviewCard reviewText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo adipiscing turpis tellus, ultricies.
                At vestibulum venenatis, etiam nunc, cras. Euismod nulla vitae, arcu lacinia porta sapien erat. Nisl scelerisque laoreet sit id.'
                                            reviewerName={'Richard A.'}/>
                                <ReviewCard reviewText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo adipiscing turpis tellus, ultricies.
                At vestibulum venenatis, etiam nunc, cras. Euismod nulla vitae, arcu lacinia porta sapien erat. Nisl scelerisque laoreet sit id.'
                                            reviewerName={'Richard A.'}/>
                            </Carousel>
                        </div>



                    </Col>
                </Row>
            </section>




            <CustomFooter />



        </div>
    );
};


export default LyftVehicleInspectionScreen;