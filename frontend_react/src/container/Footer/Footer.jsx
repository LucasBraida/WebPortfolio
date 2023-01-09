import React, { useState } from 'react'

import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import { client } from '../../client'
import './Footer.scss'

import resume from '../../assets/Resume-Lucas-Braida.pdf'
import resumePNG from '../../assets/resume.png'

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', message: '', email: '' })
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const { name, message, email } = formData

  const handleChangeInput = (e) => {
    const { name, value } = e.target

    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = () => {
    setLoading(true)
    console.log(formData)

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message
    }

    client.create(contact)
      .then(() => {
        setLoading(false)
        setIsFormSubmitted(true)
      })
  }
  return (
    <>
      <h2 className='head-text'>Take a coffe & chat with me</h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt='email' />
          <a href='mailto:lucasbraidan@gmail.com' className='p-text'>lucasbraidan@gmail.com</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt='mobile' />
          <a href='tel:+55 (32) 99147-8312' className='p-text'>+55 (32) 99147-8312</a>
        </div>
        <div className='app__footer-card'>
          <img src={resumePNG} alt='mobile' />
          <a href={resume} download='resume_Lucas_Braida.pdf' className='p-text'>My resume</a>
        </div>
      </div>

    </>
  )
}

export default AppWrap(MotionWrap(Footer, 'app__footer')
  , 'contact', 'app__whitebg')
