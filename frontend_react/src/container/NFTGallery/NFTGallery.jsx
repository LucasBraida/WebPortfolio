import React, { useState, useEffect } from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'

import { AppWrap, MotionWrap } from '../../wrapper'
import { urlFor, client } from '../../client'
import './NFTGallery.scss'

const NFTGallery = (props) => {
  const [activeFilter, setActiveFilter] = React.useState('All')
  const [animateCard, setAnimateCard] = React.useState({ y: 0, opacity: 1 })
  const [works, setWorks] = useState([])
  const [filterWork, setFilterWork] = useState([])
  const handleWorkFilter = (item) => {
    setActiveFilter(item)
    setAnimateCard([{y: 100, opacity:0}])

    setTimeout(()=>{
      setAnimateCard([{y:0, opacity:1}])

      if(item === 'All'){
        setFilterWork(works)
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)))
      }
    }, 500)
  }

  useEffect(() => {
    const query = '*[_type == "works"]'

    client.fetch(query)
      .then((data) => {
        setWorks(data)
        setFilterWork(data)
        console.log(data)
      })
  }, [])
  return (
    <>
      <h2 className='head-text'>
        my creative <span>portfolio</span> section
      </h2>
      <div className='app__work-filter'>
        {['Web App', 'DApp', 'All'].map((item, index) => (
          <div
            key={`work-${item}`}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}>
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__work-portfolio'>
        {filterWork.map((work) => (
          <div
            key={work.title}
            className='app__work-item app__flex'>
            <div className='app__work-img app__flex'>
              <img src={urlFor(work.imgUrl)} alt={work.name}></img>
              <motion.div
                initial={{opacity: 0}}
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 2 }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{opacity: 1}}
                    whileHover={{ scale: [1, 0.80] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{opacity: 1}}
                    whileHover={{ scale: [1, 0.80] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className='app__work-content app__flex'>
              <h4 className='bold-text'>{work.title}</h4>
              <p className='p-text' style={{ marginTop: 10 }}>{work.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  )
}

export default AppWrap(
  MotionWrap(NFTGallery, 'app__works')
  , 'nftGallery', 'app__primarybg')
