import logo from "./logo.svg";
import "./App.css";

function App() {
  // chrome.windows.getLastFocused({ populate: false }, function (currentWindow) {
  //   chrome.windows.update(currentWindow.id, { width: 500 });
  // });
  // chrome.windows.update(chrome.windows.WINDOW_ID_CURRENT, { width: 500 });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
