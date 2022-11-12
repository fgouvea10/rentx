import {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { AxiosError } from 'axios';

import keys from '~/constants/storageKeys';
import { authenticateUser } from '~/services/useCases/auth';
import { client } from '~/services/client';
import { sendForgotPasswordMail } from '~/services/useCases/password/sendForgotPasswordMail';

type SignInUserRequest = {
  email: string;
  password: string;
};

type User = {
  token: string;
  refreshToken: string;
  name: string;
  username: string;
  email: string;
  id: string;
};

type AuthContextData = {
  user: User | null;
  error: {
    code: number;
    message: string;
  };
  isAuthenticated: boolean;
  signIn: (data: SignInUserRequest) => Promise<void>;
  sendForgotPasswordEmail: (email: string) => Promise<void>;
  signOut(callback?: VoidFunction): Promise<void>;
};

enum Error {
  UNAUTHORIZED = 401,
  INTERNAL_SERVER_ERROR = 500,
}

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState(() => {
    const storagedUser = localStorage.getItem(keys.userKey);
    if (storagedUser) return JSON.parse(storagedUser);

    return null;
  });
  const [error, setError] = useState({
    code: 0,
    message: '',
  });

  async function signIn(data: SignInUserRequest) {
    try {
      const { data: response } = await authenticateUser(data);

      const storagePayload = {
        token: response.token,
        refreshToken: response.refreshToken,
        name: response.user.name,
        username: response.user.name,
        email: response.user.email,
        id: response.user.id,
      };

      localStorage.setItem(keys.userKey, JSON.stringify(storagePayload));
      setUser(storagePayload);
      client.defaults.headers.common['Authorization'] = response.refreshToken;
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.response?.status === Error.UNAUTHORIZED) {
          setError((prevState) => ({
            ...prevState,
            code: 401,
            message: 'E-mail ou senha incorretos',
          }));
          return;
        }

        if (err.response?.status === Error.INTERNAL_SERVER_ERROR) {
          setError((prevState) => ({
            ...prevState,
            code: 500,
            message: 'Erro interno do servidor',
          }));
          return;
        }
      }
    }
  }

  async function sendForgotPasswordEmail(email: string) {
    try {
      await sendForgotPasswordMail({email});
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.response?.status === Error.UNAUTHORIZED) {
          setError((prevState) => ({
            ...prevState,
            code: 404,
            message: 'E-mail não existe na base de dados',
          }));
          return;
        }
      }
    }
  }

  const signOut = useCallback(async (callback?: VoidFunction) => {
    setUser(null);
    localStorage.clear();
    if (callback) callback();
  }, []);

  const authValues: AuthContextData = useMemo(
    () => ({
      signIn,
      signOut,
      sendForgotPasswordEmail,
      user,
      isAuthenticated: !!user,
      error,
    }),
    [signIn, signOut, user],
  );

  return (
    <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
  );
}
