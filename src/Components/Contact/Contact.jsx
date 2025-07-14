import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILL_SERVICEID,
        import.meta.env.VITE_EMAILL_TEMPLATEID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILL_PUBLICKEY,
        }
      )
      .then(
        (res) => {
          console.log("Email sent:", res);
          toast.success("Message Sent Successfully");
        },
        (error) => {
          console.error("Email sending failed:", error);
          toast.error("Failed to send message");
        }
      );

    e.target.reset();
  };

  return (
    <div id="contact" className="mt-40">
      <h1 className="text-3xl text-center font-bold underline decoration-blue-500 decoration-4 mb-2">
        CONTACT
      </h1>
      <p className="mb-10 text-center">
        I’d love to hear from you—reach out for any opportunities or questions!
      </p>
      <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          {/* Left Side Info */}
          <div className="py-6 md:py-0 md:px-6">
            <h1 className="text-4xl font-bold">Connect With Me</h1>
            <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
            <div className="space-y-4">
              <p className="flex items-center">
            <CiLocationOn size={20} /> <span className="ml-2">BANGLADESH DHAKA</span>
              </p>
              <p className="flex items-center">
                📞 <span className="ml-2">+8801715755177</span>
              </p>
              <p className="flex items-center">
                <AiOutlineMail size={20} /> <span className="ml-2">mdsheikhmohaimenulislam@gmail.com</span>
              </p>
            </div>
          </div>

          {/* Right Side Form */}
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
          >
            <label className="block">
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                required
                className="block p-2 outline-blue-400 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 dark:bg-gray-100"
              />
            </label>
            <label className="block">
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                required
                className="block p-2 outline-blue-400 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 dark:bg-gray-100"
              />
            </label>
            <label className="block">
              <textarea
                name="message"
                rows="3"
                placeholder="Your Message"
                required
                className="block p-2 outline-blue-400 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 dark:bg-gray-100"
              ></textarea>
            </label>
            <button
              type="submit"
              className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 hover:bg-blue-500 hover:text-white cursor-pointer bg-blue-100"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
