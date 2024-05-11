import React, { useState } from 'react'
import { Form, Input, Typography } from 'antd'
import emailjs from '@emailjs/browser'

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);

    const sendEmail = (e) => {
        // e.persist();
        e.preventDefault();
        setIsSubmitting(true);

        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            e.target,
            process.env.REACT_APP_PUBLIC_KEY
        ).then(
            (result) => {
                setStateMessage('Message sent!');
                setIsSubmitting(false);
                setTimeout(() =>  {
                    setStateMessage(null);
                }, 5000); // hide message after 5 seconds
            }, (error) => {
                setStateMessage('Something went wrong, please try again later');
                setIsSubmitting(false);
                setTimeout(() =>  {
                    setStateMessage(null);
                }, 5000); // hide message after 5 seconds
            }
        );

        e.target.reset();
    }

  return (
    <Form onSubmit={sendEmail}>
        
    </Form>
  )
}

export default ContactForm