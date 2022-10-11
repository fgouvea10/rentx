import { Badge } from "../../components/shared/DataDisplay";
import {
  Button,
  Input,
  File,
  Select,
  Textarea,
} from "../../components/shared/Form";

export function NewSpecification() {
  return (
    <div>
      <section>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-medium text-stone-700 leading-tight">
              Nova especificação
            </h1>

            <p className="mt-4 font-regular text-stone-400 leading-relaxed">
              <a href="/">Dashboard / Specifications /</a>
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
                  Informações gerais da especificação
                </strong>
                <p className="text-stone-400 font-normal text-sm mt-2">
                  Forneça informações relevantes para a especificação no qual
                  está criando.
                </p>
              </div>
              <div className="w-full flex flex-col items-start justify-between lg:w-[70%]">
                <div className="w-full flex flex-col items-start gap-6 mt-8 sm:flex-row">
                  <div className="w-full flex flex-col gap-2">
                    <Input
                      id="specificationName"
                      placeholder="nome da especificação"
                      label="Nome *"
                    />
                  </div>
                </div>

                <div className="w-full flex mt-8">
                  <Textarea
                    label="Descrição *"
                    placeholder="digite a descrição da especificação"
                    id="specificationDescription"
                  />
                </div>
              </div>
            </div>
            <div className="border-b border-b-solid border-b-stone-200 w-full mt-16" />
          </div>
          <div className="w-full flex items-end justify-end mt-16">
            <div className="w-[25%] flex items-end justify-end gap-4">
              <Button variant="secondary">Cancelar</Button>
              <Button disabled>Criar</Button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}
