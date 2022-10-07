import { List } from "phosphor-react";

import logoImg from '../../assets/logo_icon.svg';

export function Header() {
  return (
    <header className="w-full bg-white relative border-b-[1px] border-solid border-b-stone-100 hide-print">
      <div className="h-full px-7 py-5 flex gap-3 justify-between lg:justify-end items-center">
        <div className='flex flex-row-reverse items-center gap-8 lg:hidden'>
          <img src={logoImg} alt='' />
          <button
            type="button"
            className="bg-transparent border-0 flex items-center justify-center"
          >
            <List size={24} />
          </button>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-sm text-black">Felipe Gouvea</p>
          <div className="flex">
            <div className="flex items-center rounded-full justify-center relative w-12 h-12 bg-gray-200 select-none">
              <span className="text-slate-700 text-xl">FG</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
