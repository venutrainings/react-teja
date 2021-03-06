import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../App.css';
import { Link, useNavigate } from 'react-router-dom';
import UpdateRecord from './UpdateRecord';


const Home = () => {
  const navigate = useNavigate();


  const colNames = ['id', 'name', 'email', 'gender', 'status', 'action'];

  const [users, setUsers] = useState([]);


  useEffect(() => {
    getData()
  }, []);

  const getData = () => {

    axios({
      method: 'GET', //you can set what request you want to be
      url: 'https://gorest.co.in/public/v2/users',
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

    // axios.get('https://gorest.co.in/public/v2/users')
    //   .then(res => {
    //     setUsers(res.data)
    //     console.log(res.data)
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })

  }

  // const deleteRecord =  (id, e)  =>{
  //     axios({
  //     method: 'delete', //you can set what request you want to be
  //     url: `https://gorest.co.in/public/v2/users/${id}`,
  //     headers: {
  //       Authorization: 'Bearer 489d544765eae2a983ad8969b8ff4f5960e934844f4171ae740b06683a916561'
  //     }
  //   })
  // }

  const deleteRecord = (id) => {
    // alert(id);
    axios({
      method: 'delete', //you can set what request you want to be
      url: `https://gorest.co.in/public/v2/users/${id}`,
      headers: {
        Authorization: 'Bearer 489d544765eae2a983ad8969b8ff4f5960e934844f4171ae740b06683a916561'
      }
    })
      .then(res =>{
        alert("deleted");
        getData();
      }
       
        )
      .catch(err => {
        alert(err)
      })

  }

  const updateRecord = id => {

    navigate(`updateRecord/${id}`)
  }

  return (
    <div className='container'>
      
      <div className='py-4'>
        <Link className='btn btn-primary' to="/addRecord"> <i class="fa fa-plus" aria-hidden="true"></i>Add Record</Link>
      </div>
      <div className='py-4'>
        {users.length > 0 && (
          <table class="table table-dark table-hover">
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
              {users.map((obj, index1) =>
                <tr key={index1}>
                  {Object.values(obj).map((value, index2) => (
                    <td key={index2}>{value}</td>
                  ))}
                  <td>
                    <button onClick={updateRecord.bind(this, obj.id)}  >

                      <i class="fa fa-pencil-square" aria-hidden="true"></i>
                    </button>
                    <button onClick={deleteRecord.bind(this, obj.id)}>

                      <i class="fa fa-trash" aria-hidden="true"></i>
                    </button>
                  </td>
                </tr>)}
            </tbody>
          </table>

        )}

      </div>
    </div>

  )
}

export default Home;