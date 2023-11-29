export interface UserForm {
  id: number;
  nombres: string;
  apellidos: string;
  email: string;
  celular: string;
  password: string;
  rolId: number;
  confirmado: boolean;
  token: string;
  estado: "ACTIVO" | "INACTIVO";
}

export type RoleField = {
  id: number;
  nombre: string;
};
