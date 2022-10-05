import { ReactElement, useContext, useState } from 'react';
import { Bell } from 'phosphor-react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

import logoImg from '~/assets/logo_text.svg';
import { AuthContext } from '~/contexts/AuthContext';
import { Avatar } from '~/components/shared/DataDisplay';

import styles from './AppHeader.module.css';

const HEADER_MOCK = [
  {
    label: 'Dashboard',
    value: 'dashboard',
    path: '/dashboard',
  },
  {
    label: 'Minhas reservas',
    value: 'reservations',
    path: '/dashboard/reservas',
  },
  {
    label: 'Alugar',
    value: 'availableCars',
    path: '/dashboard/carros',
  },
];

export function AppHeader(): ReactElement {
  const [isProfileDropdownActive, setIsProfileDropdownActive] = useState(false);

  const { signOut, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const isAdmin = true;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img src={logoImg} alt="" />
        <nav>
          <ul className={styles['flex-center']}>
            {HEADER_MOCK.map((item) => (
              <li key={item.value}>
                <NavLink
                  to={item.path}
                  className={
                    location.pathname === item.path
                      ? 'text-primary500 font-medium'
                      : ''
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles['flex-center']}>
          <div className={styles['notification-btn']}>
            <Bell size={24} />
          </div>
          <div
            className={styles['profile-btn']}
            onClick={() => setIsProfileDropdownActive(!isProfileDropdownActive)}
          >
            <Avatar alt={user?.name as string} />
            {isProfileDropdownActive && (
              <div id="dropdownDivider" className={styles.dropdown}>
                <ul className={styles['dropdown-list']}>
                  {isAdmin && (
                    <li>
                      <a href="#" className={styles['dropdown-item']}>
                        Portal do admin
                      </a>
                    </li>
                  )}
                  <li>
                    <Link to="perfil" className={styles['dropdown-item']}>
                      Meus dados
                    </Link>
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
          </div>
        </div>
      </div>
    </header>
  );
}
