import React from 'react'

const ShoppingTableRow = ({uncompletedItem,toggleItemCompleted}) => {
    const toggle = () => {
        toggleItemCompleted(uncompletedItem.id);
    }
    return (
        <tr key={uncompletedItem.id}><td><input className="item-desc" onClick={toggle}  defaultChecked = {uncompletedItem.completed ?  "checked" : ""}  id="item-desc" type="checkbox"/><label className={uncompletedItem.completed ? "completed" : ""} onClick={toggle} htmlFor="item-desc">{uncompletedItem.name},{uncompletedItem.price}</label></td><td><img className="item-img"  src={uncompletedItem.img} alt=""/></td></tr>
    )
}

export default ShoppingTableRow
