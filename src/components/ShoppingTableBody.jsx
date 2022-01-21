import React from 'react'

const ShoppingTableBody = ({uncompletedItem,toggleItemCompleted}) => {
    const toggle = () => {
        toggleItemCompleted(uncompletedItem.id);
    }
    return (
        <tbody key={uncompletedItem.id}>
            <tr>
                <td><input className="item-name" onClick={toggle}  defaultChecked = {uncompletedItem.completed ?  "checked" : ""}  id="item-name" type="checkbox"/><label className={uncompletedItem.completed ? "completed" : ""}  htmlFor="item-name">{uncompletedItem.name}</label></td>
                <td onClick={toggle} className={uncompletedItem.completed ? "completed" : ""}>{uncompletedItem.price}</td>
                <td><i className="fas fa-camera"></i></td>
            </tr>
        </tbody>
    )
}

export default ShoppingTableBody
