import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
   <div className="min-h-screen bg-red-200">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-blue-700"
        >
          Child Vaccination Management System
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto"
        >
          A smart and secure platform to manage child vaccination records,
          track schedules, and ensure timely immunization with ease.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex justify-center gap-4"
        >
          <button className="px-8 py-3 bg-blue-600 text-white rounded-xl text-lg font-semibold shadow-lg hover:bg-blue-700 transition">
            Get Started
          </button>

          <button className="px-8 py-3 bg-white text-blue-600 border border-blue-600 rounded-xl text-lg font-semibold hover:bg-blue-50 transition">
            Learn More
          </button>
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-6 pb-20 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "Vaccination Tracking",
            desc: "Track upcoming and completed vaccines with ease.",
          },
          {
            title: "Secure Records",
            desc: "All child health data is stored safely and securely.",
          },
          {
            title: "Smart Reminders",
            desc: "Never miss a vaccination with automated reminders.",
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-2xl shadow-md"
          >
            <h3 className="text-xl font-semibold text-blue-600">
              {feature.title}
            </h3>
            <p className="mt-3 text-gray-600">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
