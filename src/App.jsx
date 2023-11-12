// App.js
import React from 'react';
import CurrencyChanger from './CurrencyChanger';
const App = () => (
  <div style={{
      backgroundColor: '#f5f5f5', // Color de fondo
      color: '#333', // Color de la fuente
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
  }}>
      <CurrencyChanger currencySymbol="$" initialValue={10} exchangeRate={1.055925} />
      <CurrencyChanger currencySymbol="£" initialValue={15} exchangeRate={0.878144} />
      <CurrencyChanger currencySymbol="¥" initialValue={20} exchangeRate={0.8665750} />
  </div>
);


export default App;
