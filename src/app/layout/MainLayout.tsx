import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { memo } from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="bg-[#f9fafb]  dark:bg-[#0b0627] dark:text-white">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default memo(MainLayout);