import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Post from './components/Post';


function App() {
  return (
    <div className="App">

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> *
      </header> */}

      <header>
        <h1>Home</h1>
      </header>
      <body>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </body>

    </div>
  );
}

export default App;
