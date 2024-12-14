import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Title from "./pages/Title/Title";
import Form from "./pages/Form/Form";
import About from "./pages/About/About";
import RecipePage from "./pages/RecipePage/RecipePage";
import SplashScreen from "./components/SplashScreen/SplashScreen";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowSplash(false);
  //   }, 3000);

  //   return () => clearTimeout(timer);
  // }, []);

  // if (showSplash) {
  //   return <SplashScreen />;
  // }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Title />} />
        <Route path="/form" element={<Form />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipes" element={<RecipePage />} />
      </Routes>
    </Router>
  );
};

export default App;
