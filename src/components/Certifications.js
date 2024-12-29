import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const certifications = [
    { 
      name: "AWS Certified Solutions Architect - Associate", 
      image: "https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png", 
      link: "https://www.credly.com/badges/db1edc90-ca2d-4089-ae53-eebf9e75901a/public_url",
    },
    { 
      name: "AWS Certified AI Practitioner", 
      image: "https://images.credly.com/size/680x680/images/4d4693bb-530e-4bca-9327-de07f3aa2348/image.png", 
      link: "https://www.credly.com/badges/c92ec7fe-6491-47ed-84d3-e86366886ca0/public_url",
    },
    { 
      name: "AWS Certified AI Practitioner - Early Adopter", 
      image: "https://images.credly.com/size/680x680/images/834f2c8d-2d2c-4ce7-9580-02a351c31626/image.png", 
      link: "https://www.credly.com/badges/75084134-7265-431b-ac7b-282eca662f56/public_url",
    },
  ];

  return (
    <section
      ref={ref}
      id="certifications"
      className="min-h-screen flex flex-col items-center px-4 md:px-32 relative pt-20"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-20 w-64 h-64 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute bottom-40 right-20 w-64 h-64 bg-teal-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-7xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
          className="w-full text-center mb-20 relative"
        >
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="font-extrabold text-4xl md:text-6xl mb-4 relative"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-purple-500 to-teal-400 animate-gradient-x">
              Certifications
            </span>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-gradient-to-r from-teal-400 to-purple-500"
            />
          </motion.h2>
          <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-gray-400 text-lg font-light"
            >
               Credentials I've Collected
            </motion.p>
        </motion.div>

        <div className="flex justify-center items-center gap-8 flex-wrap">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.1,
                rotate: [0, -5, 5, -5, 0],
                transition: { duration: 0.3 }
              }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl" />
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative"
              >
                <div className="relative w-48 h-48 md:w-56 md:h-56 overflow-hidden rounded-full">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-contain transform transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <FiExternalLink
                      className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      size={30}
                    />
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
