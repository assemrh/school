import React from 'react'
import Topnav from './Topnav'
import Footer from './Footer'
import heroImage from '../img/hero-image12.jpg'


//courses d-md-none
function Home() {
    return (
        <div className="App">
        <header className="App-header">
          <Topnav/>
        </header>
        <div className='sari-card top-card  back d-none d-md-block'/>
        <div className='sari-card buttom-card back ms-5 pt-3 d-none d-md-block'>
          <div className='row justify-content-end me-md-5 mt-2'>
            <div className='col-md-8 col-xs-12 mt-md-3'>
              <p className='fs-1'>ابـدأ مـعـنـا الـدراسـة  <br /><strong> عن بعد</strong></p>
              <button className='btn btn-secondary' style={{direction:'rtl'}}>معلومات أكثر .. </button>
            </div>
  
          </div>
  
        </div>
        <div style={{height:"80vh"}} />
        <div className='img-hero'>
          <img src={heroImage}/>
        </div>
  
        <div className='white-card pt-3 fs-5'>
          <p className='mb-1'><b>www.joudkh.com</b></p>
          <p><b>info@joudkh.com</b></p>
        </div>
        <Footer/>
      </div>
    )
}

export default Home
