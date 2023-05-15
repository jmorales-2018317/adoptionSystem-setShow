import React from 'react'
import './HomeStyle.css'
import video from '../../assets/mp4/bg.mp4'
import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (
    <>

    <video className="bg-video" playsInline="playsinline" autoPlay="autolay" muted="muted" loop="loop"><source src={video} type="video/mp4" /></video>
    
    <div className="masthead">
                <div className="masthead-content text-white">
                    <div className="container-fluid px-4 px-lg-0">
                        <h1 className="fst-italic lh-1 mb-4">Welcome</h1>
                        <p className="mb-5">We're working hard to finish the development of this site. Sign up below to receive updates and to be notified when we launch!</p>
                        
                        <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                            
                            <div className="row input-group-newsletter">
                                <div className="col"><input className="form-control" id="email" type="email" placeholder="Enter email address..." aria-label="Enter email address..." data-sb-validations="required,email" /></div>
                                <div className="col-auto"><button className="btn btn-primary disabled" id="submitButton" type="submit">Notify Me!</button></div>
                            </div>
                            <div className="invalid-feedback mt-2" data-sb-feedback="email:required">An email is required.</div>
                            <div className="invalid-feedback mt-2" data-sb-feedback="email:email">Email is not valid.</div>
                            
                            <div className="d-none" id="submitSuccessMessage">
                                <div className="text-center mb-3 mt-2">
                                    <div className="fw-bolder">Form submission successful!</div>
                                    To activate this form, sign up at
                                    <br />
                                    <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                </div>
                            </div>
                            
                            <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3 mt-2">Error sending message!</div></div>
                        </form>
                    </div>
                </div>
            </div>
           
            <div className="social-icons">
                <div className="d-flex flex-row flex-lg-column justify-content-center align-items-center h-100 mt-3 mt-lg-0">
                    <Link to='/register' className="btn btn-dark m-3" >
                        <i className="fa-solid fa-user-plus"></i>
                    </Link>
                    <Link to='/login' className="btn btn-dark m-3">
                        <i className="fa-solid fa-right-to-bracket"></i>
                    </Link>
                </div>
            </div>
           
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
           
            <script src="js/scripts.js"></script>
            
            <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
    
        </>
  )
}
