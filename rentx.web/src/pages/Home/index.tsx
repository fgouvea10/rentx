export function Home() {
  return (
    <>
      <section className="w-full min-h-screen relative">
        <div className="w-full max-w-[1280px] my-0 mx-auto flex items-center justify-between py-8 px-4">
          <div>
            <h1 className="text-6xl text-stone-700 leading-tight">
              Alugue carros de luxo com o <br />
              <span className="text-primary500 border-b-2 border-b-solid border-b-primary500">
                menor preço
              </span>{' '}
              do mercado
            </h1>
            <p className="text-stone-700 mt-12 leading-tight">
              Está procurando por carros de luxo ou por assinatura com preços
              que cabem no seu bolso? <br /> Procure{' '}
              <span className="font-medium text-primary500">bem aqui</span>!
            </p>
            {/* <div>
            <input />
          </div> */}
          </div>
        </div>
      </section>

      <section className="w-full min-h-screen relative">
        <div className="w-full max-w-[1280px] my-0 mx-auto flex items-center justify-between py-8 px-4">
          <div className="">
            <span>Nossos serviços</span>
            <h2>Promova experiências incríveis</h2>
          </div>
          {/* cards with features */}
        </div>
      </section>
      <section className="w-full min-h-screen relative">
        <div className="w-full max-w-[1280px] my-0 mx-auto flex items-center justify-between py-8 px-4">
          <div className="">
            <span>Nossa linha</span>
            <h2>Os preferidos dos usuários</h2>
          </div>
        </div>
      </section>
      <section className="w-full min-h-screen relative">
        <div className="w-full max-w-[1280px] my-0 mx-auto flex items-center justify-between py-8 px-4">
          <div className="">
            <span>Sobre nós</span>
            <h2>Tudo começou com uma simples ideia...</h2>
          </div>
        </div>
      </section>
      {/* <section className='w-full min-h-screen relative'>
    <div className="w-full max-w-[1280px] my-0 mx-auto flex items-center justify-between py-8 px-4">
   a section with discount and news letter
    </div>
    </section> */}
      {/* <footer></footer> */}
    </>
  );
}
