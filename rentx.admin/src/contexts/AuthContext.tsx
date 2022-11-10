import {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";

import { destroyStorage, getStorage, setStorage } from "../services/storage";
import { getUser } from "../services/useCases/getUser";

type User = {
  email: string;
  id: string;
  isAdmin: boolean;
  name: string;
  username: string;
};

type VerifyUserType = {
  token: string;
};

type AuthContextData = {
  user: User | null;
  isAuthenticated: boolean;
  verifyIfUserIsAdmin: ({
    token,
  }: VerifyUserType) => Promise<string | undefined>;
  signOut: (callback?: VoidFunction) => Promise<void>;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(() => {
    const userInStorage = getStorage("user");

    if (userInStorage) return userInStorage;

    return null;
  });

  const isAuthenticated = !!user;

  async function verifyIfUserIsAdmin({
    token,
  }: VerifyUserType): Promise<string | undefined> {
    try {
      const response = await getUser({ token });
      console.log("response", response);
      if (!response.isAdmin)
        return (window.location.href = `${
          import.meta.env.VITE_RENTX_WEB_URL
        }/auth`);

      setStorage("token", token);
      setStorage("user", JSON.stringify(response));
      setUser(response);

      window.location.href = `${import.meta.env.VITE_RENTX_ADMIN_URL}`;
    } catch (err) {
      setUser(null);
      window.location.href = `${import.meta.env.VITE_RENTX_WEB_URL}/auth`;
    }
  }

  const signOut = useCallback(async (callback?: VoidFunction) => {
    setUser(null);
    destroyStorage();
    if (callback) callback();
  }, []);

  const authContextValues = useMemo(
    () => ({
      user,
      isAuthenticated,
      verifyIfUserIsAdmin,
      signOut,
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContextValues}>
      {children}
    </AuthContext.Provider>
  );
}
