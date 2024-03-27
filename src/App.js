import React from 'react'; //rafce
import NavBar from './components/NavBar';
import Home from './components/Home';
import SocialLink from './components/SocialLink';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';



const App = () => {
  return (
    <div> 
    <NavBar />
    <Home />
    <About />
   <Experience/>
 <Contact />
    <SocialLink />
    
    </div>
  )
}

export default App