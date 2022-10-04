import { MagnifyingGlass } from 'phosphor-react';

import { Select } from '~/components/shared/Form';
import { Input } from '~/pages/dashboard/components/SearchInput';
import { CarCard } from '../../components/CarCard';

import styles from './ListCars.module.css';

export function ListCars() {
  const isAppointmentActive = false;

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
                  rightIcon={<MagnifyingGlass size={20} color='#a8a29e' />}
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
          </div>
        </div>
      </section>
    </main>
  );
}
