import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useChild } from "../context/ChildContext";

export default function AddChild() {
  const { addChild } = useChild();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [parent, setParent] = useState("");

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-xl mx-auto mt-10 bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
          Register Child
        </h2>

        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            addChild({ name, dob, parent });
            navigate("/dashboard");
          }}
        >
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Child Name"
            className="w-full px-4 py-2 border rounded-lg"
            required
          />

          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />

          <input
            value={parent}
            onChange={(e) => setParent(e.target.value)}
            placeholder="Parent Name"
            className="w-full px-4 py-2 border rounded-lg"
            required
          />

          <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
            Save Child
          </button>
        </form>
      </div>
    </div>
  );
}
