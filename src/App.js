import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Conf from './Conf';
import Header from './Header';
import Record from './Record';
import Past from './Past';
import Q2 from './Q2';
import Ped from './Ped';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Record />
        <Conf />
        <Past />
        <Q2 />
        <Ped />
        <Footer />

      </Router>
      
      
    </div>
  );
}

export default App;
