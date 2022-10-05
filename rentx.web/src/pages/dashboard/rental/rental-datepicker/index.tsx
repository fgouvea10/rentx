import { Button } from '~/components/shared/Form';

import styles from './RentalDatePicker.module.css';

export function RentalDatePicker() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.container}>
          <img
            src="https://www.pngmart.com/files/22/Audi-Q8-Download-PNG-Image.png"
            alt=""
            className={styles['car-img']}
          />
          <div className={styles['car-details']}>
            <div className={styles['car-col']}>
              <small className={styles['car-brand']}>Audi</small>
              <h1 className={styles['car-name']}>Q8 maneirao</h1>
              <p>
                nulla quas laborum libero molestias quod minus placeat tempora,
                magnam blanditiis necessitatibus itaque et! Voluptatum, porro
                voluptatem. Quibusdam dolores cum architecto!
              </p>
              <div className={styles['car-specifications']}>
                <p>calendar</p>
                <div>
                  <div>05/10/2022</div>
                  {'->'}
                  <div>12/10/2022</div>
                </div>
              </div>
            </div>
            {/* divider */}
            <div className={styles['price-container']}>
              <div>
                <span className={styles['daily-price']}>R$ 58/dia</span>
                <span className={styles['total-price']}>R$ 584,00 total</span>
              </div>
              <Button type="button">Alugar agora</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
