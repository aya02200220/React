import "./App.css";
import TextInput from "./components/TextInput/TextInput";
import Counter from "./components/Counter/Counter";
import ToggleButton from "./components/Toggle/Toggle";
import GitID from "./components/GithubID/GithubID";

function App() {
  return (
    <div className="app-container">
      <TextInput />
      <Counter />
      <ToggleButton />
      <GitID />
    </div>
  );
}

export default App;
