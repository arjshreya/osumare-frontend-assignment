import React from "react";
import "./ContactForm.css";

const ContactForm=()=>{
    return(
        <section id="contact" className="contact">
            <h2>Contact</h2>
            <form>
                <input type="text" placeholder="Your Name" required/>
                <input type="email" placeholder="Email Address" required/>
                <textarea placeholder="Youe Message" required></textarea>
                <button type="submit" className="btn">Send Message</button>
            </form>
        </section>

    );
};
export default ContactForm;