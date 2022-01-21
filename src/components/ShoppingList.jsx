import React from 'react';
import { useNavigate} from "react-router-dom";
import ReactTable from 'react-table'
import ShoppingTable from './ShoppingTable'

const ShoppingList = ({toggleItemCompleted,uncompletedList}) => {
    const navigate = useNavigate();
    const handleClickAdd = () => {
        navigate('/add')    
    }
    const handleClickCompleted = () =>{ 
        navigate('/shoppinglist-completed')    
    }
    return (
        <div className="shopping-list">
            <h1>Shopping List</h1> 
            <p> 
                Sort by:  
                <input type="button" value="Name"/>
                <input type="button" value="Price"/></p>    
            
            <ShoppingTable toggleItemCompleted={toggleItemCompleted}  uncompletedList={uncompletedList}/>
            
            {/* if there is not uncompletedList, remind custom to check completed list */}
            {!uncompletedList.length && (   
                <p className='todo-item text-center'>No uncompleted list left! Check your completed list!</p>              
            )}

            <button className="btn-add" onClick={() => handleClickAdd()} >Add a new item</button>
            <div>
                <input className="view-completed-items" onClick={() => handleClickCompleted()} type="button" value="View completed items"/>
            </div>
            
        </div>
    )
}

export default ShoppingList

