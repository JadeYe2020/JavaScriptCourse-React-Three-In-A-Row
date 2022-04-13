import { Outlet, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React-based Three-in-a-Row Game</h1>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/sample">Sample Game</Link> |{" "}
        <Link to="/random">Random Game</Link>
      </nav>
      <Outlet />        
    </div>
  );
}

export default App;
