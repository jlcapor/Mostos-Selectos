export type UserForm = {
    id: number;
    nombres: string;
    apellidos: string;
    email: string;
    celular: string ;
    rolId: number;
    estado: "ACTIVO" | "INACTIVO";
  };
  
  
  export type RoleField = {
    id: number;
    nombre: string;
  };