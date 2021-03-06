import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ReactTooltip from 'react-tooltip'
import { AppWrap, MotionWrap } from '../../wrapper'
import { urlFor, client } from '../../client'
import './Skills.scss'
const Skills = (props) => {
  const [experiences, setExperiences] = useState([])
  const [skills, setSkills] = useState([])

  useEffect(() => {
    const experiencesQuery = '*[_type == "experiences"]'
    const skillsQuery = '*[_type == "skills"]'

    client.fetch(experiencesQuery)
      .then((data) => {
        setExperiences(data)
      })

    client.fetch(skillsQuery)
      .then((data) => {
        setSkills(data)
      })
  }, [])
  return (
    <>
      <h2 className='head-text'>Skills & Experience</h2>

      <div className='app__skills-container'>
        <motion.div
          className='app__skills-list'>
          {skills.map((skill) => (
            <motion.div
              key={`skills-${skill.name}`}
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className='app__skills-item app__flex'>
              <div className='app__flex' style={{ backgroundColor: skill.bgColor }}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className='app__skills-exp'>
          {experiences.map((experience, index) => (
            <motion.div
              className='app__skills-exp-item'
              key={`expericence-year-${experience.year}-${index}`}>
              <div className='app__skills-exp-year'>
                <p className='bold-text'>{experience.year}</p>
              </div>
              <motion.div className='app__skills-exp-works'>
                {experience.works.map((work, index) => {
                  return (
                    <div
                    key={`div-${index}${work.name}-${work.company}`}>
                      <motion.div
                        key={`experience-work-${index}${work.name}-${work.company}`}
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        data-tip
                        data-for={`${work.name}-${work.company}`}
                        className='app__skills-exp-work'>
                        <h4 className='bold-text'>{work.name}</h4>
                        <p>{work.company}</p>
                      </motion.div>
                      <ReactTooltip
                        key={`tooltip-${work.name}-${work.company}`}
                        id={`${work.name}-${work.company}`}
                        effect='solid'
                        arrowColor='white'
                        className='skills-tooltip'>
                        {work.desc}
                      </ReactTooltip>
                    </div>
                  )
                })}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills')
  , 'skills', 'app__whitebg')



