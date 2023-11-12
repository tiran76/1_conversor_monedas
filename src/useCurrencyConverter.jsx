import { useState } from 'react';

const useCurrencyConverter = () => {
    const [euros, setEuros] = useState(0);
    const [dollars, setDollars] = useState(0);

    const convert = (euroValue) => {
        setEuros(euroValue);
        const conversionRate = 1.1; // Supongamos que 1 euro = 1.1 dólares, esto debería ser dinámico en una aplicación real
        setDollars(euroValue * conversionRate);
    };

    return { euros, dollars, convert };
};
