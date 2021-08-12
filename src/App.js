import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Conf from './Conf';
import Header from './Header';
import Record from './Record';
import Past from './Past';
import Q2 from './q2';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Record />
        <Conf />
        <Past />
        <Q2 />

      </Router>
      
      
    </div>
  );
}

export default App;
