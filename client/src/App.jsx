import "./App.css";
import { AppContext } from "./Components/Context/AppContext";
import Main from "./Components/Main";
import IntroLoader from "./Components/IntroLoader";

function App() {
  return (
    <AppContext>
      <IntroLoader />
      <Main />
    </AppContext>
  );
}

export default App;
