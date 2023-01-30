import { Route, Routes } from "react-router-dom";
import "./App.css";
import { History, Home, Bmi } from "./pages";
function App() {
  return (
    <div className="App">
      <div className="view">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bmi" element={<Bmi />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
