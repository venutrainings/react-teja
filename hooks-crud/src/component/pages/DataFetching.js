import React, { useEffect, useState } from "react";
import axios from 'axios'
 const DataFetching =() => {
     const [users, setUsers] = useState([]);

     useEffect(() => {
         axios.get('https://gorest.co.in/public/v2/users')
         .then(res => {
             setUsers(res)
         })
         .catch(err =>{
             console.log(err)
         })
     })



    return (
<div>

</div>
    )
 }

 export default DataFetching