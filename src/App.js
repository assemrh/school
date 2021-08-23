//import logo from './logo.svg';
import heroImage from './img/hero-image12.jpg'
import './App.css';
import Topnav from './Components/Topnav';
import Footer from './Components/Footer';
//<img src={logo} className="App-logo" alt="logo" />
function App() {
  return (
    <div className="App">

      <header className="App-header pt-3">
        <Topnav/>
      </header>
      <div className='sari-card top-card  back'/>
      <div className='sari-card buttom-card back ms-5 pt-3'>
        <div className='row justify-content-end me-md-5 mt-2'>
          <div className='col-md-8 col-xs-12 mt-md-3'>
            <p className='fs-1'>ابـدأ مـعـنـا الـدراسـة  <br /><strong> عن بعد</strong></p>
            <button className='btn btn-secondary' style={{direction:'rtl'}}>معلومات أكثر .. </button>
          </div>

        </div>

      </div>
      <div className='img-hero'>
        <img src={heroImage}/>
      </div>
      <div className='white-card'>
        
      </div>
      <Footer/>
    </div>
  );
}

export default App;
