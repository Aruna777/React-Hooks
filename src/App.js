import "./App.css";
import CounterApp from "./CounterApp";
import Switch from "./Switch";
import InputText from "./InputText";
import ColorSelector from "./ColorSelector";
import Password from "./Password";

function App() {
  return (
    <div className="App">
      <CounterApp />
      <Switch />
      <InputText />
      <ColorSelector />
      <Password />
    </div>
  );
}

export default App;
