import "./App.css";
import { Button } from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      <Button variant="outlineRed">ボタン</Button>
      <Button variant="important">ボタン</Button>
      <Button>ボタン</Button>
      <Button variant="outlineBlue">ボタン</Button>
    </div>
  );
}

export default App;
