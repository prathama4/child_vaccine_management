interface VaccineCardProps {
  name: string;
  dueDate: string;
  status: "Completed" | "Pending";
}

export default function VaccineCard({
  name,
  dueDate,
  status,
}: VaccineCardProps) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-500">Due: {dueDate}</p>

      <span
        className={`inline-block mt-3 px-3 py-1 rounded-full text-sm font-medium ${
          status === "Completed"
            ? "bg-green-100 text-green-600"
            : "bg-yellow-100 text-yellow-600"
        }`}
      >
        {status}
      </span>
    </div>
  );
}
