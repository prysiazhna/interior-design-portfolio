import emailjs from "@emailjs/browser";

const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string;
const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;

export const initializeEmailJS = () => {
    if (!userID) throw new Error("EmailJS User ID is missing.");
    emailjs.init(userID);
};

export const sendEmail = async (data: { name: string; phone: string; message: string }) => {
    if (!serviceID || !templateID) {
        throw new Error("EmailJS service or template ID is missing.");
    }

    try {
        initializeEmailJS();
        await emailjs.send(serviceID, templateID, {
            from_name: data.name,
            from_phone: data.phone,
            message: data.message,
        });
    } catch (error) {
        throw new Error("Email sending failed.");
    }
};

export const validateForm = (data: { name: string; phone: string; message: string }) => {
    const { name, phone, message } = data;
    return name.trim() !== "" && phone.trim() !== "" && message.trim() !== "";
};