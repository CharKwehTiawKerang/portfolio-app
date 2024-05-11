import React from 'react'
import { Link } from 'react-router-dom'
import Rotate from 'react-reveal/Rotate';
import ContactForm from './ContactForm'

import Phone from '../assets/phone.svg';
import Gmail from '../assets/gmail.svg';
import GoogleMaps from '../assets/googlemaps.svg';
import Whatsapp from '../assets/whatsapp.svg';
import GitHub from '../assets/github.svg';
import Instagram from '../assets/instagram.svg';

const Contact = () => {
  return (
    <>
      <div className='contact-wrapper'>
        <p className='contact-title'>Get in touch with me</p>
        
        <ContactForm />

        <div className="get-in-touch-wrapper">
          <div className="info-section-wrapper">
            <p className='info-title sub-title'>Contact Info</p>
            <div className='info'>
              <p id='phone'><img src={Phone}/> +6010-302 0168</p>
              <p id='gmail'><img src={Gmail}/> harizstyles56@gmail.com</p>
              <p id='googlemaps'><img src={GoogleMaps}/> Kuala Lumpur, Malaysia</p> 
            </div>
          </div>

          <div className="socmed-section-wrapper">
            <p className='socmed-title sub-title'>Social Media</p>
            <Link id='whatsapp' to='https://wa.me/60103020168' target='_blank'><img src={Whatsapp}/> +60 10-302 0168</Link>
            <Link id='github' to='https://github.com/CharKwehTiawKerang' target='_blank'><img src={GitHub}/> CharKwehTiawKerang</Link>
            <Link id='instagram' to='https://www.instagram.com/_h_sugi/' target='_blank'><img src={Instagram}/> _h_sugi</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact