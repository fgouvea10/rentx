import { Header } from "../components/layout/Header"
import { Sidebar } from "../components/layout/Sidebar";
import { EditCar } from "../pages/cars/edit";
import { NewCar } from "../pages/cars/new";
import { NewCategory } from "../pages/categories/new";
import { NewCustomer } from "../pages/customers/new";
import { Dashboard } from "../pages/dashboard";
import { ListRentals } from "../pages/rentals/list";
import { EditSpecification } from "../pages/specifications/edit";
import { NewSpecification } from "../pages/specifications/new";

export function DefaultLayout() {
  return (
    <main className='flex bg-gray-50'>
      <Sidebar />
      <div className='flex flex-col w-full'>
        <Header />
        <div className='min-h-screen flex-1 p-6 lg:p-7 lg:px-16 lg:ml-[16rem]'>
          <NewCategory />
        </div>
      </div>
    </main>
  );
}
