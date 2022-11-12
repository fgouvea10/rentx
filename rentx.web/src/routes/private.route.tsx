import { ReactElement, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { AuthContext } from '~/contexts/AuthContext';

interface PrivateRouteProps {
  element: ReactElement;
}

export function PrivateRoute({ element }: PrivateRouteProps): JSX.Element {
  const location = useLocation();

  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  return element;
}
