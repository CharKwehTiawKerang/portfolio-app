import React from 'react'
import { Link } from 'react-router-dom'
import Rotate from 'react-reveal/Rotate';

import comingsoon from '../assets/comingsoon.png'

const Contact = () => {
  return (
    <>
      <div className='contact-wrapper'>
        <p className='contact-title'>Get in touch with me</p>
        {/* <Rotate top left delay={400}>
          <img src={comingsoon} alt="Coming Soon" className='coming-soon'/>
        </Rotate> */}

        {/* FORM */}
        <div className="get-in-touch-wrapper">
          <div className="info-section-wrapper">
            <p className='info-title sub-title'>Contact Info</p>
            <p>Phone - +6010-302 0168</p>
            <p>Email - takamagahara16@gmail.com</p>
            <p>Location - Kuala Lumpur, Malaysia</p> 
          </div>

          <div className="socmed-section-wrapper">
            <p className='socmed-title sub-title'>Social Media</p>
            <Link to='https://wa.me/60103020168' target='_blank'>+60 10-302 0168</Link>
            <Link to='https://github.com/CharKwehTiawKerang' target='_blank'>CharKwehTiawKerang</Link>
            <Link to='https://www.instagram.com/_h_sugi/' target='_blank'>_h_sugi</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact