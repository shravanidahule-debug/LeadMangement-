import { useState } from 'react';

import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import Landing from './components/Landing';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem('token')
  );

  const [page, setPage] = useState('home');

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setPage('home');
  };

  if (isLoggedIn) {
    return (
      <div className="app-container">
        <Sidebar onLogout={handleLogout} />
        <Dashboard />
      </div>
    );
  }

  if (page === 'login') {
    return (
      <Login
       onLogin={() => setIsLoggedIn(true)}
       onRegister={() => setPage('register')}
      />
    );
  }

  if (page === 'register') {
    return (
      <Register
        onLogin={() => setIsLoggedIn(true)}
        onGoToLogin={() => setPage('login')}
      />
    );
  }

  return (
    <Landing
      onLogin={() => setPage('login')}
      onRegister={() => setPage('register')}
    />
  );
}

export default App;