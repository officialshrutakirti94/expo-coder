import React, { useState } from 'react';
import styles from '@/styles/home.module.css'

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (you can add API calls or other logic)
    console.log('Form submitted:', { name, email, message });
  };

  return (
    <div className={styles.contact_container}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className={styles.contact_form}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
