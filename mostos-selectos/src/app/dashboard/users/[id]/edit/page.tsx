import Breadcrumbs from "@/components/breadcrumbs";
import Form from "@/app/ui/users/edit-user";
import { fetchRoles, fetchUserById } from "@/app/lib/data/users/userData";
import { notFound } from "next/navigation";

interface UpdateUserPageProps {
  params: {
    id: number;
  };
}

export default async function UpdateUserPage({ params }: UpdateUserPageProps) {
  const usuarioId = Number(params.id);
  const [usuario, roles] = await Promise.all([
    fetchUserById(usuarioId),
    fetchRoles(),
  ]);

  if (!usuario) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Users", href: "/dashboard/users" },
          {
            label: "Edit User",
            href: `/dashboard/users/${usuarioId}/edit`,
            active: true,
          },
        ]}
      />
      <Form usuario={usuario} roles={roles} />
    </main>
  );
}
