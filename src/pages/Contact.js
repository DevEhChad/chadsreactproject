import React from "react";
import TrainLeft from "../assets/1132066.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact</title>
        <link rel="canonical" href="https://ehchadservices.com/contact" />
      </Helmet>
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${TrainLeft})` }}
      ></div>
      <div className="rightSide">
        <h1>*Page Currently Doesn't Work*</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;