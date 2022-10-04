import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeSlash } from 'phosphor-react';

import { authenticateUser } from '~/services/useCases/auth';

import { Button, Input } from '~/components/shared/Form';

import styles from './SignIn.module.css';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    setLoading(true);

    try {
      const response = await authenticateUser(email, password);
      const userResponse = {
        refreshToken: response?.data.refreshToken,
        token: response?.data.token,
        user: response?.data.user,
      };

      localStorage.setItem('@rentx:user-1.0.0', JSON.stringify(userResponse));
      navigate('/dashboard');
    } catch (err) {
      console.log('err', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={styles['sign-in-container']}>
      <div className={styles['box-container']}>
        <a href="/">
          <svg
            width="47"
            height="30"
            viewBox="0 0 47 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.8443 9.40395L0.493828 0.86525L0 0.625061V6.82793L11.543 12.5084L17.8443 9.40395ZM46.9999 29.9583V23.7554L35.4981 18.099L29.202 21.2034L46.9999 29.9583ZM46.5114 0.865125L47.0001 0.630942V6.83381L29.8194 15.3005L23.5232 18.4049L0 30V23.7911L17.2219 15.3065L23.518 12.196H23.5232L46.5114 0.865125Z"
              fill="#DC1637"
            />
          </svg>
        </a>

        <form className={styles.form} onSubmit={handleSubmit}>
          <h1>Entre em sua conta</h1>
          <p>
            É a sua primeira vez no site?{' '}
            <a href="/register" className={styles['info-link']}>
              Crie sua conta
            </a>
          </p>
          <div className={styles['form-container']}>
            <div>
              <Input
                label="E-mail *"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className="mt-6">
              <Input
                label="Senha *"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                id="password"
                type={showPassword ? 'text' : 'password'}
                icon={
                  showPassword ? (
                    <Eye size={24} color="#B1B1B1" />
                  ) : (
                    <EyeSlash size={24} color="#B1B1B1" />
                  )
                }
                onIconClick={() => setShowPassword(!showPassword)}
              />
            </div>

            <div className={styles['keep-connected-container']}>
              <p>Mantenha-me conectado</p>
              <a href="/forgot-password" className={styles['info-link']}>
                Esqueci minha senha
              </a>
            </div>
            <div className={styles['button-container']}>
              <Button
                type="submit"
                loading={loading}
                loadingMessage="Entrando..."
              >
                Entrar
              </Button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
