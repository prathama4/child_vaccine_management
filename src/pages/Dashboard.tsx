import Navbar from "../components/Navbar";
import VaccineCard from "../components/VaccineCard";
import { useChild } from "../context/ChildContext";
import { motion } from "framer-motion";

export default function Dashboard() {
  const { children } = useChild();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-purple-50">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            🌈 Vaccination Dashboard
          </h1>

          <a
            href="/add-child"
            className="px-5 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition shadow"
          >
            + Add Child
          </a>
        </div>

        {/* Child Cards */}
        {children.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {children.map((child, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-lg flex items-center gap-4 hover:shadow-xl transition"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-pink-400 flex items-center justify-center text-2xl">
                  👶
                </div>

                <div>
                  <p className="font-semibold text-gray-800">
                    {child.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    Parent: {child.parent}
                  </p>
                  <p className="text-sm text-gray-500">
                    DOB: {child.dob}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Vaccine Section */}
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          💉 Vaccination Schedule
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <VaccineCard
            name="BCG"
            dueDate="At Birth"
            status="Completed"
          />
          <VaccineCard
            name="Polio"
            dueDate="6 Weeks"
            status="Pending"
          />
          <VaccineCard
            name="Hepatitis B"
            dueDate="6 Weeks"
            status="Overdue"
          />
        </div>
      </div>
    </div>
  );
}
