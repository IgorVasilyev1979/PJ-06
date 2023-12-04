import React from 'react';

const SearchButton = ({ active }) => {
    if (active) {
        return (
            <>
                <input className="search-button-active" type="submit" value="Поиск" />
            </>
        )    
    }
    else {
        return (
            <>
                <input disabled className="search-button-inactive" type="submit" value="Поиск" />
            </>
        )    
    }
    
}
export { SearchButton }