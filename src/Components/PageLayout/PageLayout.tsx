import React, { ReactNode } from 'react';
import Appbar from '../AppBar/AppBar';
import Footer from '../Footer/Footer';
import './PageLayout.styles.css';

interface PageLayoutProps {
    children: ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
    return (
        <main className="page-container">
            <Appbar />
            <div className="content-container">
                {children}
            </div>
            <Footer />
        </main>
    );
}

export default PageLayout;