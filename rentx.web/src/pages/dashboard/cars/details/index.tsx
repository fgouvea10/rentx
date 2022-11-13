import { Lightning } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Modal } from '~/components/shared/DataDisplay';
import { Button } from '~/components/shared/Form';
import { getCarById } from '~/services/useCases/cars/getById';

import styles from './CarDetails.module.css';
import { CreateRentalModal } from './CreateRentalModal';

type Car = {
  name: string;
  brand: string;
  categoryId: string;
  dailyRate: string;
  description: string;
  id: string;
};

export function CarDetails() {
  const [car, setCar] = useState<Car | null>(null);
  const [isFetchingCar, setIsFetchingCar] = useState(false);
  const [isCreateRentalModalOpen, setIsCreateRentalModalOpen] = useState(false);

  const { id: carId } = useParams<{ id: string }>();

  console.log(isFetchingCar);

  async function getCarDetails() {
    setIsFetchingCar(true);

    try {
      const response = await getCarById(carId as string);
      setCar(response);
    } catch (err) {
      // console.log('err', err);
    } finally {
      setIsFetchingCar(false);
    }
  }

  useEffect(() => {
    getCarDetails();
  }, []);

  if (isFetchingCar)
    return (
      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.container}>
            <div className="flex justify-center items-center w-[560px] h-80 animate-pulse bg-gray-300 rounded" />
            <div className={styles['car-details']}>
              <div className={styles['car-col']}>
                <small className={styles['car-brand']}>
                  <div className="flex justify-center items-center w-28 h-4 animate-pulse bg-gray-300 rounded" />
                </small>
                <h1 className={styles['car-name']}>
                  <div className="flex justify-center items-center w-full h-4 animate-pulse bg-gray-300 rounded mt-4" />
                </h1>
                <p>
                  <div className="flex justify-center items-center w-full h-4 animate-pulse bg-gray-300 rounded mt-2" />{' '}
                  <div className="flex justify-center items-center w-full h-4 animate-pulse bg-gray-300 rounded mt-2" />{' '}
                  <div className="flex justify-center items-center w-full h-4 animate-pulse bg-gray-300 rounded mt-2" />
                </p>
                <div className={styles['car-specifications']}>
                  {[...Array(6)].map((_, index) => (
                    <div className="flex justify-center items-center w-36 h-36 animate-pulse bg-gray-300 rounded mt-2" />
                  ))}
                </div>
              </div>
              {/* divider */}
              <div className={styles['price-container']}>
                <span className={styles['daily-price']}>
                  <div className="flex justify-center items-center w-28 h-4 animate-pulse bg-gray-300 rounded" />
                </span>
                <Button type="button" disabled>
                  Alugar
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    );

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
              <small className={styles['car-brand']}>{car?.brand}</small>
              <h1 className={styles['car-name']}>{car?.name}</h1>
              <p>{car?.description}</p>
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
              <span className={styles['daily-price']}>
                R$ {car?.dailyRate}/dia
              </span>
              <Button
                type="button"
                onClick={() => setIsCreateRentalModalOpen(true)}
              >
                Alugar
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Modal isOpen={isCreateRentalModalOpen}>
        <CreateRentalModal
          onClose={() => setIsCreateRentalModalOpen(false)}
          carId={carId as string}
        />
      </Modal>
    </main>
  );
}
