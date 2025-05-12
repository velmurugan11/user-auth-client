import React from 'react';
import { useNavigate } from 'react-router-dom';


const HomePage = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/'); // ✅ navigate to login or home
      };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to My App</h1>
      <p style={styles.text}>This is a simple home page built with React.</p>
      <button style={styles.button} onClick={() => alert('You clicked the button!')}>
        Click Me
      </button>
      <br/>
      <button style={styles.button} onClick={() => handleLogout()}>
        Log out
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
    backgroundColor: '#f0f0f0',
    height: '100vh'
  },
  heading: {
    fontSize: '36px',
    color: '#333'
  },
  text: {
    fontSize: '18px',
    color: '#666'
  },
  button: {
    padding: '10px 20px',
    marginTop: '20px',
    backgroundColor: '#333',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

export default HomePage;
