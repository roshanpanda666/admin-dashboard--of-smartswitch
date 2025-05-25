"use client";
import { useEffect, useState } from "react";

export default function Timelog() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/getalldata"); // ✅ Calling the route
      const json = await res.json();

      if (json.success) {
        setData(json.data); // ✅ All data is now in state
      }

      setLoading(false);
    }


    const interval = setInterval(fetchData, 1000);
    // Cleanup on unmount
    return () => clearInterval(interval);
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Status Data</h1>
      <div className="space-y-4">
        {data.map((item, index) => (
          <div
            key={item._id || index}
            className="border p-4 rounded shadow "
          >
             <p><strong>Date:</strong> {item.timestamp}</p>
            <p><strong>Relay:</strong> {item.relay}</p>
            <p><strong>Relay:</strong> {item.medium}</p>
          </div>
        ))}
      </div>
    </div>
  );
}