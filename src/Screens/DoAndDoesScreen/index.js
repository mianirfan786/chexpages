import React from 'react';
import ReactPlayer from 'react-player';
import { Button } from '../../Components';
import { BsChevronLeft } from 'react-icons/bs';

import './style.css';
import '../../App.css';

const DoAndDoesScreen = ({ handleSubmit, isLoading, companies }) => {
  return (
    <div className="doAndDoesContainer">
      <div className="header-container">
        <BsChevronLeft className="doAndDoes-icon" />
        <div className="doAndDoes-title"> Do's and Don't</div>
        <div></div>
      </div>
      <div className="doAndDoes-content"> We will add a combination of videos and written
       stuff here to prepare users before Main function page.</div>
      <p className="doAndDoes-link">Tips to successfully conduct an inspection:</p>
      <div className="doAndDoes-video">
        <video controls width="100%" style={{ textAlign: 'center' }} src='https://res.cloudinary.com/tech-qalanders/video/upload/v1617105021/chex-instruction/Video_cwdatp.mp4' />
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
      <p className="doAndDoes-paragraph"> <ul>
        <li>Find an empty lot or area with minimal distractions</li>
        <li>Avoid noisy surroundings</li>
        <li>Take photos and record videos during the daylight</li>
        <li>Have a friend/partner to assist with video clips</li>
        <li>Get a penny for tire inspections</li>
      </ul></p>
      </div>
      <Button title="Next" />
    </div>
  );
};

export default DoAndDoesScreen;
