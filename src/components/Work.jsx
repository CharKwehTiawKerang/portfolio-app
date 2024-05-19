import React from 'react'
import Rotate from 'react-reveal/Rotate';

import comingsoon from '../assets/comingsoon.png'
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


        </div>

        <div className="frameworks-wrapper">
          <p className='frameworks-title'>Frameworks <span className='crystal'>&</span> Libraries</p>

          <div className="work-container">
            <span className='work-image-container'>
              <img src={nodejs} />
            </span>

            <span className='work-image-container'>
              <img src={npm} />
            </span>

            <span className='work-image-container'>
              <img src={express} />
            </span>

            <span className='work-image-container'>
              <img src={bootstrap} />
            </span>

            <span className='work-image-container'>
              <img src={laravel} />
            </span>

            <span className='work-image-container'>
              <img src={reactjs} />
            </span>

            <span className='work-image-container'>
              <img src={jupyter} />
            </span>
          </div>
        </div>

        <div className="tools-wrapper">
          <p className='tools-title'>Tools</p>

          <div className="work-container">
            <span className='work-image-container'>
              <img src={vite} />
            </span>

            <span className='work-image-container'>
              <img src={postman} />
            </span>

            <span className='work-image-container'>
              <img src={dbeaver} />
            </span>

            <span className='work-image-container'>
              <img src={git} />
            </span>

            <span className='work-image-container'>
              <img src={github} />
            </span>

            <span className='work-image-container'>
              <img src={adobeillustrator} />
            </span>

            <span className='work-image-container'>
              <img src={adobephotoshop} />
            </span>

            <span className='work-image-container'>
              <img src={adobeaftereffects} />
            </span>

            <span className='work-image-container'>
              <img src={figma} />
            </span>
          </div>
        </div>

      </div>
    </>
  )
}

export default Work