import { lusitana } from "@/app/ui/fonts";
import Search from "@/components/search/search";
import UserList from "@/app/ui/users/user-list";
import Pagination from "@/components/pagination/pagination";
import { CreateUser } from "@/app/ui/users/buttons";
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
  // const totalPages = await fetchUsersPages(query);
  
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} mb-4 text-xl md:text-3xl`}>
          Users
        </h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search user..." />
        <CreateUser />
      </div>
      <UserList query={query} currentPage={currentPage} />
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={5} />
      </div>
    </div>
  );
}
