import logo from './logo.svg';
import './App.css';

import CompShowEps from './eps/ShowEps.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <CompShowEps></CompShowEps>
    </div>
  );
}

export default App;
