import { connectionURI } from "@/lib/d"
import DataModel from "@/lib/model/status"
import mongoose from "mongoose"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    await mongoose.connect(connectionURI);

    // Get the latest entry sorted by timestamp descending
    const latestEntry = await DataModel.findOne().sort({ timestamp: -1 });
    console.log(latestEntry.relay);
    console.log(latestEntry.statuss);
    return NextResponse.json({ success: true, data: latestEntry });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch data" });
  }
}

