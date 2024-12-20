'use client';

import React, { useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import {sendEmail, validateForm} from "../../utils/emailHelpers";

const FormWrapper = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  max-width: 700px;
  width: 100%;
`;

const InputField = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid white;
  border-radius: 4px;
  font-size: 16px;
  background: var(--main-color-bg);
  color: white;
  box-shadow: 0 4px 6px rgba(255, 255, 255, 0.1);

  &::placeholder {
    opacity: 0.6;
    color: white;
  }
`;

const TextAreaField = styled.textarea`
  width: 100%;
  height: 120px;
  padding: 12px 16px;
  border: 1px solid white;
  border-radius: 4px;
  font-size: 16px;
  background: var(--main-color-bg);
  color: white;
  resize: none;
  box-shadow: 0 4px 6px rgba(255, 255, 255, 0.1);

  &::placeholder {
    opacity: 0.6;
    color: white;
  }
`;

const SubmitButton = styled.button`
  padding: 12px 16px;
  background-color: var(--main-color);
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
  }
`;

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
    const { name, phone, message } = formData;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const isValid = validateForm(formData);
        if (!isValid) {
            toast.error("Please fill in all required fields correctly.");
            return;
        }

        try {
            await sendEmail({ name, phone, message });
            toast.success("Email sent successfully!");
            setFormData({ name: "", phone: "", message: "" });
        } catch (error) {
            toast.error("Failed to send email. Please try again later.");
        }
    };

    return (
        <FormWrapper onSubmit={handleSubmit}>
            <InputField
                type="text"
                name="name"
                placeholder="Your name"
                value={name}
                onChange={handleInputChange}
            />
            <InputField
                type="tel"
                name="phone"
                placeholder="Your phone number"
                value={phone}
                onChange={handleInputChange}
            />
            <TextAreaField
                name="message"
                placeholder="Message"
                value={message}
                onChange={handleInputChange}
            />
            <SubmitButton type="submit" >
                Submit
            </SubmitButton>
        </FormWrapper>
    );
};
export default ContactForm;
