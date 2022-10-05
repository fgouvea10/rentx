import { Avatar } from '~/components/shared/DataDisplay';
import { Button, Input } from '~/components/shared/Form';
import styles from './Profile.module.css';

export function Profile() {
  const hasProfilePic = true;

  return (
    <main className={styles.main}>
      <div className={styles['summary']}>
        <div className={styles.container}>
          <h1 className={styles['section-title']}>Meus dados</h1>
          {/* <p className={styles['small-text']}>
            Confira todos os carros disponíveis
          </p> */}
        </div>
      </div>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles['flex-container']}>
            <div className={styles['profile-pic']}>
              <Avatar size="xl" alt="Felipe Gouvea Alves" />
              <div className={styles['btn-container']}>
                <Button type="button">Alterar foto de perfil</Button>
                {hasProfilePic && (
                  <Button type="button" variant="secondary">
                    Remover foto
                  </Button>
                )}
              </div>
            </div>
            <div className={styles['profile-info']}>
              <div className={styles['divided-input']}>
                <div>
                  <Input id="name" label="Nome" />
                </div>
                <div>
                  <Input id="username" label="Nome de usuário" />
                </div>
              </div>
              <div className={styles['divided-input']}>
                <div>
                  <Input id="email" label="E-mail" />
                </div>
                <div>
                  <Input id="driversLicense" label="Carteira de motorista" />
                </div>
              </div>
              <div className={styles['section-divider']} />
              <div className={styles['password-info']}>
                <h2>Senha</h2>
                <div className={styles['password-input']}>
                  <div className={styles['divided-input']}>
                    <div>
                      <Input
                        type="password"
                        id="currentPassword"
                        label="Senha atual"
                      />
                    </div>
                    <div>
                      <Input
                        type="password"
                        id="newPassword"
                        label="Nova senha"
                      />
                    </div>
                  </div>
                  <div className={styles['save-password-btn']}>
                    <Button disabled type="button">
                      Salvar alterações
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
