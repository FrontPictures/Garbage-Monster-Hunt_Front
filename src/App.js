import React, { useEffect } from 'react';
import 'reset-css';
import './styles.css';
import LoadingPage from 'pages/LoadingPage';
import Menu from 'pages/Menu';
import ContactForm from 'pages/ContactForm';
import { Route } from 'react-router-dom';

const App = ({ history }) => {
  const checkStatus = () => {

  };

  useEffect(() => {
   const interval = setInterval(() => {
       checkStatus();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg">
      <Route exact path="/" component={LoadingPage} />
      <Route exact path="/menu" component={Menu} />
      <Route exact path="/contact-form" component={ContactForm} />
    </div>
  );
};

export default App;
