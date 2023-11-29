import { z } from "zod";
export const UserSchema = z.object({
  id: z.number().optional(),
  nombres: z
    .string()
    .refine((data) => !!data, { message: "El nombre es obligatorio" }),
  apellidos: z
    .string()
    .refine((data) => !!data, { message: "El apellido es obligatorio" }),
  email: z
    .string()
    .email({ message: "Correo electronico no valido" })
    .refine((data) => !!data, {
      message: "El correo electronico es obligatorio",
    }),
  celular: z.string(),
  password: z
    .string()
    .min(8, {
      message: "La contraseña debe tener al menos 8 caracteres",
    })
    .max(100)
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, {
      message:
        "a contraseña debe contener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial.",
    }),
  rolId: z
    .string()
    .refine((data) => !!data, { message: "El Rol es obligatorio" }),
  estado: z
    .string()
    .nullable()
    .refine((data) => data !== null, { message: "Seleccione un estado" }),
});



export const userUpdateSchema = z.object({
  id: z.number().optional(),
  nombres: z.string(),
  apellidos: z.string(),
  email: z.string().email(),
  celular: z.string(),
  password: z.string(),
  rolId: z.string().refine((data) => !!data, { message: "El Rol es obligatorio" }),
  estado: z.string(),
});
