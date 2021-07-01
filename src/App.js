import './App.css';
// 3rd party
import "bootstrap/dist/css/bootstrap.min.css"
// components
import Navbar from './components/NavBar';
import Header from './components/Header';
import About from './components/About';
import Slider from './components/Slider';


function App() {
  return (
      <>
      <Navbar/>
      <Header/>
      <Slider/>
      <About/>
      </>
  );
}

export default App;
