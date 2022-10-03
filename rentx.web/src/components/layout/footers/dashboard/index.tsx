import { ReactElement } from 'react';

import logoImg from '~/assets/logo_text.svg';

import styles from './AppFooter.module.css';

export function AppFooter(): ReactElement {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles['flex-column']}>
        <img src={logoImg} alt="" />
        <div className={styles['links-container']}>
          <div>
            <strong>Links rápidos</strong>
            <ul>
              <li>Página principal</li>
              <li>Trabalhe conosco</li>
              <li>Aplicativo RentX</li>
            </ul>
          </div>
          <div>
            <strong>Redes sociais</strong>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Github</li>
            </ul>
          </div>
          <div>
            <strong>Legal</strong>
            <ul>
              <li>Política de Privacidade</li>
              <li>Termos de uso</li>
              <li>Cookies</li>
            </ul>
          </div>
        </div>
        </div>
        <div className={styles.copy}>
          <p>&copy; 2022 RentX - Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
