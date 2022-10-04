import { ReactElement } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface PrivateRouteProps {
  element: ReactElement;
}

export function PrivateRoute({ element }: PrivateRouteProps): JSX.Element {
  const location = useLocation();

  const user = JSON.parse(localStorage.getItem('@rentx:user-1.0.0')!);

  if (!user) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  return element;
}
