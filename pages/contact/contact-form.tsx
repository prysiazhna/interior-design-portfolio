'use client';

import React, { useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { sendEmail, validateForm } from "../../utils/emailHelpers";
import { motion } from "framer-motion";

const FormWrapper = styled(motion.form)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  max-width: 700px;
  width: 100%;
`;

const InputField = styled(motion.input)`
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

const TextAreaField = styled(motion.textarea)`
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

const SubmitButton = styled(motion.button)`
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

    const fieldVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <FormWrapper
            onSubmit={handleSubmit}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 1.6, ease: "easeOut", staggerChildren: 0.2 } },
            }}
        >
            <InputField
                type="text"
                name="name"
                placeholder="Your name"
                value={name}
                onChange={handleInputChange}
                variants={fieldVariants}
            />
            <InputField
                type="tel"
                name="phone"
                placeholder="Your phone number"
                value={phone}
                onChange={handleInputChange}
                variants={fieldVariants}
            />
            <TextAreaField
                name="message"
                placeholder="Message"
                value={message}
                onChange={handleInputChange}
                variants={fieldVariants}
            />
            <SubmitButton type="submit" variants={fieldVariants}>
                Submit
            </SubmitButton>
        </FormWrapper>
    );
};

export default ContactForm;