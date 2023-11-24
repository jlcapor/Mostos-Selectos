import CustomerList from "@/app/ui/customes/customer-list";
import { lusitana } from "@/app/ui/fonts";
import Search from "@/components/search/search";
import { PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function CustomersPage() {
    return (
            <div className="mb-1 w-full">
                <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} mb-4 text-xl md:text-3xl`}>Customers</h1>
                </div>
                <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                    <Search placeholder="Search customer..." />
                    <div className="flex items-center ">
                    <Link href={'/dashboard/customers/create-customer'} className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                        <span className="hidden md:block">Create Customer</span>{' '}
                        <PlusIcon className="h-5 md:ml-4" />
                    </Link>
                    </div>
                </div>
                <CustomerList/>
            </div>
      
    )
}