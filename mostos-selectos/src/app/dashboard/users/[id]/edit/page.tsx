import Breadcrumbs from "@/components/breadcrumbs";
import Form from "@/app/ui/users/edit-user";
export default async function UserPage({ params }: { params: { id: string } }) {
  const id = params.id;
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Users", href: "/dashboard/users" },
          {
            label: "Edit User",
            href: `/dashboard/users/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form/>
    </main>
  );
}
