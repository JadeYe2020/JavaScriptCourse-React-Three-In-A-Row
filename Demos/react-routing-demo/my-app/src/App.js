import { Outlet, Link } from "react-router-dom";
import './App.css';
import PersonList from './PersonList';
import {PostList} from './PostList';

function App() {
  return (
    <div className="App">
      <h1>React API and Routing Demo Page</h1>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/people">Customers</Link> |{" "}
        <Link to="/posts">Posts</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
