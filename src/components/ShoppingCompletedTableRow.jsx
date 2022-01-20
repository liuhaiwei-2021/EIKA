import React from 'react'

const ShoppingCompletedTableRow = ({completedItem,toggleItemCompleted}) => {
    if(completedItem === undefined) {return null}
    const toggle = () => {
        toggleItemCompleted(completedItem.id)
    }
    return (           
        <tr key={completedItem.id}> 
            <td><b className="completed-item" onClick={toggle}>{completedItem.name}, {completedItem.price}</b></td>
            <td><img className="completed-item-img"  src={completedItem.img} alt=""/></td>
        </tr>            
    )
}

export default ShoppingCompletedTableRow
