import prisma from "@/app/lib/prismadb";
const ITEMS_PER_PAGE = 5;

export async function fetchFilteredUsers(query: string, currentPage: number) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const usuarios = await prisma.usuario.findMany({
      select: {
        id: true,
        nombres: true,
        apellidos: true,
        email: true,
        celular: true,
        estado: true,
        rol: {
          select: {
            id: true,
            nombre: true,
          },
        },
      },
      where: {
        OR: [
          {
            nombres: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            apellidos: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            email: {
              contains: query,
              mode: "insensitive",
            },
          },
        ],
      },
      orderBy: [{ id: "desc" }],
      take: ITEMS_PER_PAGE,
      skip: offset,
    });
    return usuarios;
  } catch (error: any) {
    throw new Error(error);
  }
}
//https://blog.bytebytego.com/p/ep85-top-9-http-request-methods, https://nextjs.org/blog/next-13
export async function fetchUsersPages(query: string) {
  try {
    const count = await prisma.usuario.count({
      where: {
        OR: [
          { nombres: { contains: query, mode: "insensitive" } },
          { apellidos: { contains: query, mode: "insensitive" } },
          { email: { contains: query, mode: "insensitive" } },
        ],
      },
    });

    const totalPages = Math.ceil(count / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    throw new Error("Failed to fetch total number of users.");
  }
}

export async function fetchUserById(userId: number) {
  try {
    const user = await prisma.usuario.findUnique({
      where: {
        id: userId,
      },
    });

    return user;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchRoles() {
  try {
    const roles = await prisma.rol.findMany({
      select: {
        id: true,
        nombre: true,
      },
    });
    return roles;
  } catch (err) {
    throw new Error("Failed to fetch all roles.");
  }
}
