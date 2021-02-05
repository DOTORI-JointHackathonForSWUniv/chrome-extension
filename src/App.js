import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
// import FirebaseTest from "./pages/FirebaseTest";
import GitAdd from "./pages/GitAdd";
import GitCommit from "./pages/GitCommit";

function App() {
    // chrome.windows.getLastFocused({ populate: false }, function (currentWindow) {
    //   chrome.windows.update(currentWindow.id, { width: 500 });
    // });
    // chrome.windows.update(chrome.windows.WINDOW_ID_CURRENT, { width: 500 });

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/add" component={GitAdd} exact></Route>
                <Route path="/commit" component={GitCommit} exact></Route>
                <Route render={({ location }) => <div>이 페이지는 존재하지 않습니다:{location.pathname}</div>}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
