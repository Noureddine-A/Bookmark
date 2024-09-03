import './App.css';
import Extensions from './components/Extensions.jsx';
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
   </div>
  );
}

export default App;
