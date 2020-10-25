import React from "react";
import HeadNav from './components/HeadNav';
import MainContent from './components/MainContent';
import FootNav from './components/FootNav';
import "./App.css";

function App() {
  return (
    <div className="App">
      <HeadNav />
      <MainContent />
      <FootNav />
    </div>
  );
}

export default App;
