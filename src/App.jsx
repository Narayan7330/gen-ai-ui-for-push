import './App.css'
import Navbar from './components/navbar/navbar'
import HeroSection from './components/hero/hero'
// Change the file path to lowercase to match your files
import About from './components/about/about'      
import Contact from './components/contact/contact'  

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Contact />
    </>
  )
}

export default App
