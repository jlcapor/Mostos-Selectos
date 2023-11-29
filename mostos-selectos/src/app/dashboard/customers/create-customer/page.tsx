import Breadcrumbs from "@/components/breadcrumbs";

export default async function CreateCustomerPage() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Clientes", href: "/dashboard/customers" },
          {
            label: "Crear Cliente",
            href: "/dashboard/users/create-customer",
            active: true,
          },
        ]}
      />
    </main>
  );
}
