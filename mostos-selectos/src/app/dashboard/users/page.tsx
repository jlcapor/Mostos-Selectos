import { lusitana } from "@/app/ui/fonts";
import Search from "@/components/search/search";
import UserList from "@/app/ui/users/user-list";
import Pagination from "@/components/pagination/pagination";
import { CreateUser } from "@/app/ui/users/buttons";
import { fetchUsersPages } from "@/app/lib/data/users/userData";
import { Suspense } from "react";
import { UsersTableSkeleton } from "@/app/ui/skeletons";
export default async function UsersPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchUsersPages(query);
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} mb-4 text-xl md:text-3xl`}>
          Usuarios
        </h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search user..." />
        <CreateUser />
      </div>
      <Suspense key={query + currentPage} fallback={<UsersTableSkeleton />}>
        <UserList query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
