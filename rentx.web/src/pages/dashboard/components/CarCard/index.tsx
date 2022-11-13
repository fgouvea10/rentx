import { Link } from 'react-router-dom';

import styles from './CarCard.module.css';

type Car = {
  name: string;
  brand: string;
  price: string;
  id: string;
  expectedReturnDate?: string;
};

type CarCardProps = {
  isRentalInProgress?: boolean;
  car: Car;
  type: 'rented' | 'rent';
  loading?: boolean;
};

export function CarCard({
  car,
  isRentalInProgress,
  loading,
  type,
}: CarCardProps) {
  if (loading) {
    return (
      <div className="flex justify-center items-center w-full h-48 animate-pulse bg-gray-300 rounded" />
    );
  }

  return (
    <Link
      to={type === 'rent' ? `/dashboard/carros/${car.id}` : `/dashboard/reservas/${car.id}`}
      className={`${styles.card} relative`}
    >
      <div className={styles['reservation-card-container']}>
        <div className="flex flex-col gap-4 justify-between">
          <div>
            <small className={styles['info-car-text']}>{car.brand}</small>
            <span className={styles['car-name']}>{car.name}</span>
          </div>
          <div>
            <small className={styles['info-car-text']}>Ao dia</small>
            <span className={styles['car-daily-price']}>R$ {car.price}</span>
          </div>
        </div>
        <img
          src="https://www.picng.com/upload/porsche/png_porsche_22652.png"
          alt=""
        />
      </div>
      {isRentalInProgress && (
        <>
          <div className={styles['active-reservation-animated']}></div>
          <div
            title="Reserva em andamento"
            className={styles['active-reservation']}
          ></div>
        </>
      )}
    </Link>
  );
}
