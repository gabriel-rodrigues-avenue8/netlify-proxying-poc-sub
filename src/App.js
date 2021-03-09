import logo from './logo.svg';
import './App.css';
import { SubAppComponent } from "./SubAppTest.component";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Sub app
        </p>
        <SubAppComponent></SubAppComponent>
      </header>
    </div>
  );
}

export default App;
