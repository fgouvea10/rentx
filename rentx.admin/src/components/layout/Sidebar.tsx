import { ReactElement, useContext } from "react";

import logoImg from "../../assets/logo_icon.svg";

import {
  SignOut,
  Book,
  Car,
  Gear,
  Wrench,
  Archive,
  SquaresFour,
  Users,
} from "phosphor-react";

const SIDEBAR_MOCK = [
  [
    {
      name: "Dashboard",
      icon: <SquaresFour size={20} color="#F8F8F8" />,
      path: "/",
    },
  ],
  [
    {
      name: "Aluguéis",
      icon: <Book size={20} color="#F8F8F8" />,
      path: "/rentals",
    },
    {
      name: "Carros",
      icon: <Car size={20} color="#F8F8F8" />,
      path: "/cars",
    },
    {
      name: "Clientes",
      icon: <Users size={20} color="#F8F8F8" />,
      path: "/customers",
    },
    {
      name: "Especificações",
      icon: <Wrench size={20} color="#F8F8F8" />,
      path: "/specifications",
    },
    {
      name: "Categorias",
      icon: <Archive size={20} color="#F8F8F8" />,
      path: "/categories",
    },
  ],
];

export function Sidebar(): ReactElement {
  return (
    <aside className="hidden lg:flex w-[250px] fixed left-0 h-screen bg-stone-900 p-3 pt-8 duration-300 z-10">
      <div className="px-2 py-4 flex flex-col w-full h-full relative">
        <img src={logoImg} className="w-10 h-auto" />

        <ul className="mt-10 flex flex-col gap-4">
          {SIDEBAR_MOCK[0].map((item, index) => (
            <li
              key={String(index + 1)}
              className="flex gap-2 items-center transition-colors text-sm rounded-xl py-2 px-4 cursor-pointer text-white hover:bg-stone-800"
            >
              <a
                className="text-inherit flex gap-2 items-center"
                href={item.path}
              >
                {item.icon} {item.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="w-full h-[1px] bg-stone-800 mt-6" />

        <ul className="mt-10 flex flex-col gap-4">
          {SIDEBAR_MOCK[1].map((item, index) => (
            <li
              key={String(index * 10)}
              className="flex gap-2 items-center transition-colors text-sm rounded-xl py-2 px-4 cursor-pointer text-white hover:bg-stone-800"
            >
              <a
                className="text-inherit flex gap-2 items-center"
                href={item.path}
              >
                {item.icon} {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="w-full h-[1px] bg-stone-800 mt-6" />

        <ul className="mt-10 flex flex-col gap-4 absolute bottom-0 left-0 w-full">
          <li className="flex gap-2 items-center transition-colors text-sm rounded-xl py-2 px-4 cursor-pointer text-white hover:bg-stone-800">
            <a
              className="text-inherit flex gap-2 items-center"
              href="/settings"
            >
              <Gear size={20} color="#F8F8F8" /> Configurações
            </a>
          </li>
          <li className="flex gap-2 items-center transition-colors text-sm rounded-xl py-2 px-4 cursor-pointer text-white hover:bg-stone-800">
            <button
              className="text-inherit flex gap-2 items-center text-[#be1313]"
              onClick={() => {}}
            >
              <SignOut size={20} color="#be1313" /> Sair da conta
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
}
