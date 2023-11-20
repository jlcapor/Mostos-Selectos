import Breadcrumbs from "@/components/breadcrumbs";
import CreteUserForm from "@/app/ui/users/create-user";

export default async function CreateUserPage() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Users", href: "/dashboard/users" },
          {
            label: "Create User",
            href: "/dashboard/users/create-user",
            active: true,
          },
        ]}
      />
      <CreteUserForm />
    </main>
  );
}
