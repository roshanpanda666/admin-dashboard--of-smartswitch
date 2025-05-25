import { connection2 } from "@/lib/d"
import DataModel2 from "@/lib/model/secondmodel"
import mongoose from "mongoose"
import { NextResponse } from "next/server"

export async function POST(request) {
  try {
    await mongoose.connect(connection2);

    // Parse JSON body from the request
    const data = await request.json();

    // Create a new document using the data from request body
    const newData = new DataModel2(data);

    // Save it to MongoDB
    await newData.save();

    return NextResponse.json({ success: true, message: "Data uploaded successfully", data: newData });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ success: false, error: "Failed to upload data" });
  }
}
