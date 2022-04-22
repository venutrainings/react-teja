import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import HelloJsx from './components/Hello.jsx';
import Timer from './components/Timer';
import Message from './components/Message';
import Counter from './components/Counter';
import DisplayaStaticTable from './components/DisplayStaticTable';

const TableData =[{
  "id" : 1,
  "name" : "Dharma",
  "place" : "Gudivada",
  "dob" : "13-05-1998",
  "age" : 24,
},
{
  "id" : 2,
  "name" : "Teja",
  "place" : "Hyderabad",
  "dob" : "02-09-1997",
  "age" : 25,
},
{
  "id" : 3,
  "name" : "Harsha",
  "place" : "Vijayawada",
  "dob" : "13-0-1996",
  "age" : 26,
},
{
  "id" : 4,
  "name" : "Navina",
  "place" : "Kerala",
  "dob" : "13-05-1991",
  "age" : 29,
},
{
  "id" : 5,
  "name" : "Sai",
  "place" : "Badhrachalam",
  "dob" : "13-05-1994",
  "age" : 27,
},
{
  "id" : 6,
  "name" : "Madhu",
  "place" : "Sircilla",
  "dob" : "13-05-1991",
  "age" : 28,
},

]

function App() {
  return (
    <div className="App">
      {TableData.map(eachData => {
     <DisplayaStaticTable userDetails={eachData} key/>

      })}
      {/* <Greet name="Harsha" proName="chenna">
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
      <Message/>
      <Counter></Counter> */}
    </div>
  );
}

export default App;
