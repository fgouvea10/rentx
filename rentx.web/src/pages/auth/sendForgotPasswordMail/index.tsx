import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

import { AuthContext } from '~/contexts/AuthContext';

import { Button, Input } from '~/components/shared/Form';

import styles from './PasswordMail.module.css';

const signInUserValidationSchema = zod.object({
  email: zod.string().email('Preencha um e-mail válido'),
});

type ForgotPassordMailFormData = zod.infer<typeof signInUserValidationSchema>;

export function SendForgotPasswordMail() {
  const [isSendingEmail, setIsSendingEmail] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ForgotPassordMailFormData>({
    resolver: zodResolver(signInUserValidationSchema),
    defaultValues: {
      email: '',
    },
  });
  const navigate = useNavigate();

  const { sendForgotPasswordEmail, error } = useContext(AuthContext);

  async function handleSendPasswordMail(data: ForgotPassordMailFormData) {
    setIsSendingEmail(true);

    try {
      const { email } = data;
      await sendForgotPasswordEmail(email);
      // navigate('/dashboard');
    } catch (err) {
      // console.log('err', err);
    } finally {
      setIsSendingEmail(false);
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

        <form className={styles.form} onSubmit={handleSubmit(handleSendPasswordMail)}>
          <h1>Esqueci minha senha</h1>
          <p>
            Informe o seu e-mail de cadastro para enviar uma solicitação de reset de senha{' '}
          </p>
          <div className={styles['form-container']}>
            <div>
              <Input
                label="E-mail *"
                id="email"
                error={(errors.email && errors.email.message) || error?.message}
                {...register('email')}
              />
            </div>

            <div className={styles['button-container']}>
              <Button
                type="submit"
                loading={isSendingEmail}
                loadingMessage="Enviando..."
              >
                Enviar solicitação
              </Button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
