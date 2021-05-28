
import './App.css';
import Card from './Card';
import axios from 'axios';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Tarot Generator starts here
        </p>
        <div>
          <Card/>
        </div>
      </header>
    </div>
  );
}

export default App;
