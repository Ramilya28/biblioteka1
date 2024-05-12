App.tsx

import React from 'react';
import './App.css';
import HeaderFooter from './components/index'; // Путь указывает на index.tsx
import AuthForm from './components/AuthForms';

function App() {
  return (
    <div className="App">
      <HeaderFooter />
      <AuthForm />
    </div>
  );
}

export default App; 