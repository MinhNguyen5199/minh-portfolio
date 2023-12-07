"use server"
import { Resend } from "resend";
import ContactFormEmail from "../email/contact-form-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

const validateString = (value: unknown, maxLength: number) => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }
  return true;
};

export const sendEmail = async (formData: FormData) => {
  
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }
  let data;
  try {
    data = await resend.emails.send({
      from: "Contact From Your Portfolio <onboarding@resend.dev>",
      to: "hoangminhabc11@gmail.com",
      subject: "Contact from your portfolio",
      reply_to: senderEmail as string,
      //text: message as string,
      react: React.createElement(ContactFormEmail, {message: message as string, senderEmail: senderEmail as string}),
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        error: error.message,
      };
    } else if (error && typeof error === "object" && "message" in error) {
      return {
        error: error.message,
      };
    } else{
      return {
        error: "Unknown error",
      };
    }
  }
return{
  data,
}
  };
