import "./App.css";
import CounterApp from "./CounterApp";
import Switch from "./Switch";
import InputText from "./InputText";
import ColorSelector from "./ColorSelector";
import Password from "./Password";
import TaskManager from "./TaskManager";
import ProductList from "./Products";

function App() {
  return (
    <div className="App">
      <CounterApp />
      <Switch />
      <InputText />
      <ColorSelector />
      <Password />
      <TaskManager />
      <ProductList />
    </div>
  );
}

export default App;
