import { Button } from '~/components/shared/Form';
import { Lightning } from 'phosphor-react';
import styles from './CarDetails.module.css';

export function CarDetails() {
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
                {[...Array(6)].map((_, index) => (
                  <div key={index} className={styles['specification-card']}>
                    <Lightning />
                    <p>Gasolina</p>
                  </div>
                ))}
              </div>
            </div>
            {/* divider */}
            <div className={styles['price-container']}>
              <span className={styles['daily-price']}>R$ 58/dia</span>
              <Button type="button">Alugar</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
