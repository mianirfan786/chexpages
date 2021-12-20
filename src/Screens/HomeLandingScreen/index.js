import React from "react";
import './style.css'
import {Button, CustomFooter, CustomNavbar, HomeBadgeOverlapCard, PricingCard, ReviewCard} from '../../Components'
import {Col, Row, Rate } from "antd";
import { Carousel } from '@trendyol-js/react-carousel';
import {AiFillBook,AiFillStar } from 'react-icons/ai';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import {GoPlus} from "react-icons/go";
import dashboard from "../../Assets/dashboard.png";


const Index = (props) => {
    return (
        <div className='home-main-Container'>
            <div className='badge-container_home' >
                <CustomNavbar/>
                <div className='badge-image-inner-container'>
                    <div className='badge-inner-left-home'>
                        <p className='badge-main-heading'>Vehicle Inspection Platform</p>
                        <div className="btn_div_banner">


                            <button  className="btn_styling_banner"> Get Started </button>
                        </div>

                    </div>
                    <div className='badge-inner-right'>
                        <img src={'https://chex.ai/wp-content/uploads/2021/03/banner-box.png'} />
                    </div>
                </div>
            </div>
            <div className='overlay-card-container'>
                <div className='overlay-card-inner-container'>
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={8}  >
                            <HomeBadgeOverlapCard
                                title='Easy & Convenient'
                                description='Chex.AI’s mobile web app is designed for you to conduct inspections at your convenience'
                                bgColor="#3965A6"
                                iconName={AiFillBook}
                            />
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={8} >
                            <HomeBadgeOverlapCard
                                title='Advanced & Efficient'
                                description='Our system uses machine learning technology which gives you results instantly'
                                bgColor="#FF7A00"
                                iconName={AiFillBook}
                            />
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={8} >
                            <HomeBadgeOverlapCard
                                title='Cost Effective'
                                description='Chex.AI’s mobile web app is designed for you to conduct inspections at your convenience'
                                bgColor="#FFC700"
                                iconName={AiFillBook}
                            />
                        </Col>
                    </Row>
                </div>
            </div>
            <div className='chexWorks-main-container'>
                <div className='chexwork-inner-container'>
                    <p className='chaxwork-heading'>How Chex<span className='chaxwork-heading-span'>.AI</span> works</p>
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
                                    Once you’re ready tap Next key at the bottom of the page</p>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={6} >
                            <div className='chexworks-column'>
                                <img src='https://chex.ai/wp-content/uploads/2021/05/Rectangle-156.png' className='chexwork-img'/>
                                <h3 className='chexwork-image-title'>Complete Payment</h3>
                                <p className='chexwork-image-desc'>
                                    Enter payment details or payment code provided by your ride-sharing company.
                                    <span className='chexwork-image-payment-span'> If you don’t pass, your first re-inspection is free</span></p>
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
            <div className='chex-demo-video-main-contaier'>
                <div className='chex-demo-video-container'>
                    <video
                        poster='https://chex.ai/wp-content/themes/chex/assets/images/video-post.jpg '
                        type="video/mp4" playsInline
                        controls={true}
                        className='chex-demo-video'
                    >
                        <source src="https://chex.ai/wp-content/uploads/2021/05/IMG_9215.mp4" type="video/mp4" />
                    </video>

                </div>
            </div>



            <section className="about_section_main">
                <Row className="about_pricing_main_row">
                    <Col xl={12} md={12} xs={24} >
                        <div className="about_desc_div">
                            <h2 className='about-chex-left-title'>About Chex<span className='about-chex-left-title-span'>.AI</span></h2>
                            <p className="paraAbout">Chex<span className='about-chex-inner-left-desc-span'>.AI</span> is an all-in-one solution customized for vehicle inspections. Our technology removes the need for scheduled appointments and
                                expensive reviews.Inspections are completed same day by a push of a button!</p>
                            <button  className="btn_styling_banner"> Get Started </button>


                        </div>
                        <div className="slider_div_main">
                            <div className='scrollContainer_mainDiv'>
                                <div className="partner_div">
                                    <p className="heading_partners">Our Partners</p>
                                </div>
                                <div className="carousel_div_main">
                                    <Carousel show={2} slide={1} swiping={true}
                                              rightArrow={<IoIosArrowForward size={32} color="gray" className='arrow-container'  />}
                                              leftArrow={<IoIosArrowBack size={32} color="gray" className='arrow-container'  />} >
                                        <div>
                                            <img src='https://chex.ai/wp-content/uploads/2021/09/8bac63c092c854c8d3588f2ed75be216.png' width='170px' height='100px'/>
                                        </div>
                                        <div>
                                            <img src='https://chex.ai/wp-content/uploads/2021/09/Adroit.png' width='170px' height='100px'/>
                                        </div>
                                        <div>
                                            <img src='https://chex.ai/wp-content/uploads/2021/09/xxfgwx4en6mieiqgtzl7.png' width='170px' height='100px'/>
                                        </div>
                                        <div>
                                            <img src='https://chex.ai/wp-content/uploads/2021/09/4275e35f8935c7af1e6449e110e5b099.png' width='170px' height='100px'/>
                                        </div>
                                        <div>
                                            <img src='https://chex.ai/wp-content/uploads/2021/09/Adroit.png' width='170px' height='100px'/>
                                        </div>
                                        <div>
                                            <img src='https://chex.ai/wp-content/uploads/2021/09/xxfgwx4en6mieiqgtzl7.png' width='170px' height='100px'/>
                                        </div>
                                    </Carousel>
                                </div>
                            </div>

                        </div>

                    </Col>
                    <Col xl={12} md={12} xs={24}>
                        <div className="pricing_main_div">
                            <h1>Pricing</h1>
                            <div className="mainDiv_pricingcards">
                                <Row>
                                    {/*<div className="main_pricing_Columns_div">*/}


                                    <Col xl={12} md={24} xs={24}>
                                        <div className="pricingCardDiv">
                                            <div className="priceCardContainer_about">
                                                <div className="pricetagBg_about">
                                                    <p className="pricetagText_about">SINGLE INSPECTION</p>
                                                </div>



                                                <h3 className="pricecardHeading_about">$ 24.99</h3>

                                                <p className="pricecardParagraph_about">
                                                    Standalone Uber, Lyft or any other company
                                                </p>



                                            </div>


                                        </div>
                                    </Col>
                                    <Col xl={12} md={24} xs={24}>
                                        <div className="pricingCardDiv">
                                            <div className="pricingCardDiv">
                                                <div className="priceCardContainer_about">
                                                    <div className="pricetagBg_about PriceTagClr">
                                                        <p className="pricetagText_about">BUNDLED INSPECTION</p>
                                                    </div>



                                                    <h3 className="pricecardHeading_about">$ 39.99</h3>

                                                    <p className="pricecardParagraph_about">
                                                        Standalone Uber, Lyft or any other company
                                                    </p>
                                                    {/*<p>*/}
                                                    {/*    Select multiple companies in App*/}


                                                    {/*</p>*/}



                                                </div>


                                            </div>
                                        </div>

                                    </Col>
                                    {/*</div>*/}
                                </Row>
                                <Row >
                                    <Col xl={12} md={12} xs={12}>
                                        <div className="pricingPoints">
                                            <GoPlus size={18} style={{color:'#FF7A00', marginRight:10}} />
                                            <p className="pricingPointsText">
                                                Inspection results within 4 hours

                                            </p>
                                        </div>
                                    </Col>
                                    <Col xl={12} md={12} xs={12}>
                                        <div className="pricingPoints">
                                            <GoPlus size={18} style={{color:'#FF7A00', marginRight:10}} />
                                            <p className="pricingPointsText">
                                                Verified certification in-app
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xl={12} md={12} xs={12}>
                                        <div className="pricingPoints">
                                            <GoPlus size={18} style={{color:'#FF7A00', marginRight:10}} />
                                            <p className="pricingPointsText">
                                                24/7 customer support
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xl={12} md={12} xs={12}>
                                        <div className="pricingPoints">
                                            <GoPlus size={18} style={{color:'#FF7A00', marginRight:10}} />
                                            <p className="pricingPointsText">
                                                <span style={{color:'#FF7A00', fontWeight:'bold'}}> $14.99  </span> for each additional company selection
                                            </p>

                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <p className="pricingParaDesign">
                                        Above pricing is only for vehicle inspections, for other or bulk inspections please <span style={{color:'#FF7A00'}}> contact us </span> for pricing
                                    </p>

                                </Row>
                            </div>
                        </div>
                    </Col>

                </Row>
            </section>




    <section className="main_section_review">
        <Row>
            <Col xl={24} md={24} xs={24} style={{backgroundColor:'white'}}>
                <h2 className="headingCustomerReviews">
                   <span style={{color:'#2584E0'}}> Customer </span> Reviews
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


            <section>
                <Row>
                    <Col xl={12} md={12} xs={24} >

                        <div className='BusinessImageContainer'>
                            <img src={dashboard} alt="dashboard" />
                        </div>


                    </Col>
                    <Col xl={12} md={12} xs={24} >
                        <div className='businesstextContainer'>
                            <h2 className='dashboard-heading'>
                                How can we help your business?
                            </h2>
                            <p className='dashboard-description'>We can help your business optimize asset inspection process.  Our interactive dashboard allows you to review data in real time and provide feedback to your customers instantaneously!</p>
                            {/*<Button title={'Contact Us'} buttonClass="business_btn"*/}
                            {/*/>*/}
                            <button className="btn_styling_contact" >
                                Contact Us
                            </button>

                        </div>
                    </Col>
                </Row>
            </section>


            <CustomFooter />

        </div>
    )
}

export default Index




