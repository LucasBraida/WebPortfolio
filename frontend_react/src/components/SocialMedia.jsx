import React from 'react'
import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs'
// import { FaFacebookF} from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a href="https://twitter.com/lucasbraidan" target="_blank" rel="noreferrer">
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/lucas-braida-609842236" target='_blank' rel='noreferrer'>
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="https://github.com/LucasBraida" target="_blank" rel="noopener noreferrer">
          <BsGithub />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia
