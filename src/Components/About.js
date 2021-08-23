import React from 'react'
import heroImage from '../img/hero-image12.jpg'
import '../App.css';
import Topnav from './Topnav';
import Footer from './Footer';

function About() {
    return (
        <div className="App">

        <header className="App-header pt-3">
          <Topnav/>
        </header>
        <div className='sari-card top-card  back'/>
        <div className='sari-card buttom-card back ms-5 pt-5'>
          <div className='row justify-content-end me-md-5 mt-5'>
            <div className='col-md-5 col-xs-12 mt-md-5'>
            </div>
  
          </div>
  
        </div>
        <div className='img-hero'>
          <img src={heroImage}/>
        </div>
        <Footer/>
      </div>
    )
}

export default About
