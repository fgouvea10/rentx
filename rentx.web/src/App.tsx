import { Routes } from './routes';

import { AuthProvider } from './contexts/AuthContext';

import '~/styles/global.css';

export function App() {
  return (
    <AuthProvider>
        <Routes />
    </AuthProvider>
  );
}
