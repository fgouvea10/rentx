import { Avatar } from '~/components/shared/DataDisplay';
import { AppStoreButton } from './components/AppStoreButton';
import { PlayStoreButton } from './components/PlayStoreButton';

import styles from './Home.module.css';

export function Dashboard() {
  const isAppointmentActive = true;

  const user = JSON.parse(localStorage.getItem('@rentx:user-1.0.0')!);

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles['greetings-content']}>
            <div className={styles.card}>
              <div className={styles['profile-card']}>
                <Avatar size="xl" alt={user?.user?.name} />
                <div className={styles['profile-card-center']}>
                  <strong className={styles['user-name']}>
                    Olá, {user?.user?.name}
                  </strong>
                  <small className={styles['small-text']}>
                    {user?.user?.email}
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
            <a href="/" className={styles['section-link']}>
              Ver todas
            </a>
          </div>
          <div className={styles['grid-container']}>
            {[...Array(3)].map((_, index) => (
              <a
                key={index}
                href="/reservas/as86uja-gahb8s-asgbv7"
                className={`${styles.card} relative`}
              >
                <div className={styles['reservation-card-container']}>
                  <div className="flex flex-col gap-4 justify-between">
                    <div>
                      <small className={styles['info-car-text']}>Porsche</small>
                      <span className={styles['car-name']}>Random porsche</span>
                    </div>
                    <div>
                      <small className={styles['info-car-text']}>Ao dia</small>
                      <span className={styles['car-daily-price']}>R$ 340</span>
                    </div>
                  </div>
                  <img
                    src="https://www.picng.com/upload/porsche/png_porsche_22652.png"
                    alt=""
                  />
                </div>
                {isAppointmentActive && (
                  <>
                    <div
                      className={styles['active-reservation-animated']}
                    ></div>
                    <div
                      title="Reserva em andamento"
                      className={styles['active-reservation']}
                    ></div>
                  </>
                )}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} mt-24`}>
        <div className={styles.container}>
          <div className={styles['app-content']}>
            <img src="https://www.localiza.com/assets/images/footer/img-aplicativoPT.png" />
            <div className={styles['app-info']}>
              <h3>Utilize o aplicativo da RentX e ganhe pontos exclusivos</h3>
              <p>
                Você pode chegar em uma agência RentX e fazer check-in, além de
                ganhar pontos por check-in, você também concorre a prêmios todo
                mês. Comece agora mesmo!
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
  );
}
