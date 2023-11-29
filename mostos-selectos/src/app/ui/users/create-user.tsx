"use client";
import Link from "next/link";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { RoleField } from "@/app/lib/definitions";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserSchema } from "@/app/lib/validations/user.schema";
import { useTransition } from "react";
import { createUserAction } from "@/app/lib/actions/user";
import { catchError } from "@/app/lib/utils";
import { Icons } from "../icons";

type Inputs = z.infer<typeof UserSchema>;

export default function CreteUserForm({ roles }: { roles: RoleField[] }) {
  const [isPending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(UserSchema),
  });

  const createUserForm: SubmitHandler<Inputs> = async (data) => {
    startTransition(async () => {
      try {
        await createUserAction(data);
      } catch (error) {
        catchError(error);
      }
    });
  };
  return (
    <form onSubmit={handleSubmit(createUserForm)}>
      <div className="rounded-md shadow bg-white p-4 md:p-6">
        <div className="mb-4">
          <label
            htmlFor="nombres"
            className="text-gray-700 uppercase font-bold text-sm"
          >
            Nombre
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="nombres"
                {...register("nombres")}
                type="text"
                placeholder="Ingrese el nombre"
                className={`
                peer
                block 
                border-2 
                w-full 
                p-2 
                mt-2
                font-light
                bg-white
                rounded-md
                outline-none
                transition
                disabled:opacity-70 
                ${
                  errors.nombres?.message
                    ? "border-rose-500"
                    : "border-neutral-300"
                }
                ${
                  errors.nombres?.message
                    ? "focus:border-rose-500"
                    : "focus:border-black"
                }
                `}
                defaultValue=""
              />
            </div>
          </div>
          {errors.nombres?.message ? (
            <div className="mt-2 text-sm text-red-500">
              <p>{errors.nombres.message}</p>
            </div>
          ) : null}
        </div>

        <div className="mb-4">
          <label
            htmlFor="apellidos"
            className="text-gray-700 uppercase font-bold text-sm"
          >
            Apellidos
          </label>
          <div className="w-full relative mt-2 rounded-md">
            <input
              id="apellidos"
              {...register("apellidos")}
              type="text"
              placeholder="Ingrese los apellidos"
              className={`
              peer
              block 
              border-2 
              w-full 
              p-2 
              mt-2
              font-light
              bg-white
              rounded-md
              outline-none
              transition
              disabled:opacity-70 
              ${
                errors.apellidos?.message
                  ? "border-rose-500"
                  : "border-neutral-300"
              }
              ${
                errors.apellidos?.message
                  ? "focus:border-rose-500"
                  : "focus:border-black"
              }
              `}
              defaultValue=""
            />
          </div>
          {errors.apellidos?.message ? (
            <div className="mt-2 text-sm text-red-500">
              <p>{errors.apellidos.message}</p>
            </div>
          ) : null}
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="text-gray-700 uppercase font-bold text-sm"
          >
            Email
          </label>
          <div className="w-full relative mt-2 rounded-md">
            <input
              id="email"
              {...register("email")}
              type="email"
              className={`
              peer
              block 
              border-2 
              w-full 
              p-2 
              mt-2
              font-light
              bg-white
              rounded-md
              outline-none
              transition
              disabled:opacity-70 
              ${
                errors.email?.message ? "border-rose-500" : "border-neutral-300"
              }
              ${
                errors.email?.message
                  ? "focus:border-rose-500"
                  : "focus:border-black"
              }`}
              placeholder="Ingrese el email"
              defaultValue=""
            />
          </div>
          {errors.email?.message ? (
            <div className="mt-2 text-sm text-red-500">
              <p>{errors.email.message}</p>
            </div>
          ) : null}
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
              {...register("celular")}
              type="number"
              className="peer block border-2 w-full p-2 mt-2 placeholder:text-gray-500 rounded-md"
              placeholder="Ingrese el numero de celular"
              defaultValue=""
            />
          </div>
        </div>

        <div className="mb-4 mt-4">
          <label
            htmlFor="rolId"
            className="text-gray-700 uppercase font-bold text-sm"
          >
            Rol
          </label>
          <div className="relative">
            <select
              id="rolId"
              {...register("rolId")}
              className={`
              peer
              block 
              border-2 
              w-full 
              p-2 
              mt-2
              font-light
              bg-white
              rounded-md
              outline-none
              transition
              disabled:opacity-70 
              ${
                errors.rolId?.message ? "border-rose-500" : "border-neutral-300"
              }
              ${
                errors.rolId?.message
                  ? "focus:border-rose-500"
                  : "focus:border-black"
              }`}
              defaultValue=""
            >
              <option value="" disabled>
                Seleccione un rol
              </option>
              {roles.map((rol) => (
                <option key={rol.id} value={rol.id}>
                  {rol.nombre}
                </option>
              ))}
            </select>
          </div>
          {errors.rolId?.message ? (
            <div className="mt-2 text-sm text-red-500">
              <p>{errors.rolId.message}</p>
            </div>
          ) : null}
        </div>

        <fieldset>
          <legend className="text-gray-700 uppercase font-bold text-sm">
            Estado
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="activo"
                  {...register("estado")}
                  type="radio"
                  value="ACTIVO"
                  className="h-4 w-4 border-gray-300 bg-gray-100 text-gray-600 focus:ring-2 focus:ring-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-gray-600"
                />
                <label
                  htmlFor="activo"
                  className="ml-2 flex items-center gap-1.5 rounded-full  px-3 py-1.5 text-lg font-medium text-white dark:text-gray-600"
                >
                  Activo
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="inactivo"
                  {...register("estado")}
                  type="radio"
                  value="INACTIVO"
                  className="h-4 w-4 border-gray-300 bg-gray-100 text-gray-600 focus:ring-2 focus:ring-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-gray-600"
                />
                <label
                  htmlFor="inactivo"
                  className="ml-2 flex items-center gap-1.5 rounded-full  px-3 py-1.5 text-lg font-medium text-white dark:text-gray-600"
                >
                  Inactivo
                </label>
              </div>
            </div>
          </div>
          {errors.estado?.message ? (
            <div className="mt-2 text-sm text-red-500">
              <p>{errors.estado.message}</p>
            </div>
          ) : null}
        </fieldset>

        <div className="mb-4 mt-3">
          <label
            htmlFor="password"
            className="text-gray-700 uppercase font-bold text-sm"
          >
            Contraseña
          </label>
          <div className="w-full relative mt-2 rounded-md">
            <input
              id="password"
              {...register("password")}
              type="password"
              className={`
              peer
              block 
              border-2 
              w-full 
              p-2 
              mt-2
              font-light
              bg-white
              rounded-md
              outline-none
              transition
              disabled:opacity-70 
              ${
                errors.password?.message
                  ? "border-rose-500"
                  : "border-neutral-300"
              }
              ${
                errors.password?.message
                  ? "focus:border-rose-500"
                  : "focus:border-black"
              }`}
              placeholder="Ingrese la contraseña"
            />
          </div>
          {errors.password?.message ? (
            <div className="mt-2 text-sm text-red-500">
              <p>{errors.password.message}</p>
            </div>
          ) : null}
        </div>
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/users"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        {isPending ? (
          <Icons.spinner
            className="mr-2 h-8 w-8 animate-spin"
            aria-hidden="true"
          />
        ) : (
          <button
            type="submit"
            className="flex w-fit h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
          >
            Crear Usuario
          </button>
        )}
      </div>
    </form>
  );
}
