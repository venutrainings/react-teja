import React, {  useEffect, useState } from 'react';
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";


function DisplayTable() {
  const [tableData, setTableData] =useState([
  {
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
  }
  
  ]);
  const [filterData, setFilterData] =useState(tableData);
  const [search, setSearch] =useState('');
  const [newData, setNewData] = useState( {
    
    "id" : "",
    "name" : "",
    "place" : "",
    "dob" : "",
    "age" : "",
  
  });
  const [isOpen, setIsOpen] = useState(false);
  const colNames=['id', 'name', 'place', 'dob', 'age', 'action'];
  const onAddData = ({name,value}) =>{
    setNewData({...newData, [name]:value, id:tableData.length + 1});
  };

  const resetRecord = () => {
    setNewData({
    
      "id" : "",
      "name" : "",
      "place" : "",
      "dob" : "",
      "age" : "",
    
    });
  }

  useEffect(() =>{
    if(search.length > 2)
    setFilterData(tableData.filter(val => {
      return val.name.toLowerCase().includes(search.toLowerCase());
    }));
    else
    setFilterData(tableData);
  },[tableData,search]);

  const AddRecord = (e) =>
  {
    e.preventDefault();
    setTableData([...tableData,newData]);
    resetRecord();
    setIsOpen(false);
  }
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
        <form>
          <div className="row">
          < div className="col-6 mb-3">
              <label className="form-label">Name</label>
              <input value={newData.name} onChange={(e) => onAddData(e.target)} className="form-control" name="name" ></input>
          </div>
        <div className="col-6 mb-3">
          <label className="form-label">Place</label>
          <input value={newData.place} onChange={(e) => onAddData(e.target)} className="form-control" name="place"></input>
        </div>
      </div>
 
 <div className="row">

 <div className="col-6 mb-3">
  <label className="form-label">Date of Birth</label>
    <input value={newData.dob} onChange={(e) => onAddData(e.target)} className="form-control" name="dob"></input>
  </div>

  <div className="col-6 mb-3">
  <label className="form-label">Age</label>
    <input value={newData.age} onChange={(e) => onAddData(e.target)} className='form-control' name="age"></input>
  </div>

 </div>
 
 <button onClick={(e) => AddRecord(e)}>Submit</button>
</form>

        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>

      <input onChange={(e) => { 
        setSearch(e.target.value);
      }} placeholder='Search'></input>
      {tableData.length > 0 && (
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
            {filterData.map((obj, index1) =>
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