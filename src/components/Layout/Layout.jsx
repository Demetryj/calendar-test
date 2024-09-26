import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../Header/Header';
import { NavBar } from '../NavBar/NavBar';

import './Layout.scss';

export const Layout = () => {
  return (
    <>
      <Header />

      <div className="layout-wrapper">
        <NavBar />

        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </>
  );
};
