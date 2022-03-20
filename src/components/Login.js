import React, { useContext } from 'react';
import ApplicationContext from '../ApplicationContext';

const Login = () => {

  const { isAuth, toggleAuth } = useContext(ApplicationContext);

  return (
    <button onClick={toggleAuth}>
      {isAuth ? 'Logout' : 'Login'}
    </button>
  );
};

export default Login;
