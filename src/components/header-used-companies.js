import React from 'react';

const UsedCompanies = () => {
    return (
        <div className="header-used-companies">
            <div className="header-used-companies-container-data-received">
                <div className="header-used-companies-container-column1">
                    <div>Использовано компаний</div>
                    <div>Лимит по компаниям</div>
                </div>
                <div className="header-used-companies-container-column2">
                    <div className="header-used-companies-container-column2-row1">34</div>
                    <div className="header-used-companies-container-column2-row2">100</div>
                </div>
            </div>
            {/* <div className='header-used-companies-container-data-loading'></div> */}
        </div>
    )
}
export { UsedCompanies }