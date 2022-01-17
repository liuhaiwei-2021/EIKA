import React from 'react'
import ShoppingTable from './ShoppingTable'

const ShoppingList = () => {
    return (
        <div className="shopping-list">
            <h1>Shopping List</h1> 
            <p> 
                Sort by:  
                <input type="button" value="Name"/>
                <input type="button" value="Price"/></p>    
            
            <ShoppingTable />

        </div>
    )
}

export default ShoppingList

