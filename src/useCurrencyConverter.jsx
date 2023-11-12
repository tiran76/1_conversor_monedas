import { useState, useEffect } from 'react';

const useCurrencyConverter = (initialValue, exchangeRate) => {
  const [localCurrency, setLocalCurrency] = useState(initialValue);
  const [euros, setEuros] = useState(initialValue / exchangeRate);

  const toFixedNumber = (num, digits) => {
      return parseFloat(num.toFixed(digits));
  };

  useEffect(() => {
      setEuros(toFixedNumber(localCurrency / exchangeRate, 2));
  }, [localCurrency, exchangeRate]);

  useEffect(() => {
      setLocalCurrency(toFixedNumber(euros * exchangeRate, 2));
  }, [euros, exchangeRate]);

  return {
      localCurrency, 
      setLocalCurrency,
      euros,
      setEuros
  };
};



export default useCurrencyConverter;