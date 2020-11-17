import React, { useEffect } from 'react';
import LoadingImage from 'assets/LoadingImage.png';
import Flip from 'react-reveal/Flip';

const LoadingPage = ({ history }) => {
  useEffect(() => {
      const timer = setTimeout(() => {
          history.push('/contact-form');
          }, 10000);
        return () => clearTimeout(timer);
  }, []);

    return (
      <div className="center">
        <Flip left>
          <img className="loading-image" src={LoadingImage} alt="Welcome, user!" />
        </Flip>
      </div>
    );
};
export default LoadingPage;
