"use client";
import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useSectionInView } from "../lib/hook";
import { sendEmail } from "../actions/sendEmail";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.5);
  

  return (
    <div ref={ref} id="contact" className="bg-[#22252c] ">
      <p className="text-center pt-[5rem] pb-[5rem] font font-bold text-4xl bg-gradient-to-r  from-[#00f298] to-[#07f7f7] bg-clip-text text-transparent">
        Contact Me
      </p>
      <form
        className="flex flex-col lg:m-auto lg:w-[50%]"
        action={async (formData) => {
          const {data, error} = await sendEmail(formData);

          if (error) {
            alert(error);
            return;
          }
          alert("Email sent successfully!");
        }}
      >
        <input
          className="h-14 mb-2 p-4 rounded-lg border border-black/10 bg-gray-600 text-lg text-white placeholder:text-white
          focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
          type="email"
          placeholder="Email"
          maxLength={500}
          required
          name="senderEmail"
        />
        <textarea
          className=" h-52 my-3 text-white rounded-lg p-4 border border-black/10 bg-gray-900 text-lg placeholder:text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
          placeholder="Message"
          required
          name="message"
          maxLength={5000}
        />
        <button
          type="submit"
          className="group h-[3rem] border border-red w-[8rem] bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold text-xl flex items-center justify-center self-center outline-none focus:outline-none hover:shadow-[0_2px_20px_5px_#9C27B0;] hover:shadow-purple-500 text-black transition-all duration-300 ease-in-out gap-1 hover:scale-110 my-[2rem]"
        >
            Submit
          <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </form>
    </div>
  );
}
