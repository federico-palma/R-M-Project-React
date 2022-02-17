import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Characters from './components/Characters';
import Locations from './components/Locations';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <main className="main">
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>

              <Route path='/characters'>
                <Characters />
              </Route>
              <Route path='/locations'>
                <Locations />
              </Route>

            </Switch>
          </main>
      </div>
    </Router>
  );
}

export default App;
