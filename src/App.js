import "./App.css";
import React from "react";
import GitAdd from "./pages/GitAdd";
import GitCommit from "./pages/GitCommit";
import GitPush from "./pages/GitPush";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import StepBox from "./components/StepBox";

class App extends React.Component {
    // const history = createMemoryHistory()
    state = {
        page: "add",
        // render: <GitAdd setPage={this.setPage}></GitAdd>,
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

        return (
            <>
                <Wrapper>
                    <Header />
                    <StepBox changeTab={this.setPage} tab={this.state.page} />
                    {page}
                </Wrapper>
            </>
        );
    }
}

export default App;
