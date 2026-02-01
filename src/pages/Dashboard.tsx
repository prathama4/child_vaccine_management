import VaccineCard from "../components/VaccineCard";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Vaccination Dashboard
        </h1>

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
