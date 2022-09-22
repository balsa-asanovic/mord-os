import './App.css';
import Authentication from './components/Authentication/Authentication';
import useAuth from "./hooks/useAuth";

function App() {
  const { authenticated } = useAuth();

  return (
    <div className="App">
      {authenticated ? 
        <div>Hello World </div>
        :
        <Authentication />  
    }
    </div>
  );
}

export default App;
