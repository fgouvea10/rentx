import { ReactElement } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface PrivateRouteProps {
  element: ReactElement;
}

export function PrivateRoute({ element }: PrivateRouteProps): JSX.Element {
  const location = useLocation();

  const isUserSignedIn = false;

  if (!isUserSignedIn) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  return element;
}
