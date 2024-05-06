import React from 'react'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';

import Image from '../assets/blackwhite.png'

const Home = () => {
  return (
    <>
      <div className='home-wrapper'>
        <div className="hero-section-wrapper">
          <div>
            <Fade bottom delay={200}>
            <img src={Image} alt="Hariz Asyraf" className='main-image'/>
            <div className="hero-title">
              <div>Hi, I'm</div>
              <div>Hariz Asyraf...</div>
            </div>
            </Fade>
          </div>

          <Fade bottom delay={600}>
            <p className="hero-description">A junior frontend developer. I have a passion for programming and enjoy doing animation. My core is frontend but I do know some backend, and I really hope that one day I would be able to do fullstack and develop my own game.</p>
          </Fade>
          
          {/* <div className="button">
          <Fade bottom delay={1000}>
            <Link to='https://wa.me/60103020168' target='_blank'>HIRE ME</Link>
            <Link to='/contact'>CONTACT ME</Link>
          </Fade>
          </div> */}

        </div>

        {/* <div className="latest-project-wrapper">
          <p className="latest-title">Latest Project</p>

        </div> */}
      </div>
    </>
  )
}

export default Home