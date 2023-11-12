import { useState } from 'react';

const useCurrencyConverter = () => {
    const [euros, setEuros] = useState(0);
    const [dollars, setDollars] = useState(0);
    const conversionRate = 1.1; // 1 euro = 1.1 dólares

    const convertCurrency = (amount, isEuroInput) => {
        if (isEuroInput) {
            setEuros(amount);
            setDollars(amount * conversionRate);
        } else {
            setDollars(amount);
            setEuros(amount / conversionRate);
        }
    };

    return { euros, dollars, convertCurrency };
};

export default useCurrencyConverter;