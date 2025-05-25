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
      <div className="space-y-4 ">
      <div className="justify-center items-center text-center flex lg:gap-[10vw] gap-[20vw] bg-[#0F1727] py-5 rounded-3xl">
                    <div className="lg:w-full w-[10%] text-center">Time stamp</div>
                    <div className="lg:w-full w-[10%] text-center">Medium</div>
                    <div className="lg:w-full w-[10%] text-center mr-4">Status</div>
                </div>
                
        {data.map((item, index) => (
          <div
            key={item._id || index}
            className="border-b-[1px] border-[#273464] p-4 rounded shadow "
          >
            <div className="flex justify-center items-center lg:gap-[10vw]">
                <div className="text-white w-full text-center"> {new Date(item.timestamp).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</div>
                <div className="text-white w-full text-center">{item.relay}</div>
                <div className="text-white w-full text-center">{item.medium}</div>
                
            </div>
             
          </div>
        ))}
      </div>
    </div>
  );
}