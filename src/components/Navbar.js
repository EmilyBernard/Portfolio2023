import React from 'react';

const styles = {
	navbar: 'container min-w-full flex justify-between box-border items-center gap-8 h-16 px-4 bg-zinc-700 text-white text-lg',
	title: 'text-base sm:text-2xl justify-start'
};

function Navbar() {
  return (
    <nav style={styles.navbar} className="navbar">
      <h1 style={styles.title}>Menu</h1>
    </nav>
  );
}
export default Navbar;
