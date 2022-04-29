import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";


function DisplayTable() {

  
  const [tableData, setTableData] =useState([{
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
  
  ])
  
  const colNames=['id', 'name', 'place', 'dob', 'age', 'action']
  

  const [searchVal, setSearchVal] = useState('');
  const [filteredData, setFilteredData] = useState(tableData);

  const filterTable = (e) => {
    setSearchVal(e.target.value)
    let result = [];

    if (e.target.value.length >= 2) {
      setSearchVal(e.target.value)
      result = tableData.filter(val => {
        return val.name.toLowerCase().includes(e.target.value.toLowerCase());
      })
      setFilteredData(result)
    } else {
      setSearchVal("");
      result = tableData;
      setFilteredData(result);
    }
  }


  const randomNum =parseInt(Math.random()*1000);
  const [newData, setNewData] =useState( {
    
      "id" : "",
      "name" : "",
      "place" : "",
      "dob" : "",
      "age" : "",
    
  })
  const onAddData = (e) =>{
    const addData = {...newData}
    newData[e.target.id] =e.target.value
    
    setNewData(addData)
    console.log(newData)

    // setFilteredData(pre =>{
    //   return [...pre, newData]
    // })
  }

  const submitNewData =(e) =>{
    e.preventDefault();
    
    setFilteredData({
      id: randomNum,
      name :newData.name,
      place :newData.place,
      dob : newData.dob,
      age : newData.age
    })
  }

  const [isOpen, setIsOpen] = React.useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
        <button onClick={showModal}>Add Data</button>

        <Modal show={isOpen} onHide={hideModal}>
        <Modal.Header>
          <Modal.Title>Add New Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={(e) => submitNewData(e)}>
          <div class="row">
          <div class="col-6 mb-3">
    <label for="name" class="form-label">Name</label>
    <input onChange={(e) => onAddData(e)} type="text" class="form-control" id="name" aria-describedby="name"></input>
  </div>
  <div class="col-6 mb-3">
    <label for="place" class="form-label">Place</label>
    <input onChange={(e) => onAddData(e)} type="text" class="form-control" id="place"></input>
  </div>
          </div>
 
 <div class="row">

 <div class="col-6 mb-3">
  <label for="dob" class="form-label">Date of Birth</label>
    <input onChange={(e) => onAddData(e)} type="text" class="form-control" id="dob"></input>
  </div>

  <div class="col-6 mb-3">
  <label for="age" class="form-label">Age</label>
    <input onChange={(e) => onAddData(e)} type="text" class="form-control" id="age"></input>
  </div>

 </div>
 
 <button>Submit</button>
</form>

        </Modal.Body>
        <Modal.Footer>
          <button onClick={hideModal}>Cancel</button>
          <button onClick={(e) => submitNewData(e)}>Add</button>
        </Modal.Footer>
      </Modal>

      <input type='text' placeholder='Search' onChange={filterTable}></input>
      {filteredData.length > 0 && (
        <table cellSpacing="0" style={{ width: 'auto', height: 'auto', padding: '5px 10px' }}>
          <thead>
            <tr>
              {
                colNames.map((headerItem, index) => (
                  <th key={index}>
                    {headerItem.toUpperCase()}
                  </th>
                ))
              }
            </tr>
          </thead>
          <tbody>
            {filteredData.map((obj, index1) =>
              <tr key={index1}>
                {Object.values(obj).map((value, index2) => (
                  <td key={index2}>{value}</td>
                ))}
                <td></td>
              </tr>)}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default DisplayTable