import React from 'react'
import ShoppingCompletedTableRow from './ShoppingCompletedTableRow'

function ShoppingCompletedTable({completedList, toggleItemCompleted}) {
    return (
        <div>
            <table className="shopping-completed-table">
                <caption>Shopping Completed List</caption>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    { completedList.length > 0  &&
                        completedList.map((completedItem) => (
                        <ShoppingCompletedTableRow
                            key = {completedItem.id} 
                            completedItem = {completedItem} 
                            toggleItemCompleted = {toggleItemCompleted} 
                        />
                    ))}
                </tbody>
           </table>
        </div>
    )
}

export default ShoppingCompletedTable
