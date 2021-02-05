import "./App.css";
import React from "react";
import GitAdd from "./pages/GitAdd";
import GitCommit from "./pages/GitCommit";
import GitPush from "./pages/GitPush";
import { useState } from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import StepBox from "./components/StepBox";

class App extends React.Component {
  // const history = createMemoryHistory()
  state = {
    page: "add",
    render: <GitAdd setPage={this.setPage}></GitAdd>,
  };

  setPage = (p) => {
    let render = null;
    switch (p) {
      case "add":
        render = <GitAdd setPage={this.setPage}></GitAdd>;
        break;
      case "commit":
        render = <GitCommit setPage={this.setPage}></GitCommit>;
        break;
      case "push":
        render = <GitPush setPage={this.setPage}></GitPush>;
        break;
    }

    this.setState({ page: p, render: render });
  };

  render() {
    return (
      <>
        <Wrapper>
          <Header />
          <StepBox changeTab={this.setPage} tab={this.state.page} />
          {this.state.render}
        </Wrapper>
      </>
    );
  }
}

export default App;
