import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { getUser } from "../services/useCases/getUser";

export function Redirect() {
  const location = useLocation();
  const navigate = useNavigate();

  const [, token] = location.search.split("=");

  async function verifyUser() {
    try {
      const response = await getUser({ token });
      if (!response.isAdmin)
        return (window.location.href = `${
          import.meta.env.VITE_RENTX_WEB_URL
        }/auth`);

      navigate("/");
    } catch (err) {
      console.log("failed err", err);
      window.location.href = `${import.meta.env.VITE_RENTX_WEB_URL}/auth`;
    }
  }

  useEffect(() => {
    verifyUser();
  }, []);

  return (
    <main className="w-full min-h-screen overflow-hidden flex items-center justify-center">
      <h1>Carregando informações da sua sessão...</h1>
    </main>
  );
}
