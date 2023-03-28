import React from "react";
import Navbar from './components/Navbar';


const styles = {
	headerStyle: 'container min-w-full flex justify-between box-border items-center gap-8 h-16 px-4 bg-zinc-700 text-white text-lg',
	titleStyle: 'text-base sm:text-2xl justify-start'
};


function Header() {
  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.titleStyle}>Emily Bernard</h1>
      <ul>
        <Navbar>
          
        </Navbar>
      </ul>
    </header>
  );
}

export default Header;
