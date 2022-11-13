import { Routes } from './routes';

import { AuthProvider } from './contexts/AuthContext';

import '~/styles/global.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

export function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}
