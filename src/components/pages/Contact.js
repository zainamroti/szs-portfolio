import React, { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
// import Button from 'react-bootstrap/Modal'

import { contact, social } from '../../profile'
import { ValidationError, useForm } from '@formspree/react';

const Contact = () => {
    const [state, handleSubmit] = useForm('mbjppepk', contact.contactUrl);
    const [formState, setFormState] = useState({ "firstname": "", "email": "", "subject": "", "message": "" });
    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClick = (e) => {
        // console.log("Handling .... click", handleSubmit)
        handleSubmit(e)
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        // console.log(name, value)
        setFormState((prevState) => {
            return {
                ...prevState,
                [name]: value,
            }
        });
    }

    useEffect(() => {
        if (state.succeeded) {
            handleShow()
        }
    }, [state.succeeded])


    return (
        <div className="parallax">
            <div data-aos="zoom-in-up" data-aos-once="true" className="git-form">
                <center>
                    <div className="git-head-div">
                        <h1 id="Contact" className="git-head">Get in touch</h1>
                    </div>
                </center>
                <div className="container">
                    <div className="git-cont row">
                        <div className="col-12 col-sm-6 half">
                            {/* //  action={contact.contactUrl ? contact.contactUrl : "https://formspree.io"} method={contact.contactUrl ? "POST" : "GET"}> */}
                            <form onSubmit={handleClick} action={contact.contactUrl ? contact.contactUrl : "https://formspree.io"} method={contact.contactUrl ? "POST" : "GET"}>
                                <input onChange={handleChange} type="text" id="fname" name="firstname" placeholder="Your name" value={state.succeeded ? "" : formState.firstname} required></input>
                                <input onChange={handleChange} type="mail" id="mailid" name="email" placeholder="Email Address" value={state.succeeded ? "" : formState.email} required></input>
                                <input onChange={handleChange} type="text" id="sub" name="subject" placeholder="Subject" value={state.succeeded ? "" : formState.subject} required></input>
                                <textarea onChange={handleChange} id="msg" name="message" placeholder="Message" value={state.succeeded ? "" : formState.message} required></textarea>
                                <button type="submit" disabled={state.submitting} style={{ cursor: 'pointer' }}  > <span style={{ cursor: 'pointer' }} id="not-dark">Send Message</span></button>
                                <ValidationError field="email" prefix="Email" errors={state.errors} />
                                {/* {
                                    (state.succeeded) ? handleShow : ""
                                } */}
                                {/* <p>Thank you for Contacting me. I will get back to you.</p> : "" */}
                            </form>


                        </div>
                        <div className="col-12 col-sm-6 half">
                            <p className="lead">
                                {contact.pitch}
                            </p>
                            <center>
                                <div className="inline-block">
                                    {social.linkedin && <a title="Visit Linkedin profile" rel="noopener noreferrer" target="_blank" href={social.linkedin}><i className="fab fa-linkedin"></i></a>}
                                    {social.facebook && <a title="Visit Facebok profile" rel="noopener noreferrer" target="_blank" href={social.facebook}><i className="fab fa-facebook"></i></a>}
                                    {social.instagram && <a title="Visit Instagram profile" rel="noopener noreferrer" target="_blank" href={social.instagram}><i className="fab fa-instagram"></i></a>}
                                    {social.github && <a title="Visit Github profile" rel="noopener noreferrer" target="_blank" href={social.github}><i className="fab fa-github"></i></a>}<br />
                                    {social.resume && <a title="Download Resume" href={social.resume} download><i className="fas fa-download"></i></a>}
                                </div>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
            <p id="not-dark" className="Copy">2020 © Copyright <strong>{contact.copyright}</strong>. All Rights Reserved</p>
            {/* Showing the model on success on form submittion */}
            {/* Thank you for Contacting me. I will get back to you soon. */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{"Sent"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{"Thank you for Contacting me. I will get back to you soon."}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button>
                </Modal.Footer>
            </Modal>
        </div>)

}

export default Contact
