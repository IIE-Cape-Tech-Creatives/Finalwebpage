import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Optional: for global styles
import App from './App'; // Import the App component

// Render the App component inside the 'root' div in your index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // This corresponds to the div in index.html
);
