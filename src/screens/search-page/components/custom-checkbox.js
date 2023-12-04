import React, { useState } from 'react';

const CustomCheckbox = ({ name, checkLabel }) => {

    const [checked, changeChecked] = useState(false);

    let ssci = 'search-section1-checkbox-input'
    let sscl = 'search-section1-checkbox-label'

    if (checked) {
        ssci += '-selected'
        sscl += '-selected'
    }
    
    return (
        <>
            <div className='search-section1-form-column2-checkbox'>
                <input className={ssci} type="checkbox" name={name} onClick={(e) => {e.preventDefault(); changeChecked(!checked);}} />
                <label className={sscl} htmlFor={name} onClick={(e) => {e.preventDefault(); changeChecked(!checked);}} >
                    {checkLabel}
                </label>    
            </div>
        </>
    )
}
export { CustomCheckbox }