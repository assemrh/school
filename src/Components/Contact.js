import React from 'react'
import Topnav from './Topnav'
import Footer from './Footer'
function Contact() {
    return (
        <div className="App">
        <header className="App-header">
          <Topnav/>
        </header>
         <div className='sari-card top-card  back'/> 
        {/* <div className='sari-card buttom-card back ms-5 pt-3  d-none d-md-block' style={{zIndex: '-1'}}> 
  
        </div>*/}
        <div id='contact' className='container rounded my-2' style={{direction:'ltr'}}>
            <div className='row justify-content-center justify-items-center'>
                <div className='col mt-2'>
                    <div className="card sari-card d-flex  d-flex align-items-center"  style={{width: '32rem'}} >
                        <div className="">
                            <h5 className="card-title font-bold  text-center f-3">تواصل معنا</h5>
                            <div className='card-text p-3 rounded'>
                            <div className="container justify-content-center justify-items-center">

                            <a className="row" target='_blank' href='mailto:info@joudkh.com'>
                                <div className="col-2">
                                    <i className="fas fa-envelope"></i>
                                </div>  
                                <div className="col">
                                info@joudkh.com
                                </div>  
                            </a>
                            <a  className="row " href='https://www.facebook.com/mona.matar.32'  target='_blank' >
                                <div className="col-2">
                                    <i className="fab fa-facebook"></i>
                                </div>  
                                <div className="col">
                                Facebook
                                </div>  
                            </a >
                            <a className="row" target='_blank' href='https://www.instagram.com/joud_alkhalij'>
                                <div className="col-2">
                                    <i className="fab fa-instagram"></i> 
                                </div>  
                                <div className="col">
                                    Instagram 
                                </div>  
                            </a >
                        </div>
                        </div>
                    </div>
                    </div>
      
        </div>

      </div>
    

    </div>

        <Footer/>
      </div>
    )
}

export default Contact

