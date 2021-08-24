import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './Components/About'
import Contact from './Components/Contact';
import FAQ from './Components/FAQ';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom' ;

//import reportWebVitals from './reportWebVitals';

const routing = (  
  <React.StrictMode>

  <Router>  
      <Switch>  
         <Route exact path="/" component={App} />  
         <Route path="/about" component={About} />  
         <Route path="/faq" component={FAQ} />  

         <Route path="/contact" component={Contact} />  
      </Switch>  
  </Router>  
  </React.StrictMode>
) 
ReactDOM.render(routing ,
  document.getElementById('root')
);


