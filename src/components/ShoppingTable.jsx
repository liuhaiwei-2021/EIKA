import React from 'react'
import ShoppingTableBody from './ShoppingTableBody'

const ShoppingTable = ({uncompletedList,toggleItemCompleted}) => {
    return (
        <div>
            <table className="shopping-table">
                <caption>Shopping List</caption>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Image</th>
                    </tr>
                </thead>
                {uncompletedList && uncompletedList.map((uncompletedItem) => (<ShoppingTableBody key = {uncompletedItem.id} uncompletedItem = {uncompletedItem} toggleItemCompleted = {toggleItemCompleted}/>))}
           </table>
        </div>
    )
}

export default ShoppingTable
