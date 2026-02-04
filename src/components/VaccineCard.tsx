interface VaccineCardProps {
  name: string;
  dueDate: string;
  status: "Completed" | "Pending" | "Overdue";
}

export default function VaccineCard({
  name,
  dueDate,
  status,
}: VaccineCardProps) {
  const statusStyles =
    status === "Completed"
      ? "bg-green-100 text-green-700"
      : status === "Overdue"
      ? "bg-red-100 text-red-700"
      : "bg-yellow-100 text-yellow-700";

  const emoji =
    status === "Completed" ? "✅" : status === "Overdue" ? "⚠️" : "⏳";

  return (
    <div className="backdrop-blur-md bg-white/70 p-5 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <span className="text-xl">{emoji}</span>
      </div>

      <p className="text-sm text-gray-500 mt-1">Due: {dueDate}</p>

      <span
        className={`inline-block mt-3 px-3 py-1 rounded-full text-sm font-medium ${statusStyles}`}
      >
        {status}
      </span>
    </div>
  );
}
