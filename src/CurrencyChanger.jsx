import React from 'react';
import useCurrencyConverter from './useCurrencyConverter';

const CurrencyChanger = ({ currencySymbol, initialValue, exchangeRate }) => {
    const {
        localCurrency, 
        setLocalCurrency, 
        euros, 
        setEuros
    } = useCurrencyConverter(initialValue, exchangeRate);

    return (
        <div>
            
            <label>
                {currencySymbol}:
                <input 
                    type="number" 
                    value={localCurrency}
                    onChange={(e) => setLocalCurrency(e.target.value)}
                />
            </label>
            <label>
                €:
                <input 
                    type="number" 
                    value={euros}
                    onChange={(e) => setEuros(e.target.value)}
                />
            </label>
        </div>
    );
};

export default CurrencyChanger