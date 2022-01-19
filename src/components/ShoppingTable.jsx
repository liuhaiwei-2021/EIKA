import React from 'react'
import ShoppingTableRow from './ShoppingTableRow'

const ShoppingTable = ({list,toggleItemCompleted,removeItem}) => {
    return (
        <div>
            <table className="shopping-table">               
                <tbody>                                    
                        { list &&
                            list.map((item)=>(
                            <ShoppingTableRow 
                                key={item.id} 
                                item={item} 
                                toggleItemCompleted={toggleItemCompleted} 
                                removeItem={removeItem}/>
                        ))}                                                             
                 </tbody>
           </table>
        </div>
    )
}

export default ShoppingTable
