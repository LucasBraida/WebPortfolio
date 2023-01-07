import React from 'react'

import { About, Footer, Header, Skills, PoKNFTs, Work } from './container'
import {Navbar} from './components'

import './App.scss'
const App = () => {
  


  return (
    <div className='app'>
      <Navbar></Navbar>
      <Header ></Header>
      {/* <About ></About> */}
      <Work  />
      <PoKNFTs></PoKNFTs>
      <Skills />
      {/* <Testimonial></Testimonial> */}
      <Footer></Footer>
    </div>
  )
}

export default App
