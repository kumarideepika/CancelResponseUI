import logo from './cancel.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Donation Cancelled! <br /> Please try again.
        </p>
     
      </header>
    </div>
  );
}

export default App;