import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import TriviaApp from "./pages/TriviaApp";
import ChuckApp from "./pages/ChuckApp";
function App() {
  return (
    <Router>
      <div className='App'>
        <nav className='navbar-brand'>
          <ul>
            <li>
              <Link to='/'>TriviaApp</Link>
            </li>
            <li>
              <Link to='/chuck'>Chuck</Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Switch>
          <Route exact path='/'>
            <TriviaApp />
          </Route>
          <Route exact path='/chuck'>
            <ChuckApp />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
