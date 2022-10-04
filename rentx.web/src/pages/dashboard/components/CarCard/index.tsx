import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Users, ArrowsLeftRight } from 'phosphor-react';

import styles from './CarCard.module.css';

type Specification = {
  doors: number;
  gearbox: string;
}

type Car = {
  id: string;
  name: string;
  brand: string;
  dailyDate: number;
  specifications: Specification;
  image: string;
}

type CarCardProps = {
  loading?: boolean;
  car: Car;
};

export function CarCard({ car, loading }: CarCardProps): ReactElement {
  if (loading) {
    return (
      <>
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="w-full lg:w-[396px] rounded-md h-60 bg-gray-300 animate-pulse"
          />
        ))}
      </>
    );
  }

  return (
    <Link to={`/reservas/${car.id}`} className={styles.card}>
      <div>
        <strong className={styles['car-name']}>{car.name}</strong>
        <small className={styles['brand-name']}>{car.brand}</small>
      </div>
      <img
        src={car.image}
        alt=""
      />
      <div className={styles['car-info']}>
        <div className={styles['car-specifications']}>
          <div className={styles['car-specification']}>
            <Users /> {car.specifications.doors}
          </div>
          <div className={styles['car-specification']}>
            <ArrowsLeftRight /> {car.specifications.gearbox}
          </div>
        </div>
        <span className={styles['car-daily-price']}>
          R$ {car.dailyDate.toFixed(2)}
          <span className={styles['car-daily-text']}>/dia</span>
        </span>
      </div>
    </Link>
  );
}
