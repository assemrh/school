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
              <h4 className='fs-2' > لمن صممت مدرستنا :</h4>
              <p className='rtl fs-5 my-5' >
              للطلاب الذين يبحثون عن أفضل مستوى تعليمي بأقل الرسوم السنوية أولئك الذين قد يكون لديهم صعوبات في التعلم أو ذوي الاحتياجات التعليمية الخاصة أو ذوي الإعاقات الطلاب الذين تم استبعادهم من المدرسة الأفراد الذين يعانون من القلق الاجتماعي الطلاب الذين تعرضوا للتنمّر في البيئة المدرسية أولئك الذين يحتاجون إلى دعم إضافي الطلاب الذين يستجيبون جيدًا للتعلم خارج البيئة التقليدية أولئك الذين ينتقلون بانتظام والذين لا تناسبهم المدارس التقليدية أولئك الذين لا يستطيعون الحصول على مكان في المدارس التقليدية و / أو هم على قوائم الانتظار أولئك الذين لا يتم تحديهم بشكل كافٍ في المدرسة الطلاب المغتربين الذين يعيشون في دول مجلس التعاون الخليجي دون الوصول إلى مدرسة تقليدية عالية الجودة              </p>
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
