import { MagnifyingGlass } from 'phosphor-react';
import { useEffect, useState } from 'react';

import { Select } from '~/components/shared/Form';
import { Input } from '~/pages/dashboard/components/SearchInput';
import { listAvailableCars } from '~/services/useCases/cars/list-available-cars';
import { CarCard } from '../../components/CarCard';

import styles from './ListCars.module.css';

type Car = {
  id: string;
  name: string;
  brand: string;
  price: number;
  categoryId: string;
};

export function ListCars() {
  const isAppointmentActive = false;
  const [isFetchingCars, setIsFetchingCars] = useState(false);
  const [cars, setCars] = useState<Car[]>([]);

  const brands = [
    {
      label: 'Audi',
      value: 'audi',
    },
    {
      label: 'Toyota',
      value: 'audi',
    },
    {
      label: 'Chevrolet',
      value: 'audi',
    },
    {
      label: 'Porsche',
      value: 'audi',
    },
    {
      label: 'Mercedes Benz',
      value: 'audi',
    },
    {
      label: 'BMW',
      value: 'audi',
    },
  ]

  const listCars = async () => {
    setIsFetchingCars(true);

    try {
      const response = await listAvailableCars();
      // console.log(response);
      setCars(response);
    } catch (err) {
      setCars([]);
    } finally {
      setIsFetchingCars(false);
    }
  };
  useEffect(() => {
    listCars();
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles['summary']}>
        <div className={styles.container}>
          <h1 className={styles['section-title']}>Alugar um carro</h1>
          <p className={styles['small-text']}>
            Confira todos os carros disponíveis
          </p>
          <div className="mt-8">
            <div className="flex gap-4 items-center w-full">
              <div className="w-[30%]">
                <Input
                  placeholder="Pesquise por um carro"
                  rightIcon={<MagnifyingGlass size={20} color="#a8a29e" />}
                />
              </div>
              <div className="w-[30%]">
                <Select options={brands} defaultValue="Filtre por marcas" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles['grid-container']}>
            {/* {[...Array(12)].map((_, index) => (
              <CarCard key={index} car={} />
            ))} */}
            {cars.map(car => <CarCard key={car.id} car={car} />)}
            {/* <p></p> */}
            {/* <p>oi</p> */}
          </div>
        </div>
      </section>
    </main>
  );
}
