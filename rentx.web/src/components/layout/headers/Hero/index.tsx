export function HeroHeader() {
  return (
    <header className="w-full relative">
      <div className="w-full max-w-[1280px] my-0 mx-auto flex items-center justify-between py-8 px-4">
        <h1>
          <a href="/">Encontre</a>
        </h1>

        <nav>
          <ul className="flex items-center gap-6">
            <li className="font-medium text-primary500">
              <a href="/">Home</a>
            </li>
            <li className="font-regular text-stone-600 hover:text-primary500 transition-colors">
              <a href="/">Carros</a>
            </li>
            <li className="font-regular text-stone-600 hover:text-primary500 transition-colors">
              <a href="/">Serviços</a>
            </li>
            <li className="font-regular text-stone-600 hover:text-primary500 transition-colors">
              <a href="/">Contatos</a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-8">
          <a href="/" className="border border-solid border-primary500 text-primary500 px-4 py-3 focus:ring-4 focus:ring-primary600 font-medium rounded-full text-sm">Minha conta</a>
          <a href="/" className="bg-primary500 text-black px-4 py-3 hover:bg-primary400 transition-colors focus:ring-4 focus:ring-primary600 font-medium rounded-full text-sm">Alugar um carro</a>
        </div>
      </div>
    </header>
  );
}
