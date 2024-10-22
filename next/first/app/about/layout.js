
import Header from '@/components/Header';
import React from 'react';

export const metadata = {
    title: "About",
    description: "next app testing with",
};

const Layout = ({ children }) => {
    return (
        <div>
            <header>
                
            </header>
            <main>{children}</main>
            <footer>
                {/* Footer content goes here */}
            </footer>
        </div>
    );
};

export default Layout;