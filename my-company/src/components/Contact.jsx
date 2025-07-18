import React, { useState } from 'react';

// Define the Contact functional component.
function Contact() {
  // State to manage form data.
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // State to manage the visibility and content of the submission message.
  const [submissionMessage, setSubmissionMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  // Handle changes in form input fields.
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission.
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior (page reload).
    // In a real application, you would send this data to a server.
    console.log('Form Data Submitted:', formData);
    setSubmissionMessage('Thank you for your message! We will get back to you soon.');
    setShowMessage(true); // Show the custom message box.

    // Optionally, clear the form after submission
    setFormData({ name: '', email: '', message: '' });

    // Hide the message after a few seconds
    setTimeout(() => {
      setShowMessage(false);
      setSubmissionMessage('');
    }, 5000); // Message disappears after 5 seconds
  };

  // Inline styles for the page container.
  const pageStyle = {
    padding: '40px',
    textAlign: 'center',
    backgroundColor: '#fff3e0',
    minHeight: 'calc(100vh - 120px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  };

  // Inline styles for the form container.
  const formContainerStyle = {
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    maxWidth: '500px',
    width: '100%',
    margin: '0 auto'
  };

  // Inline styles for input fields.
  const inputStyle = {
    display: 'block',
    width: 'calc(100% - 20px)', // Account for padding
    padding: '12px 10px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '1em'
  };

  // Inline styles for the textarea.
  const textareaStyle = {
    ...inputStyle, // Inherit input styles
    resize: 'vertical', // Allow vertical resizing
    minHeight: '100px'
  };

  // Inline styles for the submit button.
  const buttonStyle = {
    backgroundColor: '#ff6f00', // Orange color
    color: 'white',
    border: 'none',
    padding: '12px 25px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1.1em',
    fontWeight: 'bold',
    marginTop: '20px',
    transition: 'background-color 0.3s ease'
  };

  // Style for the custom message box.
  const messageBoxStyle = {
    backgroundColor: '#d4edda', // Light green for success
    color: '#155724',           // Dark green text
    border: '1px solid #c3e6cb',
    borderRadius: '5px',
    padding: '15px',
    marginTop: '20px',
    fontSize: '1.1em',
    fontWeight: 'bold',
    textAlign: 'center',
    display: showMessage ? 'block' : 'none' // Show/hide based on state
  };

  return (
    <div style={pageStyle}>
      <h1 style={{ color: '#ff6f00', fontSize: '2.8em', marginBottom: '25px' }}>Contact Us</h1>
      <div style={formContainerStyle}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
            required // Make field mandatory
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            style={textareaStyle}
            required
          />
          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={e => e.currentTarget.style.backgroundColor = '#e65100'} // Darker orange on hover
            onMouseOut={e => e.currentTarget.style.backgroundColor = '#ff6f00'} // Original orange
          >
            Send Message
          </button>
        </form>
        {/* Custom message box for form submission */}
        <div style={messageBoxStyle}>
          {submissionMessage}
        </div>
      </div>
    </div>
  );
}

export default Contact;
