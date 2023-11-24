import { NextResponse } from "next/server";
import prisma from "@/app/lib/prismadb";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {primerNombre, segundoNombre, primerApellido, segundoApellido, email, celular, password, imagen, token} = body;
    const nuevoUsuario = await prisma.usuario.create({
      data: {
        primerNombre,
        segundoNombre,
        primerApellido,
        segundoApellido,
        email,
        celular,
        password,
        imagen,
        token,
      },
    });
    return NextResponse.json(nuevoUsuario);
  } catch (error) {
    return NextResponse.json({ message: "POST Error", error}, { status: 500 });
  }

}

export async function GET(request: Request) {
  const res = await fetch(
    "https://api.github.com/search/users?q=richard&per_page=3"
  );
  const data = await res.json();
  return NextResponse.json(data);
}
