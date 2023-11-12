import React from 'react';

const CustomInput = ({ value, onChange, currencyType }) => {
    return (
        <input 
            type="number" 
            value={value} 
            onChange={(e) => onChange(e.target.value, currencyType === 'euros')} 
            placeholder={`Introduce ${currencyType}`}
            style={{
                borderBottom: '2px solid #333', // Borde inferior
                borderTop: 'none',
                borderLeft: 'none',
                borderRight: 'none',
                outline: 'none',
                padding: '5px',
                marginRight: '10px',
                fontSize: '1rem',
                
            }}
        />
    );
};


export default CustomInput;
