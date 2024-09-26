import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout } from './Layout/Layout';

const CalendarPage = lazy(() => import('../pages/Calendar/Calendar'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<CalendarPage />} />
      </Route>
    </Routes>
  );
};
