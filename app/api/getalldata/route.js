import { connectionURI } from "@/lib/d";
import DataModel from "@/lib/model/status";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await mongoose.connect(connectionURI);

    // Fetch the latest 6 entries
    const latestEntries = await DataModel.find()
      .sort({ timestamp: -1 })
      .limit(6);

    // Debug log each entry
    latestEntries.forEach((entry, i) => {
      console.log(`Entry ${i + 1}:`);
      console.log("  Relay:", entry.relay);
      console.log("  Status:", entry.statuss);
      console.log("  Medium:", entry.medium);
      console.log("  Timestamp:", entry.timestamp);
    });

    return NextResponse.json({ success: true, data: latestEntries });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch data" });
  }
}
