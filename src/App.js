import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Characters from './components/Characters';
import Home from './components/Home';
import Navbar from './components/Navbar';


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

            </Switch>
          </main>
      </div>
    </Router>
  );
}

export default App;
