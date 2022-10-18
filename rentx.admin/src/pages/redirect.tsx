import jwt_decode from "jwt-decode";
import { useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

interface RedirectProps {
  email: string;
}

export function Redirect() {
  const location = useLocation();
  const navigate = useNavigate();

  const [, token] = location.search.split("=");

  const decoded = jwt_decode(token) as RedirectProps;
  // console.log(decoded);

  useEffect(() => {
    if (decoded.email === "felipe.gouvea@rentx.com") {
      // TODO: save token in storage
      navigate("/");
    }
  }, [decoded]);

  return (
    <main className="w-full min-h-screen overflow-hidden flex items-center justify-center">
      <h1>Carregando informações da sua sessão...</h1>
    </main>
  );
}
