import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';
import Nav from './components/Nav';

// function App() {
//   return (
//     <div className="bucket-app">
//       <BucketList />
//     </div>
//   );
// }
const App = () => {
  return (
    <div className = "">
        <Header/>
          <Nav/>
          <Project/>
        <Footer/>
    </div>
    )
}

export default App;
