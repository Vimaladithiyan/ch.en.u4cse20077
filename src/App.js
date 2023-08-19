import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Listrain } from "./Listrain";
import { TrainDetails } from "./TrainDetail";

function App() {
  return (
    <Router>
       <div className="App">
       <Routes>
        <Route path="/" exact component={Listrain} />
        <Route path="/train/:trainNumber" component={TrainDetails} />
       </Routes>
      </div>
    </Router>
  );
}

export default App;
