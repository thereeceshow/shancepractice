import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
      </Router>
      
      
    </div>
  );
}

export default App;
