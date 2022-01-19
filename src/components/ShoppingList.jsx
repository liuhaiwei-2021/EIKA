import React from 'react';
import { useNavigate} from "react-router-dom";
import ShoppingTable from './ShoppingTable'

const ShoppingList = ({list,toggleItemCompleted,removeItem}) => {
    const navigate = useNavigate();
    const handleClick =()=>{
        navigate('/add')    
    }
    return (
        <div className="shopping-list">
            <h1>Shopping List</h1> 
            <p> 
                Sort by:  
                <input type="button" value="Name"/>
                <input type="button" value="Price"/></p>    
            
            <ShoppingTable list={list} toggleItemCompleted={toggleItemCompleted} removeItem={removeItem}/>
            <button className="btn-add" onClick={() => handleClick()} >Add a new item</button>
            <div>
                <input className="view-completed-items" type="button" value="View completed items"/>
            </div>
            
        </div>
    )
}

export default ShoppingList

