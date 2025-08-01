import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const handleAuth = () => {
    setLoggedIn(!loggedIn);
  }
  return (
    <div className="App">
      {loggedIn ? <Home logout={handleAuth} /> : <Login login={handleAuth} />}
    </div>
  );
}

export default App;
