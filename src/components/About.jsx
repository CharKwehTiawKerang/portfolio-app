import React from 'react'
import { Rotate } from 'react-reveal';

import radarOne from '../assets/radarone.svg'
import radarTwo from '../assets/radartwo.svg'
import radarThree from '../assets/radarthree.svg'

const About = () => {
  return (
    <>
      <div className="about-wrapper">
        <div className="profile-wrapper">
          <p className='profile-title'>Profile <span className='crystal'>&</span> Interest</p>
        </div>

        {/* <div className="stats-wrapper">
          <p className='stats-title'>Stats</p>

          <div className="radar-wrapper">
            <span className='about-image-container'>
              <img src={radarOne} />
            </span>

            <span className='about-image-container'>
              <img src={radarTwo} />
            </span>

            <span className='about-image-container'>
              <img src={radarThree} />
            </span>
          </div>
        </div> */}
        
        {/* <div className="achievements-wrapper">
          <p className='achievements-title'>Achievements</p>
        </div> */}

        <div className="interest-wrapper">
          <p className='interest-title'>Interest</p>

          <div className="photography">
            <h2 className='crystal-box-2'>Photography</h2>
            
            <div className='polaroid-row'>
              <Rotate top left>
                <div>
                  <div className="polaroid rotate-right">
                    <img src="https://assets.harizasyraf.com/images/photography-watermark/ktm-sungaibuloh-watermark.jpg" alt="Stesen KTM Sungai Buloh" width="284" height="auto" />
                    <p className="caption">Stesen keretapi Sungai Buloh, Selangor.</p>
                  </div>
                </div>
              </Rotate>

              <Rotate top right delay={400}>
                <div>
                  <div className="polaroid no-rotate">
                    <img src="https://assets.harizasyraf.com/images/photography-watermark/power-line-sunrise-three-watermark.jpg" alt="Sunrise view" width="284" height="auto" />
                    <p className="caption">Sunrise view near power lines. 🖤</p>
                  </div>
                </div>
              </Rotate>
            </div>

            <div className='polaroid-row'>
              <Rotate top left delay={600}>
                <div>
                  <div className="polaroid no-rotate">
                    <img src="https://assets.harizasyraf.com/images/photography-watermark/walking-through-petaling-street-watermark.jpg" alt="Jalan Petaling Street" width="284" height="auto" />
                    <p className="caption">⛩️ Walking through Petaling Street</p>
                  </div>
                </div>
              </Rotate>

              <Rotate>
                <div>
                  <div className="polaroid rotate-left">
                    <img src="https://assets.harizasyraf.com/images/photography-watermark/petronas-twin-towers-watermark.jpg" alt="Petronas Twin Towers" width="284" height="auto" />
                    {/* <p class="caption">The Landmark of Kuala Lumpur ❝The Petronas Twin Towers❞</p> */}
                    <p className="caption">KLCC</p>
                  </div>
                </div>
              </Rotate>

              <Rotate>
                <div>
                  <div className="polaroid rotate-right translate--2">
                    <img src="https://assets.harizasyraf.com/images/photography-watermark/westinhotel-main-dishes-two-watermark.jpg" alt="Westin Hotel Raya 2024" width="284" height="auto" />
                    <p className="caption">Mmmmm, what a yummy meat! 🍷</p>
                  </div>
                </div>
              </Rotate>

            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default About