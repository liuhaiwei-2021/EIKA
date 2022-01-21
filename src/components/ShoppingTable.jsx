import React from 'react'
import ShoppingTableRow from './ShoppingTableRow'

const ShoppingTable = ({uncompletedList,toggleItemCompleted}) => {
    return (
        <div>
            <table className="shopping-table">
               <caption>Shopping List</caption>
            <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
            </tr>
                <tbody>
                    {uncompletedList && uncompletedList.map((uncompletedItem) => (<ShoppingTableRow key = {uncompletedItem.id} uncompletedItem = {uncompletedItem} toggleItemCompleted = {toggleItemCompleted}/>))}
                </tbody>
           </table>
        </div>
    )
}

export default ShoppingTable
