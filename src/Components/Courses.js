import React from 'react'
import heroImage from '../img/stu.jpg'
import '../App.css'
import Footer from './Footer'
import Topnav from './Topnav'
import {Tophero , Hero} from './Tophero'

function Courses() {
    return (
        <div className="App">
        <header className="App-header">
          <Topnav/>
        </header>
        <div className='sari-card top-card  back'/>
        <Tophero src= {heroImage}/>

        <div className='sari-card buttom-card w-65 back-lg ms-5 pt-5'>
          <div className='row justify-content-end me-md-5 mt-2'>
            <div className='col-md-8 col-xs-12 mt-md-3 rtl'>
              <h4 className='fs-2' >نظرة عامة على المنهاج الدراسي:</h4>
              <p className='rtl fs-5 my-5' >
              آي أكاديمي ميدل ايست هي مدرسة بمنهاج أمريكي عالية التقنية للطلاب من مرحلة الروضة وحتى الصف السادس ابتدائي والسمة المميزة لمدرستنا هي توفير تعليم دقيق مدعوم بمنصة رقمية مثبتة مما يعزز تجربة الطالب.               </p>
            </div>
    
          </div>
    
        </div>
        <div style={{height:"100vh"}} />
        <Hero src= {heroImage}/>

    
    
        <Footer/>
      </div>
    )
}

export default Courses
