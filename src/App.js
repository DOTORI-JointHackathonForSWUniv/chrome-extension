import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, Router, BrowserRouter } from "react-router-dom";
import React from "react";
import { createMemoryHistory } from "history";
import GitAdd from "./pages/GitAdd";
import GitCommit from "./pages/GitCommit";
import GitPush from "./pages/GitPush";
import { useState } from "react";
import { render } from "@testing-library/react";


// function App() {
//   const history = createMemoryHistory();
//   return (
//     <BrowserRouter history={history}>
//       <Route path="/" component={GitAdd} exact></Route>
//       <Route path="/commit" component={GitCommit} exact></Route>
//       <Route path="/push" component={GitPush} exact></Route>
//       <Route
//         render={({ location }) => (
//           <div>이 페이지는 존재하지 않습니다:{location.pathname}</div>
//         )}
//       ></Route>
//     </BrowserRouter>
//   );

class App extends React.Component {
    // const history = createMemoryHistory()
    state = {
        page: "add",
    };

    setPage = (p) => {
        this.setState({ page: p });
    };

    render() {
        let page = null;
        switch (this.state.page) {
            case "add":
                page = <GitAdd setPage={this.setPage}></GitAdd>;
                break;
            case "commit":
                page = <GitCommit setPage={this.setPage}></GitCommit>;
                break;
            case "push":
                page = <GitPush setPage={this.setPage}></GitPush>;
                break;
        }
        return page;
    }
}

export default App;
