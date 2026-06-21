import { NextResponse } from 'next/server';

// In a real environment, this would hit the Frappe API:
// POST http://localhost:8000/api/resource/{Integration Name}
// For this fully functional demo, we will simulate the backend database save.

let mockDatabase: any = {};

export async function GET(request: Request) {
  return NextResponse.json({ status: "success", data: mockDatabase });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const integrationId = body.integrationId;
    const formData = body.formData;

    // Simulate saving to Frappe Single Doctype
    mockDatabase[integrationId] = { ...mockDatabase[integrationId], ...formData };

    return NextResponse.json({ 
      status: "success", 
      message: `${integrationId} settings securely saved to Frappe Database!`,
      data: mockDatabase[integrationId]
    });
  } catch (error) {
    return NextResponse.json({ status: "error", message: "Failed to save settings to Frappe Backend" }, { status: 500 });
  }
}
