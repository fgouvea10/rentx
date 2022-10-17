import { ReactElement, useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface PrivateRouteProps {
  element: ReactElement;
}

export function PrivateRoute({ element }: PrivateRouteProps): JSX.Element {
  const location = useLocation();

  const isAuthenticated = true;

  if (!isAuthenticated) {
    return (
      <Navigate
        to={{ pathname: import.meta.env.RENTX_WEB_URL }}
        state={{ from: location }}
        replace
      />
    );
  }

  return element;
}
