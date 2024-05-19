import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import { Form, Input } from 'antd'
import Fade from 'react-reveal/Fade';
import emailjs from '@emailjs/browser'
import Lottie from 'lottie-web'

import Mail from '../animations/mail.json'
import SubmitForm from '../animations/submit-form.json'

const ContactForm = () => {
    const form = useRef();
    const submitFormAnimationContainer = useRef();

    const [sendMail, setSendMail] = useState(false);

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          'form',
          { 
              publicKey: import.meta.env.VITE_PUBLIC_KEY 
          }).then(
              () => {
                console.log('SUCCESS!');
                setSendMail(true);
              },
              (error) => {
                console.log('FAILED...', error);
              },
            );

      e.target.reset();
    };

    const handleSubmitForm = () => {
      form.current.requestSubmit(); // Programmatically submit the form
    };

    useEffect(() => {
      var mailId = document.getElementById('mail');

      const mailAnimation = Lottie.loadAnimation({
        container: mailId,
        renderer: "svg",
        loop: false,
        autoplay: false,
        prerender: true,
        animationData: Mail
      });

      const submitFormAnimation = Lottie.loadAnimation({
        container: submitFormAnimationContainer.current,
        animationData: SubmitForm
      })

      return () => {
        //avoid duplicate animations
        submitFormAnimation.destroy();
        mailAnimation.destroy();
      }
    }, [])

  return (
    <>
      <p className='contact-subtitle'>Send me a message... </p>

      <form className='form-contact' ref={form} onSubmit={sendEmail}>
        <Fade right>
          <label><span>*</span> Name</label>
          <input className='crystal-box-input' type="text" name="name" placeholder='Your Name' required onInvalid={e => e.target.setCustomValidity("Name is required")} onInput={e => e.target.setCustomValidity('')}/>
        </Fade>

        <Fade right delay={200}>
          <label><span>*</span> Contact Number</label>
          <input className='crystal-box-input' type="number" name="phone" placeholder='+60' required onInvalid={e => e.target.setCustomValidity("Contact Number is required")} onInput={e => e.target.setCustomValidity('')}/>
        </Fade>

        <Fade right delay={300}>
          <label><span>*</span> Email</label>
          <input className='crystal-box-input' type="email" name="email" placeholder='name@company.com' required onInvalid={e => e.target.setCustomValidity("Email is required")} onInput={e => e.target.setCustomValidity('')}/>
        </Fade>

        <Fade right delay={400}>
          <label><span>*</span> Subject</label>
          <input className='crystal-box-input' type="text" name="subject" placeholder='Title' required onInvalid={e => e.target.setCustomValidity("Title cannot be blank")} onInput={e => e.target.setCustomValidity('')}/>
        </Fade>

        <Fade right delay={500}>
          <label><span>*</span> Message</label>
          <textarea className='crystal-box-input' name="message" maxLength="1000" placeholder='Maximum 1000 letters' required onInvalid={e => e.target.setCustomValidity("Leave us a message...")} onInput={e => e.target.setCustomValidity('')}/>
        </Fade>

        {sendMail && (<p className='mail-message'>Message has been sent, I will reply to you as soon as possible.</p>)}

        <Fade right delay={600}>
          <Link className='submit-contact animation-button-wrapper' ref={submitFormAnimationContainer} role="button" onClick={handleSubmitForm}></Link>
        </Fade>
      </form>

      {/* <Form id="data" className='contact-form' onFinish={sendEmail} layout='vertical' autoComplete='off'>
          <Form.Item
              label="NAME"
              name="name"
              rules={[
                  {
                      required: true,
                      message: 'Please fill in your name.',
                  },
              ]}
          >
              <Input placeholder='Your Name'/>
          </Form.Item>

          <Form.Item
              label="CONTACT NUMBER"
              name="phone"
              rules={[
                  {
                      required: true,
                      message: 'Please fill in your contact number.',
                  },
              ]}
          >
              <Input placeholder='+60' type='number'/>
          </Form.Item>

          <Form.Item
              label="EMAIL"
              name="email"
              rules={[
                {
                  type: 'email',
                  required: true,
                  message: 'The input is not valid email format.',
                },
              ]}
          >
              <Input placeholder='name@company.com'/>
          </Form.Item>

          <Form.Item
              label="SUBJECT"
              name="subject"
              rules={[
                {
                  required: true,
                  message: "Can't submit an empty topic.",
                },
              ]}
          >
              <Input placeholder='Title'/>
          </Form.Item>

          <Form.Item
              label="MESSAGE"
              name="message"
              rules={[
                {
                  required: true,
                  message: "Can't submit an empty message.",
                },
              ]}
          >
              <Input.TextArea showCount maxLength={1000} placeholder='Maximum 1000 letters'/>
          </Form.Item>

          <Form.Item
              wrapperCol={{
                  offset: 8,
                  span: 16,
              }}
          >
              <button className='submit-contact' disabled={isSubmitting}>SUBMIT</button>
              { stateMessage && <p className='error-submit'>{stateMessage}</p> }
          </Form.Item>
      </Form> */}
    </>
  )
}

export default ContactForm