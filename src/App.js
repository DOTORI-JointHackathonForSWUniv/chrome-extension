import logo from "./logo.svg";
import "./App.css";
// import FirebaseTest from "./pages/FirebaseTest";
import GitAdd from "./pages/GitAdd";

function App() {
  // chrome.windows.getLastFocused({ populate: false }, function (currentWindow) {
  //   chrome.windows.update(currentWindow.id, { width: 500 });
  // });
  // chrome.windows.update(chrome.windows.WINDOW_ID_CURRENT, { width: 500 });

  return (
    <div className="App">
      <GitAdd />
    </div>
  );
}

export default App;
