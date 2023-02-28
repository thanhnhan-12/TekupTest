import './App.css';
import Card from './components/Card';
import ArrowTop from './components/Card/ArrowTop';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Card />
      <ArrowTop/>
    </div>
  );
}

export default App;
