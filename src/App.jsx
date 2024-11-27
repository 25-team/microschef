import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import RecipePage from './components/RecipePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/recipes" element={<RecipePage />} />
      </Routes>
    </Router>
  );
};

export default App;
