import React from 'react'
import TableRow from './TableRow'

const Table = ({list,toggleItemCompleted}) => {
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                { list.length > 0  &&
                        list.map((item) => (
                        <TableRow
                            key = {item.id} 
                            item = {item} 
                            toggleItemCompleted = {toggleItemCompleted} 
                        />
                    ))}
                </tbody>
           </table>
        </div>
    )
}

export default Table
