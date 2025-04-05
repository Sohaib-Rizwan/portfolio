"use client";

import React from "react";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="text-white py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16"
      >
        {/* Left side */}
        <div className="space-y-10">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-300"
          >
            Get in <span className="text-purple-400">touch</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 p-6 sm:p-8 rounded-2xl space-y-6"
          >
            {/* Phone */}
            <div className="space-y-1">
              <p className="text-base text-gray-400">Phone</p>
              <a
                href="tel:+923027267711"
                className="text-lg sm:text-xl font-semibold hover:text-purple-400 transition flex items-center gap-2"
              >
                +92 302 7267711
                <span className="text-purple-300">↗</span>
              </a>
            </div>

            {/* Email */}
            <div className="space-y-1">
              <p className="text-base text-gray-400">Email</p>
              <a
                href="mailto:sohaibrizwan92@gmail.com"
                className="text-lg sm:text-xl font-semibold hover:text-purple-400 transition flex items-center gap-2"
              >
                sohaibrizwan92@gmail.com
                <span className="text-purple-300">↗</span>
              </a>
            </div>

            {/* Location */}
            <div className="space-y-1">
              <p className="text-base text-gray-400">Location</p>
              <address className="text-lg not-italic leading-relaxed text-white">
                Lahore, Pakistan
                <span className="text-purple-300">↗</span>
              </address>
            </div>
          </motion.div>
        </div>

        {/* Right side - Google Map */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-full h-80 md:h-[400px] lg:h-full rounded-2xl overflow-hidden shadow-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435519.22745965514!2d74.00471116800347!3d31.483103650703097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1743798359310!5m2!1sen!2s"
            width="100%"
            height="100%"
            loading="lazy"
            style={{ border: 0 }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
