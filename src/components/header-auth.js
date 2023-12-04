import React from 'react';
import { Link } from 'react-router-dom';
import { UsedCompanies } from './header-used-companies';

const HeaderAuth = ({ auth }) => {
    if (auth) {
        return (
            <div className="header-autorization-true">
                <UsedCompanies />
                <div className="header-user">
                    <div className="header-user-container">
                        <div className='header-user-name'>Алексей А.</div>
                        <button className='header-user-button'>Выйти</button>
                    </div>
                    <div className='header-user-icon'></div>
                </div>
            </div>
        )    
    }
    else {
        return (
            <div className="header-autorization-false">
                <Link to="#" className={"header-auth-link"}>Зарегистрироваться</Link>
                <div className="header-auth-divider"></div>
                <button className="header-button">Войти</button>
            </div>
        )
    }
    
}
export { HeaderAuth }