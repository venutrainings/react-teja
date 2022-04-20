import React from "react";
import './HelloJsx.css'

const HelloJsx = () =>{
    return React.createElement('div', {id : 'hello', className:'dummyContent'}, React.createElement('h4', null, "Hello harsha jsx"))
}

export default HelloJsx