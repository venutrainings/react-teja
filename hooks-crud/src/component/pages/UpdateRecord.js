import React, {useState, useEffect} from "react";
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';

 
function UpdateRecord() {
  const navigate = useNavigate();
  let {id} = useParams();

  const [users, setUsers] = useState([]);


  useEffect(() => {
    getData()
  }, []);

  const getData = () => {

    axios({
      method: 'GET', //you can set what request you want to be
      url: `https://gorest.co.in/public/v2/users/${id}`,
      headers: {
        Authorization: 'Bearer 489d544765eae2a983ad8969b8ff4f5960e934844f4171ae740b06683a916561'
      }
    })
      .then(res =>{
        alert("VIEW");
        setUsers(res.data)
      })     

      .catch(err => {
        alert(err)
      })

    }
  
  const [newData, setNewData] = useState({
    "name": "",
    "email": "",
    "gender": "",
    "status": "",
  });

  const onUpdateData = ({ name, value }) => {
    setUsers({ ...users, [name]: value} );
  };

  const UpdateRecord = async e => {
    e.preventDefault();
  await  axios({
    method: 'put', //you can set what request you want to be
    url: `https://gorest.co.in/public/v2/users/ ${id}`,
    data: users,
    headers: {
      Authorization: 'Bearer 489d544765eae2a983ad8969b8ff4f5960e934844f4171ae740b06683a916561'
    }
  }).then(res =>{
    navigate("/")  
    alert("updated")  
  }).catch(err =>{
      alert(err)
  })
  };

  return (
    <div className="container">
    <h1>Update Record</h1>

    <form onSubmit={e => {
      e.preventDefault();
    }}>
    <div className="row">
      < div className="col-6 mb-3">
        <label className="form-label">Name</label>
        <input value={users.name || ''} onChange={(e) => onUpdateData(e.target)} className="form-control" name="name" ></input>
      </div>
      <div className="col-6 mb-3">
        <label className="form-label">E-mail</label>
        <input value={users.email || ''} onChange={(e) => onUpdateData(e.target)} className="form-control" name="email" type='email'></input>
      </div>
    </div>

    <div className="row">

      <div className="col-6 mb-3">
        <label className="form-label">Gender</label>
        <input value={users.gender || ''} onChange={(e) => onUpdateData(e.target)} className="form-control" name="gender"></input>
      </div>

      <div className="col-6 mb-3">
        <label className="form-label">Status</label>
        <input value={users.status || ''} onChange={(e) => onUpdateData(e.target)} className='form-control' name="status"></input>
      </div>

    </div>

    <button onClick={(e) => UpdateRecord(e)}>Submit</button>
  </form>
</div>
 
  )
}

export default UpdateRecord;