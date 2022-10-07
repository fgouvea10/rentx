import {
  ArrowUp,
  FunnelSimple,
  TrendUp,
  Money,
  Users,
  ShoppingBag,
  MagnifyingGlass,
} from "phosphor-react";

import { Input, Select } from "../components/shared/Form";
import { Badge, Table } from "../components/shared/DataDisplay";

// import { Input, Select } from '~/components/shared/Form';

export function Dashboard() {
  const options = [
    {
      label: "Label 1",
      value: "asaisja",
    },
    {
      label: "Label 2",
      value: "65gfd",
    },
    {
      label: "Label 3",
      value: "t4rdsasd",
    },
    {
      label: "Label 4",
      value: "ydsfdfd",
    },
  ];

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
  ];

  return (
    <div>
      <section>
        <div className="flex flex-wrap items-center gap-8">
          <div className="bg-white p-6 rounded shadow-sm flex items-center justify-center gap-10 w-full lg:max-w-[348px] h-[150px]">
            <div className="flex flex-col gap-2">
              <p className="text-sm text-stone-600 font-normal">
                Total das vendas
              </p>
              <strong className="text-2xl text-blue-700 font-normal">
                R$ 256.983,28
              </strong>
              <div className="flex items-center gap-1 mt-3 text-sm text-stone-600 font-normal">
                <ArrowUp className="text-green-500" size={16} />
                <span className="text-green-500">+45%</span>
                esta semana
              </div>
            </div>
            <div className="w-20 h-20 rounded-full flex items-center justify-center bg-blue-200">
              <TrendUp size={32} className="text-blue-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded shadow-sm flex items-center justify-center gap-10 w-full lg:max-w-[348px] h-[150px]">
            <div className="flex flex-col gap-2">
              <p className="text-sm text-stone-600 font-normal">
                Rendimento total
              </p>
              <strong className="text-2xl text-blue-700 font-normal">
                R$ 898.123,96
              </strong>
              <div className="flex items-center gap-1 mt-3 text-sm text-stone-600 font-normal">
                <ArrowUp className="text-green-500" size={16} />
                <span className="text-green-500">+15%</span>
                esta semana
              </div>
            </div>
            <div className="w-20 h-20 rounded-full flex items-center justify-center bg-blue-200">
              <Money size={32} className="text-blue-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded shadow-sm flex items-center justify-center gap-10 w-full lg:max-w-[348px] h-[150px]">
            <div className="flex flex-col gap-2">
              <p className="text-sm text-stone-600 font-normal">
                Total de visitas hoje
              </p>
              <strong className="text-2xl text-blue-700 font-normal">
                4.056
              </strong>
              <div className="flex items-center gap-1 mt-3 text-sm text-stone-600 font-normal">
                <ArrowUp className="text-green-500" size={16} />
                <span className="text-green-500">+0.5%</span>
                esta semana
              </div>
            </div>
            <div className="w-20 h-20 rounded-full flex items-center justify-center bg-blue-200">
              <Users size={32} className="text-blue-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded shadow-sm flex items-center justify-center gap-10 w-full lg:max-w-[348px] h-[150px]">
            <div className="flex flex-col gap-2">
              <p className="text-sm text-stone-600 font-normal">
                Total de compras hoje
              </p>
              <strong className="text-2xl text-blue-700 font-normal">
                856
              </strong>
              <div className="flex items-center gap-1 mt-3 text-sm text-stone-600 font-normal">
                <ArrowUp className="text-green-500" size={16} />
                <span className="text-green-500">+1%</span>
                esta semana
              </div>
            </div>
            <div className="w-20 h-20 rounded-full flex items-center justify-center bg-blue-200">
              <ShoppingBag size={32} className="text-blue-500" />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full mt-20">
        <div className="w-full flex flex-col justify-between gap-12 xl:flex-row">
          <div className="w-full flex flex-col xl:w-[70%]">
            <div className="w-full flex flex-col items-start justify-between xl:flex-row xl:items-center">
              <h2 className="text-xl text-stone-700 mb-4 xl:w-[350px] xl:mb-0">
                Compras recentes
              </h2>
              <div className="w-full flex items-center justify-end gap-2">
                <div>
                  <Select
                    options={options}
                    defaultValue="Filtros"
                    leftIcon={<FunnelSimple size={20} />}
                  />
                </div>
                <div>
                  <Input
                    placeholder="Pesquisar"
                    rightIcon={<MagnifyingGlass size={20} color="#c9c9c9" />}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Table columns={columns} dataSource={rows} />
            </div>
          </div>
          <div className="w-full bg-white shadow-sm xl:w-[30%]">
            <div className="flex flex-col p-8">
              <p>noething here yet</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
