import React, { useState, useRef } from 'react'
import { Form, Input } from 'antd'
import emailjs from '@emailjs/browser'

const ContactForm = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);

    const sendEmail = (e) => {
        console.log('MASUK!');
        setIsSubmitting(true);

        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            form.current,
            { 
                publicKey: import.meta.env.VITE_PUBLIC_KEY 
            }).then(
                () => {
                  console.log('SUCCESS!');
                },
                (error) => {
                  console.log('FAILED...', error.text);
                },
              );

    }

  return (
    <Form className='contact-form' ref={form} onFinish={sendEmail} layout='vertical' autoComplete='off'>
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
    </Form>
  )
}

export default ContactForm