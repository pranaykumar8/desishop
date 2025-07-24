import { useState } from 'react';
import './ReactiveForm.css';

const ReactiveForm = ({ onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Form Submitted!');
    onClose();
  };

  return (
    <div className="form-overlay">
      <div className="form-container">
        <h2>Service Booking Form</h2>
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Your Name" onChange={handleChange} required />
          <input name="email" type="email" placeholder="Your Email" onChange={handleChange} required />
          <textarea name="message" placeholder="Message" onChange={handleChange}></textarea>
          <div className="form-buttons">
            <button type="submit">Submit</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReactiveForm;
