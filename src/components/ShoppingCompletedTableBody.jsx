import React from 'react'

const ShoppingCompletedTableBody = ({completedItem,toggleItemCompleted}) => {
    if(completedItem === undefined) {return null}
    const toggle = () => {
        toggleItemCompleted(completedItem.id)
    }
    return (    
        <tbody key={completedItem.id}>      
            <tr> 
               <td className="completed-item" onClick={toggle}>{completedItem.name}</td>
               <td className="completed-item" onClick={toggle}>{completedItem.price}</td>
               <td><img className="completed-item-img"  src={completedItem.img} alt=""/></td>
            </tr>  
        </tbody>          
    )
}

export default ShoppingCompletedTableBody
