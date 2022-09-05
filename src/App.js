import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Characters from "./Pages/Characters";
import CharacterDetails from "./Pages/CharacterDetails";
import Locations from "./Pages/Locations";
import Episodes from "./Pages/Episodes";

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
