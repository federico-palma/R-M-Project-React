import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <main className="main">
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
