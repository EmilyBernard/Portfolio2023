import React from 'react';


const styles = {
	navbar: 'container min-w-full flex justify-between box-border items-center gap-8 h-16 px-4 bg-zinc-700 text-white text-lg',
	title: 'text-base sm:text-2xl justify-start'
};

function Navbar({ currentPage, handlePageChange }) {
  return (
    <nav style={styles.navbar} className="navbar">
      <h1 style={styles.title}>Menu</h1>
      <ul>
        <li className="nav-item">
            <a
              href="#about-me"
              onClick={() => handlePageChange("AboutMe")}
              className={currentPage === "About Me" ? "nav-link active" : "nav-link"}
            >
              About Me 
            </a>
          </li>
          <li className="nav-item">
        
        <a
          href="#portfolio"
          onClick={() => handlePageChange("Portfolio")}
          className={
            currentPage === "Portfolio" ? "nav-link active" : "nav-link"
          }
        >
          Portfolio  
        </a>
      </li>
      <li className="nav-item">
          <a
            href="#contact-me"
            onClick={() => handlePageChange("ContactMe")}
            className={
              currentPage === "ContactMe" ? "nav-link active" : "nav-link"
            }
          >
            Contact Me 
          </a>
        </li>


      </ul>
    </nav>
  );
}
export default Navbar;
