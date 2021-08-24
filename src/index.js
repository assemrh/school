import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './Components/About'
import Contact from './Components/Contact';
import FAQ from './Components/FAQ';
import Features from './Components/Features';
import Students from './Components/Students';
import Courses from './Components/Courses'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' ;

//import reportWebVitals from './reportWebVitals';
//students
const routing = (  
  <React.StrictMode>

  <Router>  
      <Switch>  
         <Route exact path="/" component={App} />  
         <Route path="/about" component={About} />  
         <Route path="/faq" component={FAQ} />  
         <Route path='/features' component={Features}/>
         <Route path='/students' component={Students}/>
         <Route path="/contact" component={Contact} />  
         <Route path="/courses" component={Courses} />  
      </Switch>  
  </Router>  
  </React.StrictMode>
) 
ReactDOM.render(routing ,
  document.getElementById('root')
);


