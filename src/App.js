import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Conf from './Conf';
import Header from './Header';
import Record from './Record';
import Past from './Past';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Record />
        <Conf />
        <Past />

      </Router>
      
      
    </div>
  );
}

export default App;
