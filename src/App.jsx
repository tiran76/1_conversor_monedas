// App.js
import React from 'react';
import CurrencyChanger from './CurrencyChanger';

const App = () => (
  <div>
      <CurrencyChanger currencySymbol="$" initialValue={10} exchangeRate={1.055925} />
      <CurrencyChanger currencySymbol="£" initialValue={15} exchangeRate={0.878144} />
      <CurrencyChanger currencySymbol="¥" initialValue={20} exchangeRate={0.8665750} />
  </div>
);


export default App;
