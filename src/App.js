import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Route, Switch, Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import GitAdd from "./pages/GitAdd";
import GitCommit from "./pages/GitCommit";
import GitPush from "./pages/GitPush";
import { useState } from "react";
import { render } from "@testing-library/react";

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
