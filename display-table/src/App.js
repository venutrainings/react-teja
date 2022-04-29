import logo from './logo.svg';
import React, {useState} from 'react';


import './App.css';
import DisplayTable from './components/DisplayTable';
import HooksFirst from './components/HooksFirst';



function App() {


  const [show, setShow]=useState(false);

  return (
    <div className="App">
      
      <button  onClick={() => setShow(true)}>Get Data</button>

      {
        show?<DisplayTable  />:null
      }
      {/* <HooksFirst/> */}
      
      {/* <DisplayTable listData={tableData}/> */}

{/* <table>
  <thead>
  <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Place</th>
          <th>Dob</th>
          <th>Age</th>

        </tr>
  </thead>
      <tbody>
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
        </tbody>
      </table> */}

      
    </div>
  );
}

export default App;
