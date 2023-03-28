import React from 'react';


const styles = {
    card: '', 
    title: ''
}

function Project({ projects }) {
    return (
      <div style={styles.card} className="card">
        <h1 style={styles.title}>{projects.title}</h1>
      </div>
    );
  }

export default Project;

