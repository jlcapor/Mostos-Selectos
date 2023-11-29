import Breadcrumbs from "@/components/breadcrumbs";
import Form from "@/app/ui/users/create-user";
import { fetchRoles } from "@/app/lib/data/users/userData";

export default async function CreateUserPage() {
  const roles = await fetchRoles();
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Usuarios", href: "/dashboard/users" },
          {
            label: "Crear Usuario",
            href: "/dashboard/users/create-user",
            active: true,
          },
        ]}
      />
      <Form roles={roles} />
    </main>
  );
}
