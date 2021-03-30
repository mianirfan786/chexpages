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
      <div className="doAndDoes-content"> We will add a combination of videos and written stuff here to prepare users before Main function page.</div>
      <p className="doAndDoes-link">Lorem ipsum dolor</p>
      <div className="doAndDoes-video">
        <ReactPlayer width="100%" style={{ textAlign: 'center' }} url="https://www.youtube.com/watch?v=Mu5_wETtUT4" />
      </div>
      <p className="doAndDoes-paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ullamcorper enim bibendum in sed. Tristique aenean nulla sit ullamcorper. Tellus lectus pellentesque aliquet
        nisl, ornare egestas suspendisse elit.{' '}
      </p>
      <Button title="Next" />
    </div>
  );
};

export default DoAndDoesScreen;
