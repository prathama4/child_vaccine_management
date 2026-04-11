import { Link } from "react-router-dom";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-white shadow-md px-6 py-4 flex justify-between items-center"
    >
      <h1 className="text-xl font-bold text-blue-600">
        ChildCare Vaccination
      </h1>

      <Link
  to="/login"
  className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
>
  Login
</Link>

    </motion.nav>
  );
}
