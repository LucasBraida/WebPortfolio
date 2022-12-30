import React from 'react'

import { About, Footer, Header, Skills, Testimonial, Work } from './container'
import {Navbar} from './components'

import './App.scss'
import NFTGallery from './container/NFTGallery/NFTGallery'
const App = () => {
  const [language, setLanguage] = React.useState('portugues')

  const changeLanguage = () => {
    if(language === 'portugues'){
      setLanguage('english')
    } else{
      setLanguage('portugues')
    }
  }


  return (
    <div className='app'>
      <Navbar></Navbar>
      <Header language={language} changeLanguage={changeLanguage}></Header>
      <About language={language} changeLanguage={changeLanguage}></About>
      <Work language={language} changeLanguage={changeLanguage} />
      <NFTGallery language={language} changeLanguage={changeLanguage}/>
      <Skills language={language} changeLanguage={changeLanguage}/>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </div>
  )
}

export default App
