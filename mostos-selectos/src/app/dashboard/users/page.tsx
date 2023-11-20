import { lusitana } from "@/app/ui/fonts";
import Link from "next/link";
import Search from "@/app/ui/search/search";
import UserList from "@/app/ui/users/user-list";
import { PlusIcon } from "@heroicons/react/24/outline";

export default function UsersPage() {
    return(
       <div className="w-full">
            <div className="flex w-full items-center justify-between">
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-3xl`}>
                Users
            </h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Search user..." />
                <Link
                    href="/dashboard/users/create-user"
                    className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                    <span className="hidden md:block">Create User</span>{' '}
                    <PlusIcon className="h-5 md:ml-4" />
                </Link>
            </div>
            <UserList/>
       </div>
    )
}