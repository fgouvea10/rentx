import { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Avatar } from '~/components/shared/DataDisplay';
import { AuthContext } from '~/contexts/AuthContext';
import { getRentalsByUser } from '~/services/useCases/rentals/list-by-user';
import { CarCard } from '../components/CarCard';
import { AppStoreButton } from './components/AppStoreButton';
import { PlayStoreButton } from './components/PlayStoreButton';

import styles from './Home.module.css';

type Rental = {
  name: string;
  brand: string;
  price: string;
  id: string;
  expectedReturnDate?: string;
};

export function Dashboard() {
  const [rentals, setRentals] = useState<Rental[]>([]);
  const [isFetchingRentals, setIsFetchingRentals] = useState(true);

  const { user } = useContext(AuthContext);

  const getRentals = async () => {
    try {
      const response = await getRentalsByUser();
      const slicedArray = response.slice(0, 3); // get the latest 3 rentals of user
      setRentals(slicedArray);
    } catch (err) {
      // console.log('err', err);
    } finally {
      // setIsFetchingRentals(false);
    }
  };

  useEffect(() => {
    getRentals();
  }, []);

  return (
    <>
      <Helmet>
        <title>Dashboard - RentX</title>
      </Helmet>

      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles['greetings-content']}>
              <div className={styles.card}>
                <div className={styles['profile-card']}>
                  <Avatar size="xl" alt={user?.name as string} />
                  <div className={styles['profile-card-center']}>
                    <strong className={styles['user-name']}>
                      Olá, {user?.name}
                    </strong>
                    <small className={styles['small-text']}>
                      {user?.email}
                    </small>
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles['points-card']}>
                  <small className={styles['small-text']}>
                    Pontos acumulados
                  </small>
                  <span className={styles['points-text']}>0.00</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} mt-16`}>
          <div className={styles.container}>
            <div className={styles['flex-between']}>
              <h2 className={styles['section-title']}>Últimas reservas</h2>
              {rentals && rentals.length > 0 && (
                <Link to="reservas" className={styles['section-link']}>
                  Ver todas
                </Link>
              )}
            </div>
            <div className={styles['grid-container']}>
              {rentals && rentals.length > 0 ? (
                rentals.map((rental) => {
                  // const isRentalInProgress =
                  //   rental?.expectedReturnDate &&
                  //   Number(rental.expectedReturnDate) >= Date.now();
                  return (
                    <CarCard
                      car={rental}
                      isRentalInProgress={false}
                      loading={isFetchingRentals}
                      type="rented"
                    />
                  );
                })
              ) : (
                <>
                  <p className="text-stone-600">
                    Você ainda não possui nenhuma alocação :(
                    <br />
                    <Link to="carros" className="underline text-primary500">
                      Clique aqui
                    </Link>{' '}
                    para alugar um agora. É simples e rápido!
                  </p>
                </>
              )}
            </div>
          </div>
        </section>

        <section className={`${styles.section} mt-28`}>
          <div className={styles.container}>
            <div className={styles['app-content']}>
              <img src="https://www.localiza.com/assets/images/footer/img-aplicativoPT.png" />
              <div className={styles['app-info']}>
                <h3>Utilize o aplicativo da RentX e ganhe pontos exclusivos</h3>
                <p>
                  Você pode chegar em uma agência RentX e fazer check-in, além
                  de ganhar pontos por check-in, você também concorre a prêmios
                  todo mês. Comece agora mesmo!
                </p>
                <div className="flex items-center gap-6">
                  <AppStoreButton />
                  <PlayStoreButton />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
