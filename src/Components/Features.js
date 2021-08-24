import React from 'react'
import Topnav from './Topnav'
import Footer from './Footer'
//import heroImage from '../img/hero-image12.jpg'


function Features() {
    return (
        <div className="App">
        <header className="App-header">
          <Topnav/>
        </header>
        <div className='sari-card top-card  back'/>
        <div className='sari-card buttom-card w-md-100 w-65 back ms-5 pt-5'>
          <div className='row justify-content-end me-md-5 mt-2'>
            <div className='col-md-8 col-xs-12 mt-md-3'>
              <p className='fs-1' >  <strong> المميزات </strong></p>
              <ul className='rtl fs-5 my-5'>
                  <li>يمنح الطلاب وولي الأمر كلمة مرور للدخول للفصول الدراسية.
                  </li>
                  <li>فصول افتراضية من خلال zoom الخاصة بالمدرسة.
                  </li>
                  <li>بيئة تعليمية وممتعة تفاعلية صوت وصورة.
                  </li>
                  <li>أداء الواجبات والاختبارات / نقاط تحفيز وجوائز وتقيم للطلاب.
                  </li>
                  <li>التواصل المباشر بين أولياء الأمور والمدرسة.
                  </li>
              </ul>
            </div>
  
          </div>
  
        </div>
        <div style={{height:"80vh"}} />

  

        <Footer/>
      </div>
    )
}

export default Features
