import React from 'react'

const ShoppingTableRow = ({item,toggleItemCompleted,removeItem}) => {
    return (
        <tr key={item.id} > 
            <td> 
                <input className="item-desc" onClick={()=>toggleItemCompleted(item.id)}  defaultChecked = {item.completed ?  "checked" : ""}  id="item-desc" type="checkbox"  name={item.name}/>
                <label onClick={()=>toggleItemCompleted(item.id)} className={item.completed ? "completed" : ""} htmlFor="item-desc">{item.name}, {item.price}</label> </td>
            <td>
                <img className="item-img"  src={item.img} />
            </td>
        </tr>           
    )
}

export default ShoppingTableRow
