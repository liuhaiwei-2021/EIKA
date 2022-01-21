import React from 'react'
import ShoppingCompletedTableBody from './ShoppingCompletedTableBody'

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
                { completedList.length > 0  &&
                    completedList.map((completedItem) => (
                       <ShoppingCompletedTableBody
                        key = {completedItem.id} 
                        completedItem = {completedItem} 
                        toggleItemCompleted = {toggleItemCompleted} 
                    />
                ))}
           </table>
        </div>
    )
}

export default ShoppingCompletedTable
