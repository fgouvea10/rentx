import { useState } from 'react';
import { ArrowLeft, Eye, EyeSlash } from 'phosphor-react';

import { Button, Input } from '~/components/shared/Form';

import styles from './SignUp.module.css';

export function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

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

        <form className={styles.form}>
          <h1>Crie sua conta</h1>
          <p>
            Já possui uma conta no site?{' '}
            <a href="/auth" className={styles['info-link']}>
              Faça login
            </a>
          </p>
          <div className={styles['form-container']}>
            <div>
              <Input label="Nome *" id="name" />
            </div>

            <div className="mt-6">
              <Input label="Nome de usuário *" id="userName" />
            </div>

            <div className="mt-6">
              <Input label="E-mail *" id="email" />
            </div>

            <div className="mt-6">
              <Input label="Carteira de motorista *" id="driversLicense" />
            </div>

            <div className="mt-6">
              <Input
                label="Senha *"
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
            <div className="mt-6">
              <Input
                label="Confirme sua senha *"
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
            <div className={styles['button-container']}>
              <Button
                type="submit"
                loading={true}
                loadingMessage="Criando sua conta..."
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
