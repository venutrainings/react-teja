import axios from 'axios';
import React, {useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom';


const UpdateRecord = () =>{
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    const [newData, setNewData] = useState({
        "name": "",
        "email": "",
        "gender": "",
        "status": "",
      });

      useEffect(() => {
        getData() }, []);
     
       const getData =() => {
         axios.get('https://gorest.co.in/public/v2/users')
           .then(res => {
             setUsers(res.data)
             console.log(res.data)
           })
           .catch(err => {
             console.log(err)
           })
       
       }

      const onUpdateData = ({ name, value }) => {
        setNewData({ ...newData, [name]: value} );
      };

      const UpdateRecord = async( id, e)  => {
      await  axios({
        method: 'put', //you can set what request you want to be
        url: `https://gorest.co.in/public/v2/users/${id}`,
        data: newData,
        headers: {
          Authorization: 'Bearer 489d544765eae2a983ad8969b8ff4f5960e934844f4171ae740b06683a916561'
        }
      }).then(res =>{
        navigate("/")  
        alert("added")  
      }).catch(err =>{
          alert(err)
      })
      };
 
    return(
        <div className="container">
            <h1>Update Record</h1>

            <form>
            <div className="row">
              < div className="col-6 mb-3">
                <label className="form-label">Name</label>
                <input value={newData.name} onChange={(e) => onUpdateData(e.target)} className="form-control" name="name" ></input>
              </div>
              <div className="col-6 mb-3">
                <label className="form-label">E-mail</label>
                <input value={newData.email} onChange={(e) => onUpdateData(e.target)} className="form-control" name="email" type='email'></input>
              </div>
            </div>

            <div className="row">

              <div className="col-6 mb-3">
                <label className="form-label">Gender</label>
                <input value={newData.gender} onChange={(e) => onUpdateData(e.target)} className="form-control" name="gender"></input>
              </div>

              <div className="col-6 mb-3">
                <label className="form-label">Status</label>
                <input value={newData.status} onChange={(e) => onUpdateData(e.target)} className='form-control' name="status"></input>
              </div>

            </div>

            <button onClick={(e) => UpdateRecord(e)}>Submit</button>
          </form>
        </div>
    )
}

export default UpdateRecord;