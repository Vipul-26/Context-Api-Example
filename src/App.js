import React, { useState } from 'react';
import Login from './components/Login';
import ApplicationContext  from './ApplicationContext';

function App() {

  const [isAuth, setIsAuth] = useState(false);

  const toggleAuth = () => {
    setIsAuth(!isAuth);
  };

  return (
    <ApplicationContext.Provider value={{ isAuth: isAuth, toggleAuth: toggleAuth }}>
      <Login />
    </ApplicationContext.Provider>
  );
};

export default App;
