import React from 'react'
import { Navbar } from './components/Navbar'
import Section from './components/Section'
import FunctionsSection from './components/FunctionsSection'
import Workflow from './components/Workflow'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <div className='max-w-7xl mx-auto pt-20 px-6'>
        <Section />
        <FunctionsSection />
        <Workflow />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
      
    </>
  )
}

export default App
