import prisma from "@/app/lib/prismadb";
const ITEMS_PER_PAGE = 5;

export  async function fetchFilteredUsers(query: string, currentPage: number) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    
    const usuarios = await prisma.usuario.findMany({
      select: {
        id: true,
        primerNombre: true,
        segundoNombre: true,
        primerApellido: true,
        segundoApellido: true,
        email: true,
        celular: true,
        imagen_url: true,
        estado: true,
      },
      where: {
        OR: [
          {
            primerNombre: {
              contains: query.split(' ')[0], // Busca la primera parte del nombre (Jose)
              mode: 'insensitive',
            },
            segundoNombre: {
              contains: query.split(' ')[1], // Busca la segunda parte del nombre (Luis)
              mode: 'insensitive',
            },
          },
          {
            primerNombre: {
              contains: query,
              mode: 'insensitive',
            },
          },
          {
            segundoNombre: {
              contains: query,
              mode: 'insensitive',
            },
          },

        ],
      },
      orderBy: [{ id: "desc" }],
      take: ITEMS_PER_PAGE,
      skip: offset,
    });

    return usuarios
  } catch (error: any) {
    throw new Error(error);
  }
}
//https://blog.bytebytego.com/p/ep85-top-9-http-request-methods, https://nextjs.org/blog/next-13
export async function fetchUsersPages(query: string) {
  try {
    const count = await prisma.usuario.count();
    return count
  } catch (error) {
    throw new Error("Failed to fetch total number of users.");
  }
}
