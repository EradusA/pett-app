import React, { ReactNode } from 'react';
import Appbar from '../AppBar/AppBar';
import Footer from '../Footer/Footer';
import './PageLayout.styles.css';
import Categories from '../Categories/Categories';

interface PageLayoutProps {
    children: ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
    return (
        <main className="page-container">
            <Appbar />
            <div className="content-container">
                {children}
            <Footer />
            <Categories />
            </div>
        </main>
    );
}

export default PageLayout;