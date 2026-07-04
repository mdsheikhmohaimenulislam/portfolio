import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { FaWhatsappSquare } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          toast.success("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.error("Email sending failed:", error);
          toast.error("Failed to send message.");
        },
      );
  };

  return (
    <div id="contact" className="mt-10 bg-base-300 py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="mb-14">
          <h2 className="text-5xl font-bold">
            Let’s <span className="text-blue-500">Connect</span>
          </h2>

          <p className="mt-3 text-gray-500 max-w-2xl">
            Have an idea, project, or opportunity? I'd love to hear from you.
            Feel free to reach out, and let's build something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold">
                Contact <span className="text-blue-500">Information</span>
              </h3>

              <p className="mt-2 text-gray-600">
                I'm always open to discussing new projects, freelance work,
                collaborations, or exciting opportunities.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <CiLocationOn className="text-blue-500" size={22} />
                <span>Dhaka, Bangladesh</span>
              </div>

              <div className="flex items-center gap-3">
                <FaWhatsappSquare className="text-green-500" size={22} />
                <span>+8801715755177</span>
              </div>

              <div className="flex items-center gap-3">
                <AiOutlineMail className="text-yellow-500" size={22} />
                <span className="break-all">
                  mdsheikhmohaimenulislam@gmail.com
                </span>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <form ref={form} onSubmit={handleSubmit} className="space-y-5">
            <h3 className="text-2xl font-semibold">
              Send a <span className="text-blue-500">Message</span>
            </h3>

            <input
              name="name"
              type="text"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
            />

            <input
              name="email"
              type="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Write your message..."
              required
              className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
            />

            <button
              type="submit"
              className="w-full cursor-pointer py-3 rounded-md bg-blue-500 text-white font-semibold hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
