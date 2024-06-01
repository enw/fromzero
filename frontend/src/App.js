import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'; // Import useEffect hook

function App() {
  const [responseText, setResponseText] = useState('');

  const fetchResponse = async () => {
    try {
      const response = await fetch('http://localhost:8000/');
      const data = await response.json();
      setResponseText(data.message);
    } catch (error) {
      console.error("Error fetching data:", error);
      setResponseText('Failed to load');
    }
  };

  useEffect(() => {
    fetchResponse();
  }, []); // Empty dependency array means this effect runs once after initial render

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div id="response">{responseText}</div> {/* Display the response text */}
        <button onClick={fetchResponse}>Fetch Response</button> {/* Button to trigger the fetch */}
      </header>
    </div>
  );
}

export default App;