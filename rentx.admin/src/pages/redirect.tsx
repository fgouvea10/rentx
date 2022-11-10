import { Spinner } from "phosphor-react";
import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";

export function Redirect() {
  const location = useLocation();
  const { verifyIfUserIsAdmin } = useContext(AuthContext);

  const [, token] = location.search.split("=");

  useEffect(() => {
    verifyIfUserIsAdmin({ token });
  }, []);

  return (
    <main className="w-full min-h-screen overflow-hidden flex items-center justify-center">
      <Spinner size={128} color='#000' weight="bold" className="animate-spin" />
    </main>
  );
}
