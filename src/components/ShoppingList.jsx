import { useContext } from 'react'
import Table from './table/Table'
import { ThemeContext } from "../context/ThemeContext";
import { useNavigate} from "react-router-dom";

const ShoppingList = ({completedList,uncompletedList,toggleItemCompleted}) => {
    const { isHide, hide, noHide, toggleHide } = useContext(ThemeContext)
    const theme = isHide ? hide : noHide
    const navigate = useNavigate();
    const handleClick =()=>{
        navigate('/add')    
    }
    
    return (            
        <div className="list">
            <div id="uncompleted-table">
             {
                uncompletedList.length > 0  &&
                <Table 
                list = {uncompletedList}
                toggleItemCompleted = {toggleItemCompleted}/>
            }
            </div>
            <input className="btn-add" onClick={handleClick} type='button' value='Add a new item'></input>  

            <div className="view">
                <input className="view-uncompleted-items" onClick={toggleHide} type="button" value="View completed items"/>
            </div>
            <div id="completed-table" style={{ display: theme.show }}>
            {
                completedList.length > 0  &&
                <Table 
                list = {completedList}
                toggleItemCompleted = {toggleItemCompleted}/>
            }
            { 
                !uncompletedList.length && (   
                <p className='todo-item text-center'>No uncompleted list! Check your uncompleted list</p>              
            )}
            </div>

           

        </div>
    )    
}

export default ShoppingList
