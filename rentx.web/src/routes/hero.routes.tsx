import { Route, Routes } from 'react-router-dom';

import { Home } from '~/pages/home/hero';

export function HeroRoutes() {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
}
