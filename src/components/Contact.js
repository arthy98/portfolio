import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FiMail, FiUser, FiMessageSquare, FiSend } from "react-icons/fi";

const Contact = () => {
  const form = useRef();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs
      .sendForm(
        "service_np15lgw",
        "template_x6wqxof",
        form.current,
        "N8-AmFvGQU9cv9WcH"
      )
      .then(
        (result) => {
          setSubmitStatus("success");
          e.target.reset();
        },
        (error) => {
          setSubmitStatus("error");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const formControls = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1 + 0.8, duration: 0.5 },
    }),
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="min-h-screen flex flex-col items-center pl-28 pr-6 md:px-32 relative pt-20"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-40 left-20 w-64 h-64 bg-purple-500/10 
                     rounded-full mix-blend-multiply filter blur-xl animate-blob"
        />
        <div
          className="absolute bottom-40 right-20 w-64 h-64 bg-teal-500/10 
                     rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"
        />
      </div>

      {/* Heading Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        className="w-full text-center mb-20 relative"
      >
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                   w-32 h-32 bg-gradient-to-r from-teal-500/20 to-purple-500/20 
                   rounded-full blur-2xl"
        />
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="font-extrabold text-5xl md:text-6xl mb-4 relative"
        >
          <span
            className="text-transparent bg-clip-text bg-gradient-to-r 
                        from-teal-400 via-purple-500 to-teal-400
                        animate-gradient-x"
          >
            Get In Touch
          </span>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 
                     h-1 w-24 bg-gradient-to-r from-teal-400 to-purple-500"
          />
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gray-400 text-lg font-light"
        >
          Let's Create Something Amazing Together
        </motion.p>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="w-full max-w-4xl mx-auto relative"
      >
        <div
          className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-purple-500/20 
                     rounded-2xl blur-xl transform -rotate-1"
        />
        <form
          ref={form}
          onSubmit={sendEmail}
          className="relative bg-gray-900/50 backdrop-blur-sm p-8 md:p-12 
                   rounded-2xl border border-gray-800 space-y-6"
        >
          <motion.div
            className="relative"
            variants={formControls}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0}
          >
            <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="w-full p-4 pl-12 bg-gray-800/50 text-gray-200 rounded-lg 
                      border border-gray-700 focus:border-teal-400 focus:outline-none 
                      focus:ring-2 focus:ring-teal-400/20 transition-all duration-300"
              required
            />
          </motion.div>

          <motion.div
            className="relative"
            variants={formControls}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={1}
          >
            <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="w-full p-4 pl-12 bg-gray-800/50 text-gray-200 rounded-lg 
                      border border-gray-700 focus:border-purple-400 focus:outline-none 
                      focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
              required
            />
          </motion.div>

          <motion.div
            className="relative"
            variants={formControls}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={2}
          >
            <FiMessageSquare className="absolute left-4 top-6 text-gray-400" />
            <motion.textarea
              whileFocus={{ scale: 1.01 }}
              name="message"
              rows="5"
              placeholder="Your Message"
              className="w-full p-4 pl-12 bg-gray-800/50 text-gray-200 rounded-lg 
                      border border-gray-700 focus:border-teal-400 focus:outline-none 
                      focus:ring-2 focus:ring-teal-400/20 transition-all duration-300"
              required
            />
          </motion.div>

          <motion.button
            variants={formControls}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={3}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-4 rounded-lg font-medium flex items-center justify-center 
                     space-x-2 ${
                       isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                     } 
                     bg-gradient-to-r from-teal-400 to-purple-500 text-white 
                     hover:from-purple-500 hover:to-teal-400 transition-all duration-300`}
          >
            <FiSend className={`${isSubmitting ? "animate-bounce" : ""}`} />
            <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
          </motion.button>

          {submitStatus && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`text-center p-3 rounded-lg ${
                submitStatus === "success"
                  ? "bg-green-500/20 text-green-400"
                  : "bg-red-500/20 text-red-400"
              }`}
            >
              {submitStatus === "success"
                ? "Message sent successfully!"
                : "An error occurred. Please try again."}
            </motion.div>
          )}
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
