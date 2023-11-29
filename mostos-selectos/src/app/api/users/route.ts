import { NextResponse } from "next/server";
import prisma from "@/app/lib/prismadb";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombres, apellidos, email, celular, password, imagen_url, token } = body;
  } catch (error) {
    return NextResponse.json({ message: "POST Error", error }, { status: 500 });
  }
}

export async function GET(request: Request) {
  const res = await fetch(
    "https://api.github.com/search/users?q=richard&per_page=3"
  );
  const data = await res.json();
  return NextResponse.json(data);
}
