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
  isUserSignedIn: boolean;
  signIn: (data: SignInUserRequest) => Promise<void>;
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

  const isUserSignedIn = !!user;

  async function signIn(data: SignInUserRequest) {
    try {
      const { data: loginResponse } = await authenticateUser(data);

      const storagePayload = {
        token: loginResponse.token,
        refreshToken: loginResponse.refreshToken,
        name: loginResponse.user.name,
        username: loginResponse.user.name,
        email: loginResponse.user.email,
        id: loginResponse.user.id,
      };

      localStorage.setItem(keys.userKey, JSON.stringify(storagePayload));
      setUser(storagePayload);
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

  const signOut = useCallback(async (callback?: VoidFunction) => {
    setUser(null);
    localStorage.clear();
    if (callback) callback();
  }, []);

  const authValues: AuthContextData = useMemo(
    () => ({
      signIn,
      signOut,
      user,
      isUserSignedIn,
      error,
    }),
    [signIn, signOut, user, isUserSignedIn],
  );

  return (
    <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
  );
}
