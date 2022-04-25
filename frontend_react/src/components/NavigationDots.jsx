import React from 'react'
import { sections } from './Navbar/Navbar'

const NavigationDots = ({ active }) => {
    return (
        <div className='app__navigation'>
            {sections.map((item) => (
                <a 
                    key={`navdots-${item}`} 
                    href={`#${item}`}
                    className='app__navigation-dot'
                    style={active === item ? { backgroundColor: '#313BAC'} : {}} >
                    </a>
            ))}
        </div>
    )
}


export default NavigationDots