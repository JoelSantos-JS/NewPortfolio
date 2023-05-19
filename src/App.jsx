import { useState } from 'react'

import Hero from './components/Hero/Hero'
import Header from './components/Header/Header'
import ArrowSection from './components/ArrowSection'
import About from './components/About/About'
import Skills from './components/Skills/Skils'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
   <Header />
      <Hero />
      <ArrowSection />
      <About />
      <Skills />
      <Portfolio />
      <Contact />

    </>
  )
}

export default App
