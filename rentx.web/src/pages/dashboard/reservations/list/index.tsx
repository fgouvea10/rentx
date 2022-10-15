import { useEffect, useState } from 'react';

import { getRentalsByUser } from '~/services/useCases/rentals/list-by-user';

import styles from './ReservationsList.module.css';

type Rental = {
  name: string;
  brand: string;
  price: number;
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
                <a
                  key={rental.name}
                  href="/reservas/as86uja-gahb8s-asgbv7"
                  className={`${styles.card} relative`}
                >
                  <div className={styles['reservation-card-container']}>
                    <div className="flex flex-col gap-4 justify-between">
                      <div>
                        <small className={styles['info-car-text']}>
                          {rental.brand}
                        </small>
                        <span className={styles['car-name']}>
                          {rental.name}
                        </span>
                      </div>
                      <div>
                        <small className={styles['info-car-text']}>
                          Ao dia
                        </small>
                        <span className={styles['car-daily-price']}>
                          R$ {rental.price}
                        </span>
                      </div>
                    </div>
                    <img
                      src="https://www.picng.com/upload/porsche/png_porsche_22652.png"
                      alt=""
                    />
                  </div>
                  {/* {isAppointmentActive && (
                <>
                  <div
                    className={styles['active-reservation-animated']}
                  ></div>
                  <div
                    title="Reserva em andamento"
                    className={styles['active-reservation']}
                  ></div>
                </>
              )} */}
                </a>
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
