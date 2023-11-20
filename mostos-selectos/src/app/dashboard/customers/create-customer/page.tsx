import Breadcrumbs from "@/components/breadcrumbs";

export default async function CreateCustomerPage() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Customers", href: "/dashboard/customers" },
          {
            label: "Create Customer",
            href: "/dashboard/users/create-customer",
            active: true,
          },
        ]}
      />
    </main>
  );
}
