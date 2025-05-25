import { connectionURI } from "@/lib/d";
import DataModel from "@/lib/model/status";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    await mongoose.connect(connectionURI)
    const data=await DataModel.find().sort({ _id: -1 }).limit(5); // .limit(5);         // Limit to last 5
    console.log(data)
    return NextResponse.json({success:true,data:data})
}