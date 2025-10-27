
import { useState } from 'react'
import './App.css'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Portfolio from './components/project/Portfolio'
import ScrollUp from './components/scrollup/ScrollUp'
import Skills from './components/skills/Skills'

function App() {
  const [activeNav, setActiveNav] = useState('#home');
  return (
    <>
      <Header activeNav={activeNav} setActiveNav={setActiveNav} />

      <main className='main'>
        <Home setActiveNav={setActiveNav} />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <ScrollUp setActiveNav={setActiveNav} />
    </>
  )
}

export default App
