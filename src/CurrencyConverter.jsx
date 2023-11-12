import React from 'react';
import useCurrencyConverter from './useCurrencyConverter';
import CustomInput from './CustomInput';

const CurrencyConverter = () => {
    const { euros, dollars, convertCurrency } = useCurrencyConverter();

    return (
        <>
        <div>euros</div>
            <CustomInput 
                value={euros} 
                onChange={convertCurrency} 
                currencyType="euros"
            />
            <div>doalres</div>
            <CustomInput 
                value={dollars} 
                onChange={convertCurrency} 
                currencyType="dólares"
            />
        </>
    );
};

export default CurrencyConverter;
