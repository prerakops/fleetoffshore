"use client";

import React from "react";
import Nav from "../components/Nav";

const ContactUs = () => {
  return (
    <>
      <Nav />
      <div className="bg-gray-900 text-white overflow-hidden py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-gradient">
                Contact Us
              </h1>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                We at Fleet Offshore Supply are here to assist you with all your marine equipment and ship spare needs. Reach out to us anytime — we look forward to hearing from you!
              </p>

              <h2 className="text-lg font-semibold leading-7 text-indigo-400">
                Contact Information
              </h2>
              <ul className="mt-4 space-y-2 text-gray-300 list-disc list-inside">
                <li>Name: Prerak Mer</li>
                <li>Email: prerak@fleetoffshoresupply.com</li>
                <li>Contact Number: +91 9033791339</li>
                <li>Address: H-2, Hans Complex, Sanskar Mandal, Bhavnagar, Gujarat, India</li>
              </ul>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                Feel free to connect with us for inquiries, quotes, or any additional information. Our team is dedicated to providing prompt and personalized support.
              </p>
            </div>

            <div className="relative">
              <img
                src="port/port4.jpg"
                alt="Contact Us"
                className="rounded-lg shadow-lg object-cover ring-1 ring-gray-400/10  "
              />
            </div>
          </div>
        </div>

        <style jsx>{`
          .text-gradient {
            background: linear-gradient(90deg, #1e3a8a, #1e90ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        `}</style>
      </div>
    </>
  );
};

export default ContactUs;
