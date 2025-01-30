import React, { useState } from 'react'
import './contact.css'

export default function Contact() {
    // Form state management
    const initialState = {
        name: '',
        email: '',
        message: ''
    };

    const [formData, setFormData] = useState(initialState);
    const isFormValid = Object.values(formData).every(value => value.trim());

    // Event handlers
    const handleChange = ({ target: { name, value } }) => {
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <div>
            <div className="about-container">
                <h1 className="about-title">Contact</h1>
            </div>
            
            <div className="contact-content">
                <div className="contact-form">
                    <h2>Send Message</h2>
                    <form action="https://api.web3forms.com/submit" method="POST" onSubmit={handleSubmit}>
                        {/* Name Input */}
                        <input type="hidden" name="access_key" value="844907f3-1326-447c-91d3-2aa2f093f074"></input>
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="name"
                                placeholder="Your Name" 
                                value={formData.name}
                                onChange={handleChange}
                                required 
                            />
                        </div>
                        {/* Email Input */}
                        <div className="form-group">
                            <input 
                                type="email" 
                                name="email"
                                placeholder="Your Email" 
                                value={formData.email}
                                onChange={handleChange}
                                required 
                            />
                        </div>
                        {/* Message Input */}
                        <div className="form-group">
                            <textarea 
                                name="message"
                                placeholder="Your Message" 
                                rows="5" 
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {/* Submit Button */}
                        <button 
                            type="submit" 
                            className={`submit-btn ${!isFormValid ? 'disabled' : ''}`}
                            disabled={!isFormValid}
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
