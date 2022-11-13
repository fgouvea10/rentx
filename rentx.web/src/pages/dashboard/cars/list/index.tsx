import { MagnifyingGlass } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

import { Select } from '~/components/shared/Form';
import { Input } from '~/pages/dashboard/components/SearchInput';
import { getCarsBySearch } from '~/services/useCases/cars/getBySearch';
import { listAvailableCars } from '~/services/useCases/cars/list-available-cars';
import { CarCard } from '../../components/CarCard';

import styles from './ListCars.module.css';

type Car = {
  id: string;
  name: string;
  brand: string;
  price: string;
};

export function ListCars() {
  const [isFetchingCars, setIsFetchingCars] = useState(false);
  const [cars, setCars] = useState<Car[]>([]);
  const [inputValue, setInputValue] = useState('');

  // const brands = [
  //   {
  //     label: 'Audi',
  //     value: 'audi',
  //   },
  //   {
  //     label: 'Toyota',
  //     value: 'audi',
  //   },
  //   {
  //     label: 'Chevrolet',
  //     value: 'audi',
  //   },
  //   {
  //     label: 'Porsche',
  //     value: 'audi',
  //   },
  //   {
  //     label: 'Mercedes Benz',
  //     value: 'audi',
  //   },
  //   {
  //     label: 'BMW',
  //     value: 'audi',
  //   },
  // ];

  const listCars = async () => {
    setIsFetchingCars(true);

    try {
      const response = await listAvailableCars();
      setCars(response);
    } catch (err) {
      setCars([]);
    } finally {
      setIsFetchingCars(false);
    }
  };

  async function filterCarsBySearch() {
    setIsFetchingCars(true);
    try {
      const response = await getCarsBySearch(inputValue);
      setCars(response);
    } catch (err) {
      // console.log('err', err);
    } finally {
      setIsFetchingCars(false);
    }
  }

  useEffect(() => {
    listCars();
  }, []);

  return (
    <>
      <Helmet>
        <title>Alugue um carro - RentX</title>
      </Helmet>

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
                    onIconClick={filterCarsBySearch}
                    value={inputValue}
                    onChange={event => setInputValue(event.target.value)}
                  />
                </div>
                <div className="w-[30%]">
                  {/* <Select
                    options={brands}
                    defaultValue="Filtre por categorias"
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles['grid-container']}>
              {cars.map((car) => (
                <CarCard
                  key={car.id}
                  car={car}
                  loading={isFetchingCars}
                  type="rent"
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
