//import logo from './logo.svg';
import heroImage from './img/hero-image12.jpg'
import './App.css';
import Topnav from './Components/Topnav';
import Footer from './Components/Footer';
//<img src={logo} className="App-logo" alt="logo" />
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Topnav/>
      </header>
      <div className='sari-card top-card'/>
      <div className='sari-card buttom-card'>

      </div>
      <div className='img-hero'>
        <img src={heroImage}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
