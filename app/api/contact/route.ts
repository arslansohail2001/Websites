import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const data = Object.fromEntries(formData.entries());
    console.log("[Contact Inquiry Received]:", data);
    return NextResponse.json({ success: true, message: "Inquiry received" });
  } catch (error) {
    console.error("[Contact API Error]:", error);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
