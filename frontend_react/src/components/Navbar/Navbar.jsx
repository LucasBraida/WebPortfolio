import React from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'
import './Navbar.scss'
import { images } from '../../constants'

// export const sections = ['home', 'about', 'work','nftGallery','skills', 'testimonial', 'contact']
export const sections = ['home', 'work','poknfts','skills', 'contact']
const Navbar = () => {
  const [toggle, setToggle] = React.useState(false)
  //const sections = ['home', 'about', 'contact', 'work', 'skills', 'testimonial']
  return (
    <nav className='app__navbar'>
      {/* <div className='app__navbar-logo'>
        <img src={images.logo} alt='logo'></img>
      </div> */}
      <ul className='app__navbar-links'>
        {sections.map((item) => (
          <li className='app__flex p-text' key={`link-${item}`}>
            <div></div>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={() => setToggle(true)}></HiMenuAlt4>

        {toggle && (
          <motion.div
            initial={{opacity: 0}}
            whileInView={{ x: [300, 0], opacity: 1 }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
            >
            <HiX onClick={() =>  setToggle(false)}></HiX>
            <ul>
              {sections.map((item) => (
                <li key={`menu-${item}`}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                </li>
              ))}
            </ul>

          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
