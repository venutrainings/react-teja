import React from 'react'

const DisplayTable = props => {
    const {finalVari} =props;
    const {id,name,place,dob,age} = finalVari

    return (
        <div>
            <table className='table'>
                
                <tbody className='table text-right'>
                    <tr>
                        <td className="text-right">{id}</td>
                        <td className="text-right">{name}</td>
                        <td className="text-right">{place}</td>
                        <td className="text-right">{dob}</td>
                        <td className="text-right">{age}</td>

                    </tr>
                </tbody>
            </table>
            </div>
    )
}
export default DisplayTable;