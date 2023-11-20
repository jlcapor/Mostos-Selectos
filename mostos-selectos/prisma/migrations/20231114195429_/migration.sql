-- CreateTable
CREATE TABLE "Usuario" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "primerNombre" TEXT NOT NULL,
    "segundoNombre" TEXT,
    "primerApellido" TEXT NOT NULL,
    "segundoApellido" TEXT,
    "email" TEXT NOT NULL,
    "celular" TEXT,
    "password" TEXT NOT NULL,
    "confirmado" BOOLEAN NOT NULL DEFAULT false,
    "token" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rol" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "nombreRol" TEXT NOT NULL,

    CONSTRAINT "Rol_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsuarioRol" (
    "id" SERIAL NOT NULL,
    "usuarioId" UUID NOT NULL,
    "rolId" UUID NOT NULL,

    CONSTRAINT "UsuarioRol_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- AddForeignKey
ALTER TABLE "UsuarioRol" ADD CONSTRAINT "UsuarioRol_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioRol" ADD CONSTRAINT "UsuarioRol_rolId_fkey" FOREIGN KEY ("rolId") REFERENCES "Rol"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
