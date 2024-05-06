import React from 'react'
import Rotate from 'react-reveal/Rotate';

import comingsoon from '../assets/comingsoon.png'

const About = () => {
  return (
    <>
      <div className="about-wrapper">
        {/* <p className='about-title'>Get to know me more</p> */}
        <div className="profile-wrapper">
          <p className='profile-title'>Profile & Future</p>
          <Rotate top left delay={400}>
          <img src={comingsoon} alt="Coming Soon" className='coming-soon'/>
          </Rotate>
        </div>

        {/* <div className="stats-wrapper">
          <p className='stats-title'>Stats</p>
        </div> */}
        
        {/* <div className="achievements-wrapper">
          <p className='achievements-title'>Achievements</p>
        </div> */}

        {/* <div className="future-dream-wrapper">
          <p className='future-dream-title'>Future & Dream</p>
          <p>(Fullstack Developer | Game Developer - Learn laravel, typescript & improve design art and animation)</p>
        </div> */}
      </div>
    </>
  )
}

export default About