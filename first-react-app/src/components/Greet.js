import React from 'react'

// function Greet(){
//     return <h1>Hello Navina</h1>
// }

const Greet = (props) =>{

    return (
        <div>
     <h1>Hi {props.name} {props.proName}</h1>
{props.children}
        </div>

    ) 
}
  

export default Greet;