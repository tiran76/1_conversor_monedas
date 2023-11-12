import React from 'react';
import useCurrencyConverter from './useCurrencyConverter'; // Asegúrate de importar correctamente el hook

const CurrencyConverter = () => {
    const { euros, dollars, convert } = useCurrencyConverter();

    const handleInputChange = (event) => {
        convert(event.target.value);
    };

    return (
        <div>
            <input 
                type="number" 
                value={euros} 
                onChange={handleInputChange} 
                placeholder="Introduce euros"
            />
            <p>{dollars} dólares</p>
        </div>
    );
};

export default CurrencyConverter;

