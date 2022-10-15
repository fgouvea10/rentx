import { AppWindow } from 'phosphor-react';

import styles from './Hero.module.css';

import heroImg from '~/assets/hero-car.png';

export function Home() {
  return (
    <>
      <section className={styles.hero} id="home">
        <div className="row-container">
          <div className={styles.texts}>
            <h1>Alugue carros de luxo com o menor preço do mercado</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
              ullam tempore eveniet. Inventore perferendis accusantium excepturi
              tempore architecto quasi! Sequi ut expedita
            </p>
            <div className={styles['app-stores']}>
              <button>app</button>
              <button>play</button>
            </div>
          </div>
          <img src={heroImg} alt="" />
        </div>
      </section>

      <section className={styles.features}>
        <div className="row-container">
          <div className={styles['centered-content']}>
            <div className={styles['section-presentation-texts']}>
              <span>O que fazemos</span>
              <h2>Aproveite o melhor da nossa experiência</h2>
            </div>
            {[...Array(4)].map((_, index) => (
              <div key={index} className={styles['features-card']}>
                <div className={styles['feature-card']}>
                  <div className={styles.icon}>
                    <AppWindow size={24} />
                  </div>
                  <strong>A random feature here</strong>
                  <p>
                    a random description for the feature and bla bla bla bla
                    sauhsuy a bokasha uaysg hjabsyuabvs açs
                  </p>
                </div>
              </div>
            ))}

            <div className={styles['company-presentation']}>
              <img
                src="https://img.freepik.com/fotos-premium/duas-pessoas-estao-sentadas-juntas-no-carro-e-olhando-no-tablet-que-a-garota-esta-segurando-eles-estao-olhando-para-a-tela-com-interesse-e-emocao_152404-9518.jpg"
                alt=""
              />
              <div className={styles['company-presentation-texts']}>
                <h3>Por que escolher a RentX?</h3>
                <p>
                  A única empresa que fornece serviços de aluguel de carros de
                  luxo rápido e fácil.
                </p>
                <ul>
                  {[...Array(4)].map((_, index) => (
                    <li key={index}>
                      <strong>Some random feature here</strong>
                      <p>
                        another description here and you need to put strong with
                        underline and flex with texts and img tag
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles['featured-cars']}>
        <div className='row-container'>
          <div className={styles['featured-cars-container']}>
            {/* <Car /> */}
          </div>
          <div className={styles['view-more']}>
            <button type='button'>Ver todos os carros</button>
          </div>
        </div>
      </section>
    </>
  );
}
