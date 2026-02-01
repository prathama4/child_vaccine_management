import Navbar from "../components/Navbar";
import VaccineCard from "../components/VaccineCard";
import { useChild } from "../context/ChildContext";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Dashboard() {
  const { children } = useChild();
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  if (listRef.current && children.length > 0) {
    gsap.from(listRef.current.children, {
      opacity: 0,
      y: 20,
      stagger: 0.15,
      duration: 0.5,
      clearProps: "all",
    });
  }
}, [children]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Vaccination Dashboard
          </h1>

          <a
            href="/add-child"
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            + Add Child
          </a>
        </div>

        {/* Registered Children */}
        {children.length > 0 && (
          <div ref={listRef} className="mb-8 space-y-2">
            <h2 className="text-xl font-semibold mb-3">
              Registered Children
            </h2>

            {children.map((child, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow"
              >
                👶 <strong>{child.name}</strong> <br />
                Parent: {child.parent} <br />
                DOB: {child.dob}
              </div>
            ))}
          </div>
        )}

        {/* Vaccine Cards */}
        <h2 className="text-xl font-semibold mb-4">
          Vaccination Schedule
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
            status="Pending"
          />
        </div>
      </div>
    </div>
  );
}
