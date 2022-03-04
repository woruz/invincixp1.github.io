import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import { Cards } from './components/cards/Cards';
import Cards1 from './components/cards/Cards1';
import MiddleSection from './components/middleSection/MiddleSection';
import ListSection from './components/listSection/ListSection';


function App() {
  return (
    <div className="App">
      <Header />
      {/*<Cards />*/}
      <Cards1 />
      <MiddleSection />
      <ListSection />
    </div>
  );
}

export default App;
