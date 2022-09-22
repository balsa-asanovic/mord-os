import { useLayoutEffect } from 'react';
import './App.css';
import Authentication from './components/Authentication/Authentication';
import useAuth from "./hooks/useAuth";
import { validCredentials } from './constants/validCredentials';
import Desktop from './components/Desktop/Desktop';

function App() {
  const { authenticated, setAuthenticated } = useAuth();

  useLayoutEffect(() => {
    const credentials = JSON.parse(localStorage.getItem('userCredentials'));
    credentials?.email === validCredentials.email && credentials?.password === validCredentials.password && setAuthenticated(true);
  }, [])

  return (
    <div className="App">
      {authenticated ? 
        <Desktop />
        :
        <Authentication />  
    }
    </div>
  );
}

export default App;
