import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {images} from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import { urlFor, client } from '../../client'
import './PoKNFTs.scss'

const PoKNFTs = (props) => {
  const [animateCard, setAnimateCard] = React.useState({ y: 0, opacity: 1 })
  const [works, setWorks] = useState([])

  useEffect(() => {
    const query = '*[_type == "pokNFTs"]'

    client.fetch(query)
      .then((data) => {
        setWorks(data)
        // setFilterWork(data)
        console.log('pokNFTs')
        console.log(data)
      })
  }, [])
  return (
    <>
      <h2 className='head-text'>
        Some <span>Proof-of-Knowledge</span> NFTs
      </h2>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__work-portfolio'>
        {
        works.map((work) => (
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
                <a href={work.openseaLink} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{opacity: 1}}
                    whileHover={{ scale: [1, 0.80] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <img src={images.opensea_white} alt={'opensea'}></img>
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className='app__work-content app__flex'>
              <h4 className='bold-text'>{work.title}</h4>
              <p className='p-text' style={{ marginTop: 10 }}>{work.description}</p>
            </div>
          </div>
        ))
        }
        <div
            className='app__work-item app__flex'>
            <div className='app__work-img app__flex'>
              <img src={images.opensea} alt={'opensea'}></img>
              <motion.div
                initial={{opacity: 0}}
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 2 }}
                className="app__work-hover app__flex"
              >
                <a href={'https://opensea.io/LucasBraida'} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{opacity: 1}}
                    whileHover={{ scale: [1, 0.80] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <img src={images.opensea_white} alt={'opensea'}></img>
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className='app__work-content app__flex'>
              <h4 className='bold-text'>{'OpenSea'}</h4>
              <p className='p-text' style={{ marginTop: 10 }}>{"For more Proof of Knowledge NFTs, check me on OpenSea"}</p>
            </div>
          </div>
      </motion.div>
    </>
  )
}

export default AppWrap(
  MotionWrap(PoKNFTs, 'app__works')
  , 'poknfts', 'app__primarybg')
