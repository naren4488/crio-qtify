import React from 'react'
import './App.css';
import Navbar from './componenets/Navbar/Navbar';
import HeroSection from './componenets/HeroSection/HeroSection';
import Card from './componenets/Card/Card';
import Section from './componenets/Section/Section';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <Section/>
      {/* <Card/> */}
    </div>
  );
}

export default App;
