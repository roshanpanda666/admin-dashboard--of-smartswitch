import { connectionURI } from "@/lib/d";
import DataModel from "@/lib/model/status";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // ✅ Avoid re-connecting if already connected
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(connectionURI);
    }

    const data = await request.json();

    // ✅ Optional: validate required fields (safe check before Mongoose tries)
    const requiredFields = ["statuss", "relay", "medium"];
    for (let field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json({ success: false, error: `Missing field: ${field}` });
      }
    }

    // ✅ Optional: validate relay value manually (or rely on schema)
    if (!["ON", "OFF"].includes(data.relay)) {
      return NextResponse.json({ success: false, error: "Invalid relay value (must be 'ON' or 'OFF')" });
    }

    const newData = new DataModel({
      statuss: data.statuss,
      relay: data.relay,
      medium: data.medium,
      timestamp: data.timestamp || Date.now(),
    });

    await newData.save();

    return NextResponse.json({
      success: true,
      message: "Data uploaded successfully",
      data: newData,
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ success: false, error: "Failed to upload data" });
  }
}
