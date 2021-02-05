import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import GitAdd from "./pages/GitAdd";
import GitCommit from "./pages/GitCommit";
import GitPush from "./pages/GitPush";

function App() {
  const history = createMemoryHistory();
  return (
    <Router history={history}>
      <Route path="/" component={GitAdd} exact></Route>
      <Route path="/commit" component={GitCommit} exact></Route>
      <Route path="/push" component={GitPush} exact></Route>
      <Route
        render={({ location }) => (
          <div>이 페이지는 존재하지 않습니다:{location.pathname}</div>
        )}
      ></Route>
    </Router>
  );
}

export default App;
