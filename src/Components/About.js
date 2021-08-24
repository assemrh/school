import React from 'react'
import heroImage from '../img/ahdaph.jpg'
import '../App.css';
import Footer from './Footer';
import Topnav from './Topnav'
import {Tophero , Hero} from './Tophero'


function About() {
  return (
    <div className="App">
    <header className="App-header">
      <Topnav/>
    </header>
    <div className='sari-card top-card  back'/>
    <Tophero src= {heroImage}/>

    <div className='sari-card buttom-card w-65  back-lg ms-5 pt-5'>
      <div className='row justify-content-end me-md-5 mt-2'>
        <div className='col-md-8 col-xs-12 mt-md-3 rtl'>
          <h4 className='fs-2' > ما تقدمه مدرستنا عبر الإنترنت:</h4>
          <p className='rtl fs-5 my-5'>
              الدروس عبر الإنترنت والأنشطة التفاعلية وجلسات الفصول الافتراضية تحت إشراف المعلم منهاج تفاعلي رقمي الكتب المدرسية * مدمجة في المنصة عبر الإنترنت مجموعة واسعة من أدوات التقييم دورات المستوى المتقدم / الشرف المتاحة للمدرسة الثانوية التواصل مع المعلمين عبر الإنترنت أو عبر الهاتف توجيهات من معلم الفصل الدراسي / المستشار الأكاديمي المتخصص لضمان أن الطلاب يحرزون تقدمًا وأنهم على الطريق الصحيح بدراساتهم أنشطة الطلاب المخططة ودعم أولياء الأمور عند الحاجة
          </p>
        </div>

      </div>

    </div>
    <div style={{height:"80vh"}} />
    <Hero src= {heroImage}/>



    <Footer/>
  </div>
)
}

export default About
