import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us 💙💛</h1>
      <p className="contact-description">
        If you have any questions, feel free to reach out to us! Below are some contacts you can use to get in touch with our team.
      </p>

      <div className="contact-list">
        <div className="contact-card">
          <h2 className="contact-name">John Doe</h2>
          <p className="contact-role">Founder</p>
          <p className="contact-email">johndoe@example.com</p>
          <p className="contact-phone">+1 234 567 890</p>
        </div>
        <div className="contact-card">
          <h2 className="contact-name">Jane Smith</h2>
          <p className="contact-role">Community Manager</p>
          <p className="contact-email">janesmith@example.com</p>
          <p className="contact-phone">+1 234 567 891</p>
        </div>
        <div className="contact-card">
          <h2 className="contact-name">Robert Johnson</h2>
          <p className="contact-role">Support Specialist</p>
          <p className="contact-email">robertjohnson@example.com</p>
          <p className="contact-phone">+1 234 567 892</p>
        </div>
        <div className="contact-card">
          <h2 className="contact-name">Emily Davis</h2>
          <p className="contact-role">Content Creator</p>
          <p className="contact-email">emilydavis@example.com</p>
          <p className="contact-phone">+1 234 567 893</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
