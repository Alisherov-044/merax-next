// GET, POST, PATCH, DELETE

import { NextResponse } from "next/server";

const users = [];

export async function GET() {
  return NextResponse.json(users);
}

export async function POST(request) {
  const body = await request.json();
  users.push(body);
  return NextResponse.json({ id: body.id });
}
