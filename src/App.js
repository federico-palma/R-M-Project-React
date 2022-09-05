import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Characters from "./Pages/Characters";
import CharacterDetails from "./Pages/CharacterDetails";
import Locations from "./Pages/Locations";
import LocationDetails from "./Pages/LocationDetails";
import Episodes from "./Pages/Episodes";
import EpisodeDetails from "./Pages/EpisodeDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main">
          <Switch>
            <Route exact path={["/", "/r-m-project-react"]}>
              <Home />
            </Route>
            <Route exact path="/characters">
              <Characters />
            </Route>
            <Route path="/characters/:id">
              <CharacterDetails />
            </Route>
            <Route exact path="/locations">
              <Locations />
            </Route>
            <Route path="/locations/:id">
              <LocationDetails />
            </Route>
            <Route exact path="/episodes">
              <Episodes />
            </Route>
            <Route path="/episodes/:id">
              <EpisodeDetails />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
