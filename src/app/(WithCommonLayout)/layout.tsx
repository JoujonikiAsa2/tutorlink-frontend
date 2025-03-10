import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import React from 'react';

const CommonLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="flex flex-col">
            <Navbar />
            <main className="flex-1 min-h-screen">{children}</main>
            <Footer/>
          </div>
    );
};

export default CommonLayout;