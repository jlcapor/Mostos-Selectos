import NavBar from './layouts/navbar/navbar'
import SideNav from './layouts/sidenav/sidenav'
import Footer from './layouts/footer/footer'

export default function Layout({ children }: { children: React.ReactNode }) {
    return(
        <div className='bg-gray-300'>
        <NavBar/>
         <div className="flex overflow-hidden min-h-screen pb-20 pt-28">
            <SideNav/>
            <div className="h-full w-full relative overflow-y-auto lg:ml-64">
                <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
                    {children}
                </div>
                <Footer/>
            </div>
         </div>
       </div>
    )
}