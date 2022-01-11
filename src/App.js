import "./normalize.css";
import "./index.css";
import {Landing} from "./components/Header/Landing.jsx"
import { Introduce } from "./components/Introduce/Introduce";

function App() {
  return (
    <div className="App">
      <Landing/>
      <Introduce/>
    </div>
  );
}

export default App;
