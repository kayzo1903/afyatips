"use client";
import React, { useEffect, useState } from "react";
import SubmitMessage from "./SubmitMessage";

// Import statements...

const ContactsForm = () => {
    const [customerInfo, setCustomerInfo] = useState({
      userEmail: "",
      userMessage: "",
    });
    const [message, setMessage] = useState(null);
  
    const handleForm = (e) => {
      const { name, value } = e.target;
      setCustomerInfo((prev) => ({ ...prev, [name]: value }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();

      const {userEmail , userMessage} = customerInfo
  
      try {
        const resp = await fetch("/api", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userEmail , userMessage
          }),
        });
  
        if (resp.ok) {
          setMessage("Your message was successfully sent to afyatips");
          setCustomerInfo({ userEmail: "", userMessage: "" });
        } else {
          const errorMessage = await resp.text();
          setMessage(`Oops, something went wrong: ${errorMessage}`);
        }
      } catch (error) {
        console.error("Error during form submission:", error);
        setMessage("Oops, something went wrong");
      }
    };
  
    if (message) {
      return (
        <div className="w-full">
          <SubmitMessage pass={message} />
        </div>
      );
    } else {
      return (
        <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
          <input
            type="email"
            name="userEmail"
            id="userEmail"
            placeholder="Email address"
            onChange={handleForm}
            className="outline-none bg-main border-gray-500 border-[1px] rounded-sm text-gray-500 py-2 px-2"
            required
          />
          <textarea
            name="userMessage"
            id="userMessage" 
            cols="30"
            rows="10"
            placeholder="What can we help with"
            onChange={handleForm}
            required
            className="outline-none border-gray-500 border-[1px] rounded-sm text-gray-500 py-2 px-2"
          ></textarea>
          <button
            type="submit"
            className="py-2 rounded-md w-full text-center text-white bg-skin hover:shadow-lg transition-all duration-500"
          >
            Send
          </button>
        </form>
      );
    }
  };
  
  export default ContactsForm;
  
