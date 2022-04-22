import logo from './logo.svg';
import './App.css';
import DisplayTable from './components/DisplayTable';

const tableData =[{
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

<table>
  <thead>
  <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Place</th>
          <th>Dob</th>
          <th>Age</th>

        </tr>
  </thead>
      
        {tableData.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.id}</td>
              <td>{val.name}</td>
              <td>{val.place}</td>
              <td>{val.dob}</td>
              <td>{val.age}</td>

            </tr>
          )
        })}
      </table>
      {/* <table className='table' id="getTable">
      <thead className='table-dark'>
                    <tr>
                        <th className="text-right">id</th>
                        <th className="text-right">name</th>
                        <th className="text-right">place</th>
                        <th className="text-right">dob</th>
                        <th className="text-right">age</th>
                    </tr>
                </thead>
      </table>
      {tableData.map(eachData => 
        <DisplayTable finalVari={eachData}></DisplayTable>
        )}
      */}
    </div>
  );
}

export default App;
