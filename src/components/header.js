import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderAuth } from './header-auth';

const Header = () => {
    return (
        <div className='header-container'>
            <div className="header-logo"></div>
            <div className="header-links">
                <Link to="#" className={"header-main-links"}>Главная</Link>
                <Link to="#" className={"header-main-links"}>Тарифы</Link>
                <Link to="#" className={"header-main-links"}>FAQ</Link>
            </div>
            <HeaderAuth auth={false}/>
        </div>
    )
}
export { Header }