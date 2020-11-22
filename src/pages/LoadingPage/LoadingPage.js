import React from 'react';
import LoadingImage from 'assets/LoadingImage.png';
import Flip from 'react-reveal/Flip';

const LoadingPage = ({ history }) => (
  <div onClick={() => history.push('/contact-form')} className="center">
    <Flip left>
      <img className="loading-image" src={LoadingImage} alt="Welcome, user!" />
    </Flip>
  </div>
);
export default LoadingPage;
