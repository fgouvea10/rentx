import { ReactElement } from 'react';
import { Bell } from 'phosphor-react';

import logoImg from '~/assets/logo_text.svg';

import { Avatar } from '~/components/shared/DataDisplay';

import styles from './AppHeader.module.css';

export function AppHeader(): ReactElement {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img src={logoImg} alt="" />
        <nav>
          <ul className={styles['flex-center']}>
            <li className={styles.active}>
              <a href="/">Dashboard</a>
            </li>
            <li>
              <a href="/">Minhas reservas</a>
            </li>
          </ul>
        </nav>

        <div className={styles['flex-center']}>
          <button type="button">
            <Bell size={24} />
          </button>
          <button type="button">
            <Avatar alt="Felipe Gouvea" />
          </button>
        </div>
      </div>
    </header>
  );
}
