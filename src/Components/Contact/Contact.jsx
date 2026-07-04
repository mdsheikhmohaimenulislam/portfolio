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
    <div id="contact" className="mt-10 bg-base-300 pt-10">
      <div className="mb-10 pl-6">
        <h2 className="text-5xl font-bold text-black">
          Let’s <span className="text-blue-500">Connect</span>
        </h2>

        <p className="text-gray-400 mt-3">
          Have an idea or project in mind? Let’s connect and build something
          amazing together.
        </p>
      </div>
      <section className="py-16 dark:bg-base-300 dark:text-gray-900">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:divide-x">
          {/* LEFT SIDE */}
          <div className="space-y-6 md:pr-10">
            <div>
              <h1 className="text-4xl font-bold">
                Let’s <span className="text-blue-500">Connect</span>
              </h1>
              <p className="pt-3 text-gray-600">
                Have a project in mind? Feel free to reach out and let’s build
                something together.
              </p>
            </div>

            <div className="space-y-5 text-gray-700">
              <p className="flex items-center gap-3">
                <CiLocationOn size={22} className="text-blue-500" />
                <span>BANGLADESH, DHAKA</span>
              </p>

              <p className="flex items-center gap-3">
                <FaWhatsappSquare size={22} className="text-green-500" />
                <span>+8801715755177</span>
              </p>

              <p className="flex items-center gap-3">
                📞 <span>+8801715755177</span>
              </p>

              <p className="flex items-center gap-3">
                <AiOutlineMail size={22} className="text-yellow-600" />
                <span className="break-all">
                  mdsheikhmohaimenulislam@gmail.com
                </span>
              </p>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="space-y-5 md:pl-10"
          >
            <h2 className="text-2xl font-semibold mb-2">
              Send a <span className="text-blue-500">Message</span>
            </h2>

            <input
              name="name"
              type="text"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              name="email"
              type="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 text-lg rounded-md bg-blue-500 text-white hover:bg-blue-600 transition cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
