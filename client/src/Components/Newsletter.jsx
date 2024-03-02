import React, { useState, useEffect } from "react";
import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa";
import Lottie from "lottie-react";
import animationData from "../assets/Animation - 1707240042635.json";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    // Reset the state when the component mounts (page is refreshed)
    setEmail("");
    setMessage("");
  }, []); // Empty dependency array ensures the effect runs only once, on mount

  return (
    <div>
      {/* 1st part */}
      <div>
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaEnvelopeOpenText />
          Mail us
        </h3>
        <p className="text-primary/75 text-base mb-4">
          We value your feedback and inquiries. If you have any questions,
          concerns, or suggestions regarding our job portal platform, please
          feel free to reach out to us.
        </p>
        <div className="w-full space-y-4">
          <form
            action="https://formspree.io/f/xleqjwwq"
            method="POST"
            encType="multipart/form-data"
          >
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Your Email:
            </label>
            <input
              type="email"
              name="_replyto"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="name@mail.com"
              className="w-full block py-2 pl-3 border focus:outline-none"
            />

            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mt-2"
            >
              Your Message:
            </label>
            <textarea
              name="message"
              id="message"
              value={message}
              onChange={handleMessageChange}
              rows="4"
              placeholder="Write your message here"
              className="w-full block py-2 pl-3 border focus:outline-none"
            />

            <input
              type="submit"
              value="Mail-Us"
              className="w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold mt-1"
            />
          </form>
        </div>
      </div>

      {/* 2nd part */}
      <div className="mt-20">
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaRocket />
          Get Notice Faster
        </h3>
        <p className="text-primary/75 text-base mb-4">
          We appreciate your trust and look forward to helping you make the most
          of your job search experience.
        </p>
        <div className="w-full space-y-4">
          <input
            type="submit"
            value="Upload Your Resume"
            className="w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold"
          />
          <Lottie
            animationData={animationData}
            loop={true}
            autoplay={true}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
