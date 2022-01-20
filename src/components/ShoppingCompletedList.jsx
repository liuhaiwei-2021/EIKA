import React from 'react'
import { useNavigate} from "react-router-dom";
import ShoppingCompletedTable from './ShoppingCompletedTable'

const ShoppingCompletedList = ({completedList,toggleItemCompleted}) => {
    const navigate = useNavigate();
    const handleClickUncompleted = () =>{ 
        navigate('/shoppinglist');    
    }
    return (            
        <div className="shopping-completed-list">
            <h1>Shopping Completed List</h1> 
            {
                completedList.length > 0  &&
                <ShoppingCompletedTable 
                completedList = {completedList}
                toggleItemCompleted = {toggleItemCompleted}/>
            }
            { 
                !completedList.length && (   
                <p className='todo-item text-center'>No completed list! Check your uncompleted list</p>              
            )}
            <div>
                <input className="view-uncompleted-items" onClick={() => handleClickUncompleted()} type="button" value="View uncompleted items"/>
            </div>

        </div>
    )    
}

export default ShoppingCompletedList
