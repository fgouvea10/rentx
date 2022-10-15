import { FormEvent, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeSlash } from 'phosphor-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

import { AuthContext } from '~/contexts/AuthContext';

import { Button, Input } from '~/components/shared/Form';

import styles from './ResetPassword.module.css';

const signInUserValidationSchema = zod.object({
  email: zod.string().email('Preencha um e-mail válido'),
  password: zod
    .string()
    .min(6, 'A senha não corresponde ao padrão de 6 dígitos'),
});

type SignInUserFormData = zod.infer<typeof signInUserValidationSchema>;

export function ResetPassword() {
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // let time = 45;

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignInUserFormData>({
    resolver: zodResolver(signInUserValidationSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const navigate = useNavigate();

  const { signIn, error } = useContext(AuthContext);

  console.log(error);

  async function handleSignInUser(data: SignInUserFormData) {
    setIsSigningIn(true);

    try {
      await signIn(data);
      navigate('/dashboard');
    } catch (err) {
      console.log('err', err);
    } finally {
      setIsSigningIn(false);
    }
  }

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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.8443 9.40395L0.493828 0.86525L0 0.625061V6.82793L11.543 12.5084L17.8443 9.40395ZM46.9999 29.9583V23.7554L35.4981 18.099L29.202 21.2034L46.9999 29.9583ZM46.5114 0.865125L47.0001 0.630942V6.83381L29.8194 15.3005L23.5232 18.4049L0 30V23.7911L17.2219 15.3065L23.518 12.196H23.5232L46.5114 0.865125Z"
              fill="#DC1637"
            />
          </svg>
        </a>

        <form className={styles.form} onSubmit={handleSubmit(handleSignInUser)}>
          <h1>Nova senha</h1>
          {/* <p>
            Não recebeu seu e-mail?{' '}
            <a href="/auth/register" className={styles['info-link']}>
              Reenviar (time)s
            </a>
          </p> */}
          <div className={styles['form-container']}>
            <div>
            <Input
                label="Nova senha *"
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
                error={errors.password && errors.password.message}
                {...register('password')}
              />
            </div>

            <div className="mt-6">
              <Input
                label="Confirme a nova senha *"
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
                error={errors.password && errors.password.message}
                {...register('password')}
              />
            </div>
            <div className={styles['button-container']}>
              <Button
                type="submit"
                loading={isSigningIn}
                loadingMessage="Resetando..."
              >
                Resetar senha
              </Button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
