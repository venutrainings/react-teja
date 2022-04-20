import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import HelloJsx from './components/Hello.jsx';
import Timer from './components/Timer';

function App() {
  return (
    <div className="App">
      <Greet name="Harsha" proName="chenna">
    <p>This is child</p>

      </Greet>
      <Greet name="Navina">
        <button className='' type="button">Greet</button>
      </Greet>
      <Greet name="Dharma"></Greet>
      <Greet name="Teja"></Greet>
      
      <Welcome />
      <Hello name="Dharma"/>
      <HelloJsx name="Teja"/>
      <Timer></Timer>
    </div>
  );
}

export default App;
