import React from 'react';
import { Outlet } from "react-router-dom"
import { Header } from './header';
import { Footer } from './footer';

const Layout = () => {
    return (
        <div className="layout">
            <header className="header">
                <div className="layout-container">
                    <Header />
                </div>    
            </header>
            <main className="main">
                <div className="layout-container">
                    <Outlet />
                </div> 
            </main>
            <footer className="footer">
                <div className="layout-container">
                    <Footer />
                </div> 
            </footer>    
        </div>
    )
}
export { Layout }