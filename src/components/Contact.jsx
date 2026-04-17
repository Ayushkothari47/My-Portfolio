import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <div className="bg-[#141414] min-h-screen text-white px-4 md:px-20 py-10">

      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl">Contact Us</h1>
        <p className="text-gray-300 mt-2 max-w-xl mx-auto">
          Feel free to reach out to us anytime. We are here to assist you with any inquiries.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">

        {/* Left Info Boxes */}
        <div className="space-y-6 md:col-span-1">

          {/* Address */}
          <div className="flex items-center gap-4 bg-[#1c1c1c] p-5 rounded-lg">
            <FaMapMarkerAlt size={28} className="text-[#f04a45]" />
            <div>
              <h2 className="text-lg font-semibold">Address</h2>
              <p className="text-gray-300">123 Main Street, City, Country</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4 bg-[#1c1c1c] p-5 rounded-lg">
            <FaPhoneAlt size={28} className="text-[#f04a45]" />
            <div>
              <h2 className="text-lg font-semibold">Call Me</h2>
              <p className="text-gray-300">+1 234 567 8900</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4 bg-[#1c1c1c] p-5 rounded-lg">
            <FaEnvelope size={28} className="text-[#f04a45]" />
            <div>
              <h2 className="text-lg font-semibold">Email Me</h2>
              <p className="text-gray-300">example@email.com</p>
            </div>
          </div>

        </div>

        {/* Right Contact Form */}
        <div className="bg-[#1c1c1c] p-6 rounded-lg md:col-span-2">
          <form className="space-y-4">

            <div className="flex flex-col md:flex-row gap-4">
              <label className="flex-1 flex flex-col">
                <span className="text-gray-300 mb-1">Name</span>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="p-2 bg-[#1c1c1c] rounded border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </label>

              <label className="flex-1 flex flex-col">
                <span className="text-gray-300 mb-1">Email</span>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="p-2 bg-[#1c1c1c] rounded border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </label>
            </div>

            <label className="flex flex-col">
              <span className="text-gray-300 mb-1">Subject</span>
              <input
                type="text"
                placeholder="Subject"
                className="p-2 bg-[#1c1c1c] rounded border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-gray-300 mb-1">Message</span>
              <textarea
                placeholder="Your Message"
                rows="5"
                className="p-2 bg-[#1c1c1c] rounded border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              ></textarea>
            </label>

            <div className="flex justify-center">
              <button className="bg-[#ff5052] w-1/2 py-3 rounded text-white font-semibold duration-200">
                Send Message
              </button>
            </div>


          </form>
        </div>

      </div>

    </div>
  );
}

export default Contact;
