// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './SignUp';
import LanguageSelection from './LanguageSelection';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/languages" element={<LanguageSelection />} />
      </Routes>
    </Router>
  );
}

export default App;
