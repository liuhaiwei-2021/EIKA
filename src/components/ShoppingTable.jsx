import React from 'react'
import ShoppingTableRow from './ShoppingTableRow'

const ShoppingTable = ({uncompletedList,toggleItemCompleted}) => {
    console.log(uncompletedList)
    return (
        <div>
            <table className="shopping-table">
                <tbody>
                    {uncompletedList && uncompletedList.map((uncompletedItem) => (<ShoppingTableRow key = {uncompletedItem.id} uncompletedItem = {uncompletedItem} toggleItemCompleted = {toggleItemCompleted}/>))}
                </tbody>
           </table>
        </div>
    )
}

export default ShoppingTable
