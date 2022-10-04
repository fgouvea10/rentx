import { ReactElement, useContext, useState } from 'react';
import { Bell } from 'phosphor-react';

import logoImg from '~/assets/logo_text.svg';

import { AuthContext } from '~/contexts/AuthContext';

import { Avatar } from '~/components/shared/DataDisplay';

import styles from './AppHeader.module.css';
import { useNavigate } from 'react-router-dom';

export function AppHeader(): ReactElement {
  const [isProfileDropdownActive, setIsProfileDropdownActive] = useState(false);

  const { signOut } = useContext(AuthContext);
  const navigate = useNavigate();

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
          <button type="button" className={styles['notification-btn']}>
            <Bell size={24} />
          </button>
          <button
            type="button"
            className={styles['profile-btn']}
            onClick={() => setIsProfileDropdownActive(!isProfileDropdownActive)}
          >
            <Avatar alt="Felipe Gouvea" />
            {isProfileDropdownActive && (
              <div id="dropdownDivider" className={styles.dropdown}>
                <ul className={styles['dropdown-list']}>
                  <li>
                    <a href="#" className={styles['dropdown-item']}>
                      Meu perfil
                    </a>
                  </li>
                  <li>
                    <a href="#" className={styles['dropdown-item']}>
                      Meus dados
                    </a>
                  </li>
                </ul>
                <div className="py-1">
                  <button
                    type="button"
                    onClick={() => signOut(() => navigate('/auth'))}
                    className={styles['dropdown-item-separated']}
                  >
                    Sair da conta
                  </button>
                </div>
              </div>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
