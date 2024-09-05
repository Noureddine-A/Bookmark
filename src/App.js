import './App.css';
import ContactUs from './components/ContactUs.jsx';
import Extensions from './components/Extensions.jsx';
import FAQ from './components/FAQ.jsx';
import Features from './components/Features.jsx';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  return (
   <div className="bookmark__app-container">
    <Navbar/>
    <Home/>
    <Features/>
    <Extensions/>
    <FAQ/>
    <ContactUs/>
   </div>
  );
}

export default App;
