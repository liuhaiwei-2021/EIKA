import React from 'react'
import ShoppingCompletedTableRow from './ShoppingCompletedTableRow'

function ShoppingCompletedTable({completedList, toggleItemCompleted}) {
    return (
        <div>
            <table className="shopping-completed-table">
                <tbody>
                { completedList.length > 0  &&
                    completedList.map((completedItem) => (
                       <ShoppingCompletedTableRow 
                        key = {completedItem.id} 
                        completedItem = {completedItem} 
                        toggleItemCompleted = {toggleItemCompleted} 
                    />
                ))}</tbody>
           </table>
        </div>
    )
}

export default ShoppingCompletedTable
