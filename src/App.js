import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './sass/App.scss';
import Home from './components/Home';
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// function App() {
//   return (
//     <div className="App">
//     <Navbar/>
//     <div className='stars'></div>

//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         <TyperText
//       heading={'I love'}
//       dataText={[
//         'design.', 'coding.'
//         ]}
//        />
//      <img src={astronaut} className="coding-astronaut" alt="coding astronaut" />

//       </header>

//        <Footer/>


//     </div>
//   );
// }

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Footer />
    </div>
  </Router>
);

export default App;
