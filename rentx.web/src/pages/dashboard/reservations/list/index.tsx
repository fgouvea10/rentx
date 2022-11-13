import { useEffect, useState } from 'react';

import { getRentalsByUser } from '~/services/useCases/rentals/list-by-user';
import { CarCard } from '../../components/CarCard';

import styles from './ReservationsList.module.css';

type Rental = {
  name: string;
  brand: string;
  price: string;
  id: string;
  expectedReturnDate?: string;
};

export function ReservationsList() {
  const [rentals, setRentals] = useState<Rental[]>([]);
  const [isFetchingRentals, setIsFetchingRentals] = useState(false);

  const listRentals = async () => {
    setIsFetchingRentals(true);

    try {
      const response = await getRentalsByUser();
      setRentals(response);
    } catch (err) {
      // console.log('err', err);
    } finally {
      setIsFetchingRentals(false);
    }
  };

  useEffect(() => {
    listRentals();
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles['summary']}>
        <div className={styles.container}>
          <h1 className={styles['section-title']}>Minhas reservas</h1>
          <p className={styles['small-text']}>
            Confira todas as suas reservas feitas no site
          </p>
        </div>
      </div>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles['grid-container']}>
            {rentals && rentals.length > 0 ? (
              rentals.map((rental) => (
                <CarCard
                  car={rental}
                  type="rented"
                  isRentalInProgress={false}
                  key={rental.name}
                  loading={false}
                />
              ))
            ) : (
              <p>Você não possui registro de reservas</p>
              // TODO: better style for empty rentals
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
