import React, { useState } from "react";
import styled from "styled-components";

const FormWrapper = styled.form`
  display: grid;
  grid-template-columns: 1fr;

  gap: 16px;
  max-width: 700px;
  width: 100%;
  
  input, textarea {
    width: 100%;
    padding: 12px 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    background: #181c1c;
    color: white;
  }

  textarea {
    height: 120px;
    resize: none;
  }

  button {
    padding: 12px 16px;
    background-color: rgb(0 178 235);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 26px;
    transition: background 0.3s;
    
    &:hover {
      opacity: 0.8;
    }
    
    &:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }
  }
`;

const ContactForm: React.FC = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setIsSubmitting(true);
        console.log('Form submitted:', { name, phone, message });

        setTimeout(() => {
            setIsSubmitting(false);
        }, 2000);
    };

    const isFormValid = name && phone && message;

    return (
        <FormWrapper onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="tel"
                placeholder="Your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
            />
            <textarea
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
            />
            <button type="submit" disabled={!isFormValid || isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
            </button>
        </FormWrapper>
    );
};

export default ContactForm;
