import React from 'react';

const CustomInput = ({ value, onChange, currencyType }) => {
    return (
        <input 
            type="number" 
            value={value} 
            onChange={(e) => onChange(e.target.value, currencyType === 'euros')} 
            placeholder={`Introduce ${currencyType}`}
        />
    );
};

export default CustomInput;
