import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, MemoryRouter } from "react-router-dom";
import { createMemoryHistory } from "history";
import GitAdd from "./pages/GitAdd";
import GitCommit from "./pages/GitCommit";
import GitPush from "./pages/GitPush";

import FirebaseTest from "./pages/FirebaseTest";

function App() {
  const history = createMemoryHistory();
  return (
    <div>
      <FirebaseTest />
      <MemoryRouter history={history}>
        <Switch>
          <Route path="/" component={GitAdd} exact></Route>
          <Route path="/commit" component={GitCommit} exact></Route>
          <Route path="/push" component={GitPush} exact></Route>
          <Route
            render={({ location }) => (
              <div>이 페이지는 존재하지 않습니다:{location.pathname}</div>
            )}
          ></Route>
        </Switch>
      </MemoryRouter>
    </div>
  );
}

export default App;
