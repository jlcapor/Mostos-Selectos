"use client";
import Link from "next/link";
import { Button } from "@/components/button";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

export default function CreteUserForm({}) {
  const [data, setData] = useState({});
  const router = useRouter();
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const res = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ hola: "eerrrrr" }),
    });

    const result = await res.json();
    router.push(`/dashboard/users`);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name;
    setData((prevData) => ({
      ...prevData,
      [name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="rounded-md shadow bg-white p-4 md:p-6">
        <div className="mb-4">
          <label
            htmlFor="primerNombre"
            className="text-gray-700 uppercase font-bold text-sm"
          >
            Primer Nombre
          </label>
          <div className="w-full relative mt-2 rounded-md ">
            <input
              id="primerNombre"
              name="primerNombre"
              type="text"
              className="peer block border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder="Ingrese primer nombre"
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="segundoNombre"
            className="text-gray-700 uppercase font-bold text-sm"
          >
            Segundo Nombre
          </label>
          <div className="w-full relative mt-2 rounded-md">
            <input
              id="segundoNombre"
              name="segundoNombre"
              type="text"
              className="peer block border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder="Ingrese segundo nombre"
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="primerApellido"
            className="text-gray-700 uppercase font-bold text-sm"
          >
            Primer Apellido
          </label>
          <div className="w-full relative mt-2 rounded-md">
            <input
              id="primerApellido"
              name="primerApellido"
              type="text"
              className="peer block border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder="Ingrese primer apellido"
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="segundoApellido"
            className="text-gray-700 uppercase font-bold text-sm"
          >
            Segundo Apellido
          </label>
          <div className="w-full relative mt-2 rounded-md">
            <input
              id="segundoApellido"
              name="segundoApellido"
              type="text"
              className="peer block border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder="Ingrese segundo apellido"
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="correo"
            className="text-gray-700 uppercase font-bold text-sm"
          >
            Email
          </label>
          <div className="w-full relative mt-2 rounded-md">
            <input
              id="correo"
              name="correo"
              type="email"
              className="peer block border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder="Ingrese el email"
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="celular"
            className="text-gray-700 uppercase font-bold text-sm"
          >
            Celular
          </label>
          <div className="w-full relative mt-2 rounded-md">
            <input
              id="celular"
              name="celular"
              type="number"
              className="peer block border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder="Ingrese el numero de celular"
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="contrasena"
            className="text-gray-700 uppercase font-bold text-sm"
          >
            Contraseña
          </label>
          <div className="w-full relative mt-2 rounded-md">
            <input
              id="contrasena"
              name="contrasena"
              type="password"
              className="peer block border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder="Ingrese la contraseña"
            />
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/users"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create User</Button>
      </div>
    </form>
  );
}
