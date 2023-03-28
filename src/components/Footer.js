import React from 'react';


const styles = {
	footerStyle: 'flex items-center justify-center hover:bg-zinc-500 rounded-full w-10 h-10',
	titleStyle: 'flex justify-center items-center gap-8 px-6 h-14 fixed bottom-0 left-0 right-0 w-full bg-zinc-700 text-white',
};

function Footer() {
  return (
    <footer style={styles.footerStyle} className="footer">
      <h1 style={styles.titleStyle}>Contact Me</h1>
    </footer>
  );
}

export default Footer;
