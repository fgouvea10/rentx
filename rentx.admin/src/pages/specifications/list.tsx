import { FunnelSimple, MagnifyingGlass, PlusCircle } from "phosphor-react";
import { Badge, Table } from "../../components/shared/DataDisplay";
import { Button, Input, Select } from "../../components/shared/Form";

export function ListSpecifications() {
  const columns = [
    {
      title: "Usuário",
      dataIndex: "user",
      key: "user",
    },
    {
      title: "Carro",
      dataIndex: "car",
      key: "car",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (value: string | number | JSX.Element) => {
        const badgeType = {
          Aprovada: "green",
          "Em processamento": "yellow",
          "Não aprovada": "red",
        } as any;

        return <Badge type={badgeType[value as any]}>{value}</Badge>;
      },
    },
    {
      title: "Data do agendamento",
      dataIndex: "date",
      key: "date",
    },
  ];

  const rows = [
    {
      user: "Felipe Gouvea",
      car: "Toyota Corolla",
      status: "Em processamento",
      date: "12/04/2023",
    },
    {
      user: "Felipe Gouvea",
      car: "Toyota Corolla",
      status: "Não aprovada",
      date: "12/04/2023",
    },
    {
      user: "Felipe Gouvea",
      car: "Toyota Corolla",
      status: "Aprovada",
      date: "12/04/2023",
    },
    {
      user: "Felipe Gouvea",
      car: "Toyota Corolla",
      status: "Aprovada",
      date: "12/04/2023",
    },
    {
      user: "Felipe Gouvea",
      car: "Toyota Corolla",
      status: "Aprovada",
      date: "12/04/2023",
    },
    {
      user: "Felipe Gouvea",
      car: "Toyota Corolla",
      status: "Aprovada",
      date: "12/04/2023",
    },
    {
      user: "Felipe Gouvea",
      car: "Toyota Corolla",
      status: "Não aprovada",
      date: "12/04/2023",
    },
    {
      user: "Felipe Gouvea",
      car: "Toyota Corolla",
      status: "Não aprovada",
      date: "12/04/2023",
    },

    {
      user: "Felipe Gouvea",
      car: "Toyota Corolla",
      status: "Não aprovada",
      date: "12/04/2023",
    },
    {
      user: "Felipe Gouvea",
      car: "Toyota Corolla",
      status: "Não aprovada",
      date: "12/04/2023",
    },
  ];

  return (
    <div>
      <section>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-medium text-stone-700 leading-tight">
              Especificações
            </h1>
            <p className="font-regular text-stone-400 leading-relaxed">
              Este é o histórico de especificações da RentX
            </p>

            <p className="mt-4 font-regular text-stone-400 leading-relaxed">
              <a href="/">Dashboard /</a>
              <a href="/" className="text-primary500">
                {" "}
                Specifications
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="w-full mt-20">
        <div className="w-full flex flex-col gap-2 items-center justify-between md:flex-row md:gap-0">
          <div className="w-full flex items-center gap-2">
            <div className='w-full md:w-auto'>
              <Select
                options={[]}
                defaultValue="Filtros"
                leftIcon={<FunnelSimple size={20} />}
              />
            </div>
            <div className='w-full md:w-[30%]'>
              <Input
                placeholder="Pesquisar"
                rightIcon={<MagnifyingGlass size={20} color="#c9c9c9" />}
              />
            </div>
          </div>
          <div className="w-full md:w-[15%]">
            <Button type="button" icon={<PlusCircle size={20} color="#fff" />}>
              Adicionar
            </Button>
          </div>
        </div>
        <div className="w-full mt-8">
          <Table columns={columns} dataSource={rows} />
        </div>
      </section>
    </div>
  );
}
