import React from 'react'
import Topnav from './Topnav'
import Footer from './Footer'
import Question from './Question'
import {Tophero , Hero} from './Tophero'


function FAQ() {
    return (
        <div className="App">
        <header className="App-header">
          <Topnav/>
        </header>
        <div className='sari-card top-card  back'/>

        <div className='sari-card buttom-card back ms-5 pt-3  d-none d-md-block' >
  
        </div>
        <Question />

        <Footer/>
      </div>
    )
}

export default FAQ
