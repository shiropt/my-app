import "./App.css";
import { Button } from "./components/Button";

function App() {
  return (
    <div className="App">
      <Button size="large" variant="secondary">
        ボタン
      </Button>
      <Button variant="disabled">ボタン</Button>
      <Button size="small">ボタン</Button>
    </div>
  );
}

export default App;
