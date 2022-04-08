import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import TriviaApp from "./pages/TriviaApp";

function App() {
  return (
    <div className='App'>
      <Router>
        <nav className='navbar-brand'>
          <ul>
            <li>
              <Link to='/'>TriviaApp</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route to='/'>
            <TriviaApp />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
