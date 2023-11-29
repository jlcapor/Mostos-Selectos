import { RoleField } from "@/app/lib/definitions";
import Link from "next/link";
import { Button } from "@/components/button";
import { updateUser } from "@/app/lib/actions/user";
import { Usuario } from "@prisma/client";

export default function EditUserForm({
  usuario,
  roles,
}: {
  usuario: Usuario;
  roles: RoleField[];
}) {
  const initialState = { message: null, errors: {} };
  const updateUserWithId = updateUser.bind(null, usuario.id);
  
  return (
    <form action={updateUserWithId}>
      <input type="hidden" name="id" value={usuario.id} />
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <div className="mb-4">
          <label
            htmlFor="nombres"
            className="mb-2 block text-sm font-medium uppercase"
          >
            Nombre
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="nombres"
                name="nombres"
                type="text"
                defaultValue={usuario.nombres}
                placeholder="Ingrese el nombre"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="apellidos"
            className="mb-2 block text-sm font-medium uppercase"
          >
            Apellidos
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="apellidos"
                name="apellidos"
                type="text"
                defaultValue={usuario.apellidos}
                placeholder="Ingrese los apellidos"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium uppercase"
          >
            Email
          </label>

          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                defaultValue={usuario.email}
                placeholder="Ingrese el email"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
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
              defaultValue={usuario.celular}
              className="peer block border-2 w-full p-2 mt-2 placeholder:text-gray-500 rounded-md"
              placeholder="Ingrese el numero de celular"
            />
          </div>
        </div>

        <div className="mb-4 mt-4">
          <label
            htmlFor="role"
            className="text-gray-700 uppercase font-bold text-sm"
          >
            Rol
          </label>
          <div className="relative">
            <select
              id="role"
              name="rolId"
              className="peer block border-2 w-full p-2 mt-2 placeholder:text-gray-500 rounded-md"
              defaultValue={usuario.rolId}
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
                  name="estado"
                  type="radio"
                  value="ACTIVO"
                  className="h-4 w-4 border-gray-300 bg-gray-100 text-gray-600 focus:ring-2 focus:ring-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-gray-600"
                  defaultChecked={usuario.estado === 'ACTIVO'}
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
                  name="estado"
                  type="radio"
                  value="INACTIVO"
                  defaultChecked={usuario.estado === 'INACTIVO'}
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
              name="password"
              type="password"
              className="peer block border-2 w-full p-2 mt-2 placeholder:text-gray-500 rounded-md"
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
        <Button type="submit">Actualizar Usuario</Button>
      </div>
    </form>
  );
}
