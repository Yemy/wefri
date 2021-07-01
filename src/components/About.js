import React, { useState } from 'react'
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faTelegram, faYoutube, faLinkedin, faTiktok } from "@fortawesome/free-brands-svg-icons"
import ytchannel from '../ytchannel.PNG';
import wefri from '../wefri.jpg';
import music from '../music3.jpg'
import movie from '../movie2.jpg'
import documentary from '../documentary1.jpg'
import db from "../firebase";

const initialValues = {
    name: "",
    subject: "",
    email: "",
    message: "",
  };

function About() {

    const [values, setValues] = useState(initialValues);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value,
        });
      };

    const handleSubmit = (e) =>{
        alert('Your Message was Submitted. we will get Back to you Soon!');
        e.preventDefault();
        // db stuff
        db.collection("contacts").add({
            message: values.message,
            name: values.name,
            subject: values.subject,
            email: values.email,
        });
        setValues(initialValues);
        // e.target.reset();
        
    };    
    return (
        <div className="about">
            <section className="s2">
                <div className="main-container">
                <a name="about"></a>
                    <div className="about-wrapper">
                        <div className="about-me">
                            <h4>ABOUT US</h4>
                            <img id="profile-pic" src={wefri} />
                            <p>We design and develop real world projects to solve problems that i imagine  and i try to solve those problems by building tech projects, and build my vission project startups.</p>

                            <p>While I love discussing with others about tech and cs courses, I still take advantage of learning from others and i'm in search of a great team & projects to develop together that makes our world a better place to live.</p>


                            <hr/>
                            <a name="experience"></a>
                            <h4>EXPERIANCE</h4>

                            <p>Fullstack Web developer with Great Experience on Django, React, PHP
                                2D game dev with Pygame, and solving problems with Python, C, C++, Java and others</p>

                            <div id="skills">
                                <ul>
                                    <li>Python, Java, PHP, C, C++ </li>
                                    <li>Django, Pygame, ReactJs, </li>
                                    <li>Database, DataStructure, Algorithm, Cryptography, Operating Systems, Computer Networks</li>
                                    <li>AI, ML, DL, NNW</li>
                                    <li>Postgres, MySQL, sqlite, firebase</li>
                                    <li>and others</li>
                                </ul>

                                <ul>
                                    <li>Google APIs</li>
                                    <li>DRF</li>
                                    <li>Firebase</li>
                                    <li>Heroku</li>
                                    <li>HTML/CSS</li>
                                </ul>

                            </div>

                        </div>

                        <div className="social-links">
                            <img id="social_img" src={ytchannel} />  
                            <a name="services"></a>  
                            <div className="services">
                                <h4>SERVICES</h4>
                                <ul>
                                <li>Website Design & Development</li>
                                <li>Cs Courses and Tech Tips</li>
                                <li>2D Game design and Development</li>
                                <li>Final Projects</li>
                                <li>Mobile App Develpopment</li>
                                </ul>
                            </div>                       
                        </div>
                    </div>
                    

                </div>
            </section>

            <section className="s1">
                <div className="main-container"><a name="portfolio"></a>
                    <h3 style={{textAlign: "center" }}>Portfolios</h3>

                    <div className="post-wrapper">
                        <div>
                            <div className="post">
                                <img className="thumbnail" src={music} alt="music" />
                                <div className="post-preview">
                                    <h5 className="post-title"><span class="half-color" attribute="W">W</span>
                                        <span class="half-color" attribute="E">E</span>
                                        <span class="half-color" attribute="-">-</span>
                                        <span class="half-color" attribute="F">F</span>
                                        <span class="half-color" attribute="R">R</span>
                                        <span class="half-color" attribute="I">I</span><span> </span>Music Production</h5>
                                    <p className="post-intro">i developed this social networking site using reactjs for the frontend, firebase for backend, and google authentication system as signin method</p>
                                    <a style={{float: 'right'}} className="btn btn-success" href="https://addis-chat-70d75.web.app/">View</a>
                                </div>
                            </div>
                        </div>
                          
                    </div>
                    <div className="post-wrapper">
                        <div>
                            <div className="post">
                                <img className="thumbnail" src={movie} alt="movie" />
                                <div className="post-preview">
                                <h5 className="post-title"><span class="half-color" attribute="W">W</span>
                                    <span class="half-color" attribute="E">E</span>
                                    <span class="half-color" attribute="-">-</span>
                                    <span class="half-color" attribute="F">F</span>
                                    <span class="half-color" attribute="R">R</span>
                                    <span class="half-color" attribute="I">I</span><span> </span>Film Production</h5>
                                    <p className="post-intro">We_tok is a video sharing site that is built of reactjs and firebase-firestore, material-ui and flex box based on BEM</p>
                                    <a style={{float: 'right'}} className="btn btn-success" href="https://we-tok-48002.web.app/">View</a>
                                </div>
                            </div>
                        </div>                              
                    </div>
                    <div className="post-wrapper">
                        <div>
                            <div className="post">
                                <img className="thumbnail" src={documentary} alt="documentary" />
                                <div className="post-preview">
                                <h5 className="post-title"><span class="half-color" attribute="W">W</span>
                                    <span class="half-color" attribute="E">E</span>
                                    <span class="half-color" attribute="-">-</span>
                                    <span class="half-color" attribute="F">F</span>
                                    <span class="half-color" attribute="R">R</span>
                                    <span class="half-color" attribute="I">I</span><span> </span>Documentary</h5>
                                    <p className="post-intro">i developed this social networking site using reactjs for the frontend, firebase for backend, and google authentication system as signin method</p>
                                    <a  style={{float: 'right'}} className="btn btn-success" href="https://addis-chat-70d75.web.app/">View</a>
                                </div>
                            </div>
                        </div>
                          
                    </div>
                </div>
            </section>

            <section className="s2">
                <div className="main-container">
                    <a href=""></a>
                    <h3 style={{textAlign: "center" }}>Contact Us</h3>

                    <form id="contact-form">
                        <a name="contact"></a>

                        <label>Name</label>           
                        <input className="input-field" type="text" value={values.name} onChange={handleInputChange} name="name" placeholder="Your Name" />

                        <label>Subject</label>
                        <input className="input-field" type="text" value={values.subject} onChange={handleInputChange} name="subject" placeholder="eg: music, movie, film, documentary, etc" />

                        <label>Email</label>
                        <input className="input-field" type="text" value={values.email} onChange={handleInputChange} name="email" placeholder="Your Email Address" />

                        <label>Message</label>
                        <textarea className="input-field" value={values.message} onChange={handleInputChange} name="message" placeholder="Type Your Message Here" ></textarea>

                        <input onClick={handleSubmit} id="submit-btn" type="submit" value="Send" />
                    </form>
                </div>
                <div className="social-links yemi">
                    <h4>Contact Us on</h4>
                            <a target="_blank" href="https://www.instagram.com/yemibold"><FontAwesomeIcon icon={ faInstagram } style={{ color: "#833AB4" }} /></a>
                            <a target="_blank" href="https://www.facebook.com/profile.php?id=100008676510573"><FontAwesomeIcon icon={ faFacebook } style={{ color: "#4267B2" }} /></a>
                            <a target="_blank" href="https://www.twitter.com/yemybold"><FontAwesomeIcon icon={ faTwitter } style={{ color: "#1DA1F2" }} /></a>
                            <a target="_blank" href="https://www.youtube.com/channel/UCxa31O0v4EtW66JeHWAUQkQ"><FontAwesomeIcon icon={ faYoutube } style={{ color: "#E62117" }} /></a>
                            <a target="_blank" href="www.linkedin.com/yemanebirhane"><FontAwesomeIcon icon={ faLinkedin } style={{ color: "#OE76A8" }} /></a>
                            <a target="_blank" href="https://www.tiktok.com/@ybg0405?lang=en"><FontAwesomeIcon icon={ faTiktok } style={{ color: "#EE1D52" }} /></a>
                        </div>                                    
            </section> 
            <div className="copy">
                            <p>@cpy Fullstack Web developer with Great Experience on Django, React, PHP
                                2D game dev with Pygame, and solving problems with Python</p>
                        </div>
        </div>
    )
}

export default About
