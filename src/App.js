import "./App.css";
import Header from "./components/header/Header";
import { Route, Switch } from "react-router-dom";
import CategorisedProblemspage from "./pages/CategorisedProblemspage";
import Homepage from "./pages/Homepage";
import Problemspage from "./pages/Problemspage";
import Errorpage from "./pages/Errorpage";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/problems" component={Problemspage} />
        <Route path="/problems/:problemCategory" component={CategorisedProblemspage} />
        <Route component={Errorpage} />
      </Switch>
    </div>
  );
}

export default App;
