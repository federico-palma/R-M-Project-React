import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Characters from "./components/Characters";
import CharacterDetails from "./components/CharacterDetails";
import Locations from "./components/Locations";
import Episodes from "./components/Episodes";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/characters">
              <Characters />
            </Route>
            <Route path="/characters/:id">
              <CharacterDetails />
            </Route>
            <Route path="/locations">
              <Locations />
            </Route>
            <Route path="/episodes">
              <Episodes />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
