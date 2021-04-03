import "./App.css";
import Header from "./components/header/Header";
import { Route, Switch } from "react-router-dom";
import fetchProblemsStartAsync from "./redux/problems/problems.actions";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import CategorisedProblemspage from "./pages/CategorisedProblemspage";
import Homepage from "./pages/Homepage";
import Problemspage from "./pages/Problemspage";
import Errorpage from "./pages/Errorpage";
import withSpinner from "./HOC/withSpinner";

function App() {
  const dispatch = useDispatch();
  const isFetching = useSelector((state) => state.problems.isFetching);
  const areProblemsLoaded = useSelector((state) => !!state.problems.problems);

  useEffect(() => {
    dispatch(fetchProblemsStartAsync());
  }, [fetchProblemsStartAsync]);

  const CategorisedProblemspageWithSpinner = withSpinner(
    CategorisedProblemspage
  );
  const ProblemsPageWithSpinner = withSpinner(Problemspage);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route
          exact
          path="/problems"
          render={() => <ProblemsPageWithSpinner isLoading={isFetching} />}
        />
        <Route
          path="/problems/:problemCategory"
          render={() => (
            <CategorisedProblemspageWithSpinner
              isLoading={!areProblemsLoaded}
            />
          )}
        />
        <Route component={Errorpage} />
      </Switch>
    </div>
  );
}

export default App;
