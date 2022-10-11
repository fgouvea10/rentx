import { Badge } from "../../components/shared/DataDisplay";
import { Avatar } from "../../components/shared/DataDisplay/Avatar";
import {
  Button,
  Input,
  File,
  Select,
  Textarea,
} from "../../components/shared/Form";

export function NewCustomer() {
  return (
    <div>
      <section>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-medium text-stone-700 leading-tight">
              Novo cliente
            </h1>

            <p className="mt-4 font-regular text-stone-400 leading-relaxed">
              <a href="/">Dashboard / Users /</a>
              <a href="/" className="text-primary500">
                {" "}
                New
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="w-full mt-20">
        <form className="bg-white rounded-lg p-6 lg:p-8">
          <div className="w-full flex flex-col">
            <h2 className="text-2xl font-medium text-stone-700 leading-tight">
              Informações
            </h2>
            <small className="text-stone-400 mt-4 leading-relaxed">
              (*) Campos obrigatórios
            </small>
            <div className="w-full mt-12 flex flex-col items-start justify-between lg:flex-row lg:gap-36 xl:gap-48 2xl:gap-52">
              <div className="w-full flex flex-col lg:w-[30%]">
                <strong className="font-medium text-stone-700 leading-tight">
                  Informações gerais do cliente
                </strong>
                <p className="text-stone-400 font-normal text-sm mt-2">
                  Forneça informações relevantes para o cadastro do cliente.
                </p>
              </div>
              <div className="w-full mt-8 lg:mt-0 flex flex-col items-start justify-between lg:w-[70%]">
                <div className="w-full flex items-center gap-8">
                  <Avatar size="xl" />
                  <div className="flex gap-4 flex-col">
                    <Button type="button">Fazer upload</Button>
                    {/* <Button type='button' variant="secondary">Remover foto</Button> */}
                  </div>
                </div>
                <div className="w-full flex flex-col items-start gap-6 mt-8 sm:flex-row">
                  <div className="w-full">
                    <Input
                      label="Nome"
                      placeholder="nome do cliente"
                      id="userName"
                    />
                  </div>
                  <div className="w-full">
                    <Input
                      label="Nome de usuário"
                      placeholder="username"
                      id="username"
                    />
                  </div>
                </div>

                <div className="w-full flex flex-col items-start gap-6 mt-8 sm:flex-row">
                  <div className="w-full">
                    <Input label="E-mail" placeholder="email" id="email" />
                  </div>
                  <div className="w-full flex flex-col">
                    <Input
                      label="Carteira de motorista"
                      placeholder="XXXX000"
                      id="driverLicense"
                    />
                  </div>
                </div>

                <div className="w-full flex flex-col items-start gap-6 mt-8 sm:flex-row">
                  <div className="w-full">
                    <Input
                      label="Senha"
                      placeholder="senha"
                      id="password"
                      type="password"
                    />
                  </div>
                  <div className="w-full flex flex-col">
                    <Input
                      label="Senha"
                      placeholder="senha"
                      id="password"
                      type="password"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="border-b border-b-solid border-b-stone-200 w-full mt-16" />
          </div>
          <div className="w-full flex items-end justify-end mt-16">
            <div className="w-[25%] flex items-end justify-end gap-4">
              <Button variant="secondary">Cancelar</Button>
              <Button disabled>Salvar alterações</Button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}
