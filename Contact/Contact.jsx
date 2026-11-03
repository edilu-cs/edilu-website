import React from "react";
import linux from "./Linux logo.jfif";
import envelope from "./envelope.png";
import round from "./round.png";
import telephone from "./telephone.png";

function Contact(){
    return(
     <>
     <div id="contact">

<div>
    <h2 id="idea">Have an idea?</h2>

    <p id="letsgo">Let's build something amazing.</p>

    <p id="description">
        Have a project in mind or need a professional website
        for your business? I'm ready to help turn your ideas
        into modern, responsive, and user-friendly web
        experiences. Let's discuss your project and create
        something meaningful together.
    </p>

    <div id="contact-icons">
        <a href="mailto:ediludemissie2@gmail.com">
            <img src={envelope} alt="Email" id="envelope" />
        </a>

        <a href="https://t.me/Asaph1" target="_blank" rel="noreferrer">
            <img src={round} alt="Telegram" id="round" />
        </a>

        <a href="tel:+251968040334">
            <img src={telephone} alt="Telephone" id="telephone" />
        </a>
    </div>
</div>

          <div id="contact-form">
             <p id="message">Send a message</p>
             <p id="name">your name:</p>
             <input type="text" placeholder="your name"></input>
             <p id="email">Email address:</p>
             <input type="email" placeholder="youremail@example.com" id="email-input"></input>
             <p id="project1">Tell me about your project</p>
             <textarea placeholder="describe your project"></textarea>
             <button id="send-message">Send Message</button>
          </div>
     </div>
         <div id="footer">
            <p>&copy; 2025 Edilu Demissie. All rights reserved.</p>
          </div>
     </>
    );
}

export default Contact;