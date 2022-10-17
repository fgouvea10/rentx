import { Header } from "../components/layout/Header";
import { Sidebar } from "../components/layout/Sidebar";

import { AppRoutes } from "../routes/app-routes";

export function DefaultLayout() {
  return (
    <main className="flex bg-gray-50">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
        <div className="min-h-screen flex-1 p-6 lg:p-7 lg:px-16 lg:ml-[16rem]">
          <AppRoutes />
        </div>
      </div>
    </main>
  );
}
