import { connection2 } from "@/lib/d"
import DataModel2 from "@/lib/model/secondmodel"
import mongoose from "mongoose"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    await mongoose.connect(connection2);

    // Get the latest entry sorted by timestamp descending
    const latestdata = await DataModel2.find();
    return NextResponse.json({ success: true, data: latestdata });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch data" });
  }
}

