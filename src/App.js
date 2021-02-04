import logo from "./logo.svg";
import "./App.css";
import FirebaseTest from "./pages/FirebaseTest";

function App() {
  // chrome.windows.getLastFocused({ populate: false }, function (currentWindow) {
  //   chrome.windows.update(currentWindow.id, { width: 500 });
  // });
  // chrome.windows.update(chrome.windows.WINDOW_ID_CURRENT, { width: 500 });

  return (
    <div className="App">
      <FirebaseTest />
    </div>
  );
}

export default App;
