import React, { useEffect } from 'react';
import 'reset-css';
import './styles.css';
import LoadingPage from 'pages/LoadingPage';
import Menu from 'pages/Menu';
import ContactForm from 'pages/ContactForm';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

const App = () => {
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
      <Router>
        <Switch>
          <Route exact path="/" component={LoadingPage} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/contact-form" component={ContactForm} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
