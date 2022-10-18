import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Users, ArrowsLeftRight } from 'phosphor-react';

import styles from './CarCard.module.css';

type Specification = {
  doors: number;
  gearbox: string;
};

type Car = {
  // id: string;
  // name: string;
  // brand: string;
  // price: number;
  // specifications: Specification;
  // image: string;
  id: string;
  name: string;
  brand: string;
  price: string;
};

type CarCardProps = {
  loading?: boolean;
  path: string;
  car: Car;
};

export function CarCard({ car, path, loading }: CarCardProps): ReactElement {
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
    <Link to={path} className={styles.card}>
      <div>
        <strong className={styles['car-name']}>{car.name}</strong>
        <small className={styles['brand-name']}>{car.brand}</small>
      </div>
      <img
        src="http://images.dealer.com/ddc/vehicles/2020/Audi/Q8/SUV/trim_55_Premium_f33abe/perspective/side-left/2020_24.png"
        alt=""
      />
      <div className={styles['car-info']}>
        {/* <div className={styles['car-specifications']}>
          <div className={styles['car-specification']}>
            <Users /> {car.specifications.doors}
          </div>
          <div className={styles['car-specification']}>
            <ArrowsLeftRight /> {car.specifications.gearbox}
          </div>
        </div> */}
        <span className={styles['car-daily-price']}>
          R$ {car.price}
          <span className={styles['car-daily-text']}>/dia</span>
        </span>
      </div>
    </Link>
  );
}
