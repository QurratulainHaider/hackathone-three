import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email, password, name } = await request.json();

  // Basic validation
  if (!email || !password || !name) {
    return NextResponse.json(
      { message: "All fields are required" },
      { status: 400 }
    );
  }

  // Simulate a successful registration
  try {
    // Add your database logic here (e.g., saving user to the database)
    console.log("User registered:", { email, password, name });

    return NextResponse.json(
      { message: "Registration successful" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Registration error:", err);
    return NextResponse.json(
      { message: "An error occurred during registration" },
      { status: 500 }
    );
  }
}