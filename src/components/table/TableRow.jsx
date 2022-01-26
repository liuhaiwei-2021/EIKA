import React from 'react'

const TableRow = ({item,toggleItemCompleted}) => {
    if(item === undefined) {return null}
    const toggle = () => {
        toggleItemCompleted(item.id)
    }
    return (
       
            <tr>
                <td><input  onClick={toggle} defaultChecked = {item.completed ?  "checked" : ""}  id="item-name" type="checkbox"/><label  htmlFor="item-name"></label>{item.name}</td>
                <td onClick={toggle}>{item.price}</td>
                <td><i className="fas fa-camera"></i></td>
            </tr>
     
    )
}

export default TableRow
