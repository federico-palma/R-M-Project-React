import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <main className="main">
          <Switch>
            <Route exact path='/'>
              
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
