import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Fade } from "react-reveal";
import Lottie from 'lottie-web'

import Image from '../assets/raya-outfit-2024.jpg'
import Hireme from '../animations/hire-me.json'
import Resume from '../animations/resume.json'

const Home = () => {
  const hiremeAnimationContainer = useRef();
  const resumeAnimationContainer = useRef();

  useEffect(() => {
    const hiremeAnimation = Lottie.loadAnimation({
      container: hiremeAnimationContainer.current,
      animationData: Hireme
    })

    const resumeAnimation = Lottie.loadAnimation({
      container: resumeAnimationContainer.current,
      animationData: Resume
    })

    return () => {
      hiremeAnimation.destroy();
      resumeAnimation.destroy();
    }
  }, [])

  return (
    <>
      <div className='home-wrapper'>
        <div className="hero-section-wrapper">
          <div>
            <Fade bottom delay={200}>
              <img src={Image} alt="Hariz Asyraf" className='main-image'/>

              <div className='subhero-section-wrapper'>
                <div className="hero-title">
                  <div>Hi, I am</div>
                  <div>Hariz Asyraf...</div>
                </div>

                <div className='download-btn-wrapper'>
                    <Link to="https://assets.harizasyraf.com/images/resume.pdf" className='animation-button-wrapper' ref={resumeAnimationContainer} target="_blank"></Link>
                    <Link to='/contact' className='animation-button-wrapper' ref={hiremeAnimationContainer}></Link>
                </div>
              </div>
            </Fade>
          </div>

          <Fade bottom delay={600}>
            <p className="hero-description-title">W E B <span className='crystal'>✦</span> D E V E L O P E R <span className='crystal'>┊┊</span> P H O T O G R A P H E R</p>
          </Fade>

          <Fade bottom delay={600}>
            <p className="hero-description"> <span className='spacing-two-finger'></span> A junior frontend developer. I have a passion for programming and enjoy doing animation. My core is frontend but I do know some backend, and I really hope that one day I would be able to do fullstack and develop my own game. I also have an interest in photography and doing it as hobby.</p>
          </Fade>

        </div>

      </div>
    </>
  )
}

export default Home