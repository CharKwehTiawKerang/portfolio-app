import React from 'react'
import Rotate from 'react-reveal/Rotate';

import comingsoon from '../assets/comingsoon.png'

const Work = () => {
  return (
    <>
      <div className="work-wrapper">
        <div className="projects-wrapper">
          <p className="projects-title">Projects <span className='crystal'>|</span> Frameworks <span className='crystal'>|</span> Tools</p>
          <Rotate top left delay={400}>
          <img src={comingsoon} alt="Coming Soon" className='coming-soon'/>
          </Rotate>
          {/* <p>(Any reacts projects, ecommerce etc)</p>
          <p>Spare parts API Database</p>
          <p>Islamic advice API Database</p>
          <p>Recipes API Database</p>
          <p>(Design Arts & Animations)</p> */}
        </div>

        {/* <div className="frameworks-wrapper">
          <p className="frameworks-title">Frameworks</p>
          <Rotate top left delay={100}>
          <img src={comingsoon} alt="Coming Soon" className='coming-soon'/>
          </Rotate>
          <p>React</p>
          <p>Firebase</p>
          <p>Vite</p>
          <p>Lottie</p>
        </div>

        <div className="tools-wrapper">
          <p className="tools-title">Tools</p>
          <p>Figma</p>
          <p>Adobe After Effects</p>
          <p>Adobe Photoshop</p>
          <p>Adobe Illustrator</p>
          <p>Blender</p>
          <p>GitHub</p>
        </div> */}
      </div>
    </>
  )
}

export default Work