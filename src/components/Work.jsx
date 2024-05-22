import React from 'react'
import { Link } from 'react-router-dom'

import projectOne from '../assets/project-one.jpg'
import projectTwo from '../assets/project-two.jpg'
import projectThree from '../assets/project-three.jpg'
import projectFour from '../assets/project-four.jpg'

import nodejs from '../assets/frameworks-libraries/nodejs.svg'
import npm from '../assets/frameworks-libraries/npm.svg'
import express from '../assets/frameworks-libraries/express-color.svg'
import bootstrap from '../assets/frameworks-libraries/bootstrap.svg'
import laravel from '../assets/frameworks-libraries/laravel-color.svg'
import reactjs from '../assets/frameworks-libraries/react.svg'
import jupyter from '../assets/frameworks-libraries/jupyter.svg'

import vite from '../assets/tools/vite.svg'
import postman from '../assets/tools/postman.svg'
import dbeaver from '../assets/tools/dbeaver.svg'
import git from '../assets/tools/git.svg'
import github from '../assets/tools/github.svg'
import adobeillustrator from '../assets/tools/adobeillustrator.svg'
import adobephotoshop from '../assets/tools/adobephotoshop.svg'
import adobeaftereffects from '../assets/tools/adobeaftereffects.svg'
import figma from '../assets/tools/figma.svg'


const Work = () => {
  return (
    <>
      <div className="work-wrapper">
        <div className="projects-wrapper">
          <p className="projects-title">Projects <span className='middle-text-border'>Frameworks</span> Tools</p>
          
        </div>

        <div className="projects-title-sub-wrapper">
          <p className='projects-title-sub'>Projects</p>

          <div className="card-wrapper">
            <div className='card'>
              <Link to='https://www.google.com' target='_blank'>
                <img src={projectOne} alt="" />
              </Link>
              <div className='card-desc'>
                <p>An image gallery app made with React JS using Unsplash API.</p>
              </div>
            </div>

            <div className='card'>
              <Link to='https://hikmah.harizasyraf.com/advices' target='_blank'>
                <img src={projectTwo} alt="" />
              </Link>
              <div className='card-desc'>
                <p>Collection of Islamic advices API made using NodeJS and ExpressJS</p>
              </div>
            </div>

            <div className='card'>
              <Link to='https://www.google.com' target='_blank'>
                <img src={projectThree} alt="" />
              </Link>
              <div className='card-desc'>
                <p>Ecommerce project: Laravel, InertiaJS, ReactJS and MySQL.</p>
              </div>
            </div>

            <div className='card'>
              <Link to='https://www.google.com' target='_blank'>
                <img src={projectFour} alt="" />
              </Link>
              <div className='card-desc'>
                <p>A simple Islamic advices generator apps.</p>
              </div>
            </div>

          </div>
        </div>

        <div className="frameworks-wrapper">
          <p className='frameworks-title'>Frameworks <span className='crystal'>&</span> Libraries</p>

          <div className="work-container">
            <div className='work-image-container'>
              <img src={nodejs} />
              <p>Node JS</p>
            </div>

            <div className='work-image-container'>
              <img src={npm} />
              <p>NPM</p>
            </div>

            <div className='work-image-container'>
              <img src={express} />
              <p>Express JS</p>
            </div>

            <div className='work-image-container'>
              <img src={bootstrap} />
              <p>Bootstrap</p>
            </div>

            <div className='work-image-container'>
              <img src={laravel} />
              <p>Laravel</p>
            </div>

            <div className='work-image-container'>
              <img src={reactjs} />
              <p>React JS</p>
            </div>

            <div className='work-image-container'>
              <img src={jupyter} />
              <p>Jupyter</p>
            </div>
          </div>
        </div>

        <div className="tools-wrapper">
          <p className='tools-title'>Tools</p>

          <div className="work-container">
            <div className='work-image-container'>
              <img src={vite} />
              <p>Vite</p>
            </div>

            <div className='work-image-container'>
              <img src={postman} />
              <p>Postman</p>
            </div>

            <div className='work-image-container'>
              <img src={dbeaver} />
              <p>Dbeaver</p>
            </div>

            <div className='work-image-container'>
              <img src={git} />
              <p>Git</p>
            </div>

            <div className='work-image-container'>
              <img src={github} />
              <p>GitHub</p>
            </div>

            <div className='work-image-container'>
              <img src={adobeillustrator} />
              <p>Adobe Illustrator</p>
            </div>

            <div className='work-image-container'>
              <img src={adobephotoshop} />
              <p>Adobe Photoshop</p>
            </div>

            <div className='work-image-container'>
              <img src={adobeaftereffects} />
              <p>Adobe After Effects</p>
            </div>

            <div className='work-image-container'>
              <img src={figma} />
              <p>Figma</p>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Work