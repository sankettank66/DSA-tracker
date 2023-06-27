import React from 'react'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
function Home() {
  return (
    <React.Fragment>
          <div className="container">
              <Navbar />
              <Hero />
              <Footer />
          </div>
    </React.Fragment>
  )
}
export default Home