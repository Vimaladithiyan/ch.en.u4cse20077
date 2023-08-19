import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Listrain } from "./Listrain";
import { TrainDetails } from "./TrainDetails";

function App() {
  return (
    <Router>
       <div className="App">
       <Routes>
        <Route path="/" element={<Listrain/>} />
        <Route path="/train/:trainNumber" element={<TrainDetails/>} />
       </Routes>
      </div>
    </Router>
  );
}

export default App;
