import React from 'react';
// import ReactPlayer from 'react-player';
import { Button } from '../../Components';
// import { BsChevronLeft } from 'react-icons/bs';
import { Carousel } from 'antd';

import './style.css';
import '../../App.css';

const DoAndDoesScreen = ({ loading, handleSubmit }) => {
  return (
    <div className="doAndDoesContainer">
      <div className="header-container">
        {/* <BsChevronLeft className="doAndDoes-icon" /> */}
        {/* <div className="doAndDoes-title"> Do's and Don't</div> */}
        <div></div>
      </div>
      {/* <div className="doAndDoes-content"> We will add a combination of videos and written stuff here to prepare users before Main function page.</div> */}

      <p className="doAndDoes-link">Tips to successfully conduct an inspection:</p>
      <div style={{ background: 'black' }} className="doAndDoes-video">
        <Carousel autoplay infinite>
          <video preload="metadata" controls autoPlay={false} loop={true} width="100%" style={{ textAlign: 'center' }}>
            <source src="https://res.cloudinary.com/tech-qalanders/video/upload/v1617716249/chex-instruction/Image_From_iOS_xsngl8.mp4" type="video/mp4" />
          </video>
        </Carousel>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <p className="doAndDoes-paragraph">
          {' '}
          <ul>
            <li>Please have your vehicle registration form handy</li>
            <li>Find an empty lot or area with minimal distractions</li>
            <li>Avoid noisy surroundings</li>
            <li>Take photos and record videos with clear visibility</li>
            <li>Have a friend/partner to assist with video clips</li>
            <li>Get a penny for tire inspections</li>
          </ul>
        </p>
      </div>
      <Button loading={loading} onClickButton={handleSubmit} title="Next" />
    </div>
  );
};

export default DoAndDoesScreen;
