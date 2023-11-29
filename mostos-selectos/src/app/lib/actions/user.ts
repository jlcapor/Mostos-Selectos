"use server";
import { z } from "zod";
import prisma from "@/app/lib/prismadb";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { UserSchema, userUpdateSchema } from "../validations/user.schema";
import { Status } from "@prisma/client";

export async function createUserAction(rawInput: z.infer<typeof UserSchema>) {
  const input = UserSchema.parse(rawInput);
  const userWithSameEmail = await prisma.usuario.findUnique({
    where: {
      email: input.email,
    },
  });

  if (userWithSameEmail) {
    throw new Error("The email is already registered.");
  }
  const random: string = Math.random().toString(32).substring(2);
  const fecha: string = Date.now().toString(32);
  const token: string = random + fecha;
  console.log(input.estado);
  await prisma.usuario.create({
    data: {
      nombres: input.nombres,
      apellidos: input.apellidos,
      email: input.email,
      celular: input.celular,
      password: input.password,
      rolId: Number(input.rolId),
      token,
      estado: input.estado as Status,
    },
  });

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
}

const UpdateUser = userUpdateSchema.omit({ id: true, token: true });
export async function updateUser(id: number, formData: FormData) {
  const { nombres, apellidos, email, celular, password, rolId, estado } =
    UpdateUser.parse({
      nombres: formData.get("nombres"),
      apellidos: formData.get("apellidos"),
      email: formData.get("email"),
      celular: formData.get("celular"),
      password: formData.get("password"),
      rolId: formData.get("rolId"),
      estado: formData.get("estado"),
    });

  const currentUser = await prisma.usuario.findUnique({
    where: {
      id: id,
    },
  });

  const updateData: {
    nombres: string;
    apellidos: string;
    email: string;
    celular: string;
    password: string;
    rolId: number;
    estado: Status;
  } = {
    nombres: nombres !== "" ? nombres : currentUser?.nombres ?? "",
    apellidos: apellidos !== "" ? apellidos : currentUser?.apellidos ?? "",
    email: email !== "" ? email : currentUser?.email ?? "",
    celular: celular !== "" ? celular : currentUser?.celular ?? "",
    password: password !== "" ? password : currentUser?.password ?? "",
    rolId: Number(rolId),
    estado: estado as Status,
  };

  try {
    await prisma.usuario.update({
      where: {
        id: id,
      },
      data: {
        ...updateData,
      },
    });
  } catch (error) {
    return {
      message: `Error al actualizar el usuario ${error}`,
    };
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
}
