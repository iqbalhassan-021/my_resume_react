import logo from './logo.svg';
import './App.css';
import './index.css';
import Banner from './Components/Banner';
import NavBar from './Components/NavBar';
import NameHolder from './Components/NameHolder'
import HeroContainer from './Components/HeroContainer'
import Qualification from './Components/Qualifications'
import Skills from './Components/Skills'
import WorkExp from './Components/WorkExp'
import Project from './Components/Projects'
import About from './Components/About'
import Footer from './Components/Footer'
import Manue from './Components/Manue'
import ManueWrapper from './Components/ManueWrapper';
function App() {
  return (
    <>
    <ManueWrapper/>
    <Banner/>
    <Manue/>
    <NameHolder/>
    <NavBar/>
    <HeroContainer/>
    <Qualification/>
    <Skills/>
    <WorkExp/>
    <Project/>
    <About/>
    <Footer/>
    </>
   
  );
}

export default App;
