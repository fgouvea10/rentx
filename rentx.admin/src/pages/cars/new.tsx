import { Badge } from "../../components/shared/DataDisplay";
import {
  Button,
  Input,
  File,
  Select,
  Textarea,
} from "../../components/shared/Form";

export function NewCar() {
  return (
    <div>
      <section>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-medium text-stone-700 leading-tight">
              Novo carro
            </h1>

            <p className="mt-4 font-regular text-stone-400 leading-relaxed">
              <a href="/">Dashboard / Cars /</a>
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
                  Informações gerais do carro
                </strong>
                <p className="text-stone-400 font-normal text-sm mt-2">
                  Forneça informações relevantes para o carro no qual está
                  criando.
                </p>
              </div>
              <div className="w-full flex flex-col items-start justify-between lg:w-[70%]">
                <div className="w-full flex flex-col items-start gap-6 sm:flex-row">
                  <div className="w-full">
                    <Input
                      label="Nome"
                      placeholder="nome do carro"
                      id="carName"
                    />
                  </div>
                  <div className="w-full">
                    <Input
                      label="Marca"
                      placeholder="audi, mercedes"
                      id="carBrand"
                    />
                  </div>
                </div>

                <div className="w-full flex flex-col items-start gap-6 mt-8 sm:flex-row">
                  <div className="w-full">
                    <Input
                      label="Preço da diária"
                      placeholder="R$ 00,00"
                      id="dailyRate"
                    />
                  </div>
                  <div className="w-full flex flex-col">
                    <Input
                      label="Placa do carro"
                      placeholder="XXXX-000"
                      id="licensePlate"
                    />
                  </div>
                </div>

                <div className="w-full flex flex-col items-start gap-6 mt-8 sm:flex-row">
                  <div className="w-full flex flex-col gap-2">
                    <Select
                      label="Categoria"
                      defaultValue="Selecione uma categoria"
                      options={[]}
                    />
                  </div>
                </div>

                <div className="w-full flex mt-8">
                  <Textarea
                    label="Descrição"
                    placeholder="digite a descrição do carro"
                    id="productDescription"
                  />
                </div>
              </div>
            </div>
            <div className="border-b border-b-solid border-b-stone-200 w-full mt-16" />

            <div className="w-full mt-12 flex flex-col items-start justify-between lg:flex-row lg:gap-36 xl:gap-48 2xl:gap-52">
              <div className="w-full flex flex-col lg:w-[30%]">
                <strong className="font-medium text-stone-700 leading-tight">
                  Informações gerais do carro
                </strong>
                <p className="text-stone-400 font-normal text-sm mt-2">
                  Detalhe, em fotos, tudo que o produto é capaz de oferecer.
                  Lembre-se de colocar fotos com tamanho de 600px por 600px.
                </p>
              </div>
              <div className="w-full flex flex-col items-start justify-between lg:w-[70%]">
                <div className="w-full mt-8 grid grid-auto-size gap-4 2xl:flex 2xl:w-auto 2xl:mt-0">
                  <File />
                  <File />
                  <File />
                  <File />
                </div>
              </div>
            </div>
            <div className="border-b border-b-solid border-b-stone-200 w-full mt-16" />

            <div className="w-full mt-12 flex flex-col items-start justify-between lg:flex-row lg:gap-36 xl:gap-48 2xl:gap-52">
              <div className="w-full flex flex-col lg:w-[30%]">
                <strong className="font-medium text-stone-700 leading-tight">
                  Especificações do carro
                </strong>
                <p className="text-stone-400 font-normal text-sm mt-2">
                  Forneça até 6 especificações para este carro.
                </p>
              </div>
              <div className="w-full flex flex-col gap-4 items-start justify-between lg:w-[70%]">
                <Select
                  options={[]}
                  defaultValue="Selecione uma especificação"
                />
                <div className="flex items-center flex-wrap gap-1">
                  <Badge type="blue">Câmbio automático</Badge>
                  <Badge type="blue">Combustível flex</Badge>
                  <Badge type="blue">Outra</Badge>
                  <Badge type="blue">Mais outra</Badge>
                  <Badge type="blue">E Mais outra</Badge>
                  <Badge type="blue">E Mais uma outra</Badge>
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
