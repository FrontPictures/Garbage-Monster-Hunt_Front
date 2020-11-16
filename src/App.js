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

function App() {
  return (
    <div className="bg">
      <div className="center">
        <Router>
          <Switch>
            <Route exact path="/" component={LoadingPage} />
            <Route exact path="/menu" component={Menu} />
            <Route exact path="/contact-form" component={ContactForm} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;