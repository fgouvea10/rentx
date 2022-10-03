import styles from './ReservationsList.module.css';

export function ReservationsList() {
  const isAppointmentActive = false;

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
            {[...Array(12)].map((_, index) => (
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
    </main>
  );
}
