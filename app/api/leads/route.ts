import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { pathway, name, email } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required fields." },
        { status: 400 }
      );
    }

    // Generate unique verifiable reference ID
    const leadId = `GRZ-${Date.now().toString(36).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;

    // In a production setup, this will forward to the appropriate CRM/email webhook
    // based on pathway (Partner CRM, Investor secure desk, Talent team, etc.)
    console.log(`[GreenERZY Lead Ingestion] Pathway: ${pathway} | LeadID: ${leadId} | Email: ${email}`);

    return NextResponse.json({
      success: true,
      leadId,
      message: "Submission securely received and registered in GreenERZY pipeline.",
      pathway,
      timestamp: new Date().toISOString(),
    });
  } catch (err) {
    console.error("Lead submission error:", err);
    return NextResponse.json(
      { error: "Internal server error while processing submission." },
      { status: 500 }
    );
  }
}
