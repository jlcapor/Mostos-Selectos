import { NextResponse } from 'next/server';
import prisma from "@/app/lib/prismadb";


export async function POST(request: Request, ) {
    const body = await request.json();
    const { 
        hola
    } = body;
    console.log(hola)
    // const hashedPassword = await bcrypt.hash(password, 12);

    // const usuario = await prisma.usuario.creatr({
    //     data:{
    //         primerNombre,
    //         segundoNombre,
    //         primerApellido,
    //         segundoApellido,
    //         email,
    //         celular,
    //         password,
    //         token,
    //     }
    // })
    return NextResponse.json(body);
}

export async function GET(request: Request) {
    const res = await fetch("https://api.github.com/search/users?q=richard&per_page=3");
    const data = await res.json();
    return NextResponse.json(data);
}