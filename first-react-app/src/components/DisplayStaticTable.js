import React from 'react'

const DisplayStaticTable = props => {
    const {userDetails} = props;
    const {id,name,place,dob,age} =userDetails
     
    return (
    <div><h1>{name}</h1></div>
  )
}

export default DisplayStaticTable;