import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar'
import TyperText from './components/TyperText'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
    <Navbar/>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <TyperText
      heading={'I love'}
      dataText={[
        'design.', 'coding.'
        ]}
       />
       <Footer/>


    </div>
  );
}

export default App;
