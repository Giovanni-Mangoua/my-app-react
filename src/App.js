import logo from './logo.svg';
import './App.css';
import './dist/css/bootstrap.css';
import { MyApp } from "./Test";
import {Section} from './projet';

function App() {

  return (
   
      
      <div className='container'>
        
        <div className='row'>
          <div className='col-lg-5'>
            <h3>Hooks</h3>
            <MyApp />
          </div>
        </div>

      </div>

    
  );
}

export default App;

/* 
<div className='row'>
          <center>
              <h2>Todo List</h2>
          </center>
        </div>

        <div className='row'>
          <div className='col-lg-offset-2 col-lg-8'>
            <Section />
          </div>
        </div>
<div className="App">

<header className="App-header">
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
        </a>
      </header>
</div>
*/