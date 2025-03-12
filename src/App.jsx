import React from 'react'
import NavBar from './sections/NavBar'
import Hero from './sections/Hero'
import About from './sections/About'
import Project from './sections/Project'
import Clients from './sections/Clients'
import Contact from './sections/Contact'
import Experience from './sections/Experience'

const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative overflow-hidden">
      <NavBar/>
      <Hero/>
      <About/>
      <Experience/>
      <Project/>
      <Clients/>
      <Contact/>
      </main>
  )
}

export default App