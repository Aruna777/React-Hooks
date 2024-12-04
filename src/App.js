import "./App.css";
import CounterApp from "./CounterApp";
import Switch from "./Switch";
import InputText from "./InputText";
import ColorSelector from "./ColorSelector";
import Password from "./Password";
import TaskManager from "./TaskManager";
import ProductList from "./Products";
import ConsoleLogger from "./ConsoleLogger";
import FetchUsers from "./FetchUsers";
import MouseTracker from "./MouseTracker";
import UserFetcher from "./UserFetch";

function App() {
  return (
    <div className="min-h-screen bg-blue-100 p-6 flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-lg">
        <CounterApp />
        <Switch />
        <InputText />
        <ColorSelector />
        <Password />
        <TaskManager />
        <ProductList />
        <ConsoleLogger />
        <FetchUsers />
        <MouseTracker />
        <UserFetcher />
      </div>
    </div>
  );
}

export default App;
