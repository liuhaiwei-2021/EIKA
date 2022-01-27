import React,{useState} from 'react';


const TableRow = ({item,toggleItemCompleted}) => {

    const [checked, setChecked] = useState(false);

    if(item === undefined) {return null}
    const toggle = () => {
        toggleItemCompleted(item.id)
    }
    return (      
            <tr>
                <td className={item.completed ? "completed" : "uncompleted"}><input  checked={item.completed ? true : false} onChange={() => setChecked(!checked)} onClick={toggle}  id="item-name" type="checkbox"/><label htmlFor="item-name"></label>{item.name}</td>
                <td className={item.completed  ? "completed" : "uncompleted"}onClick={toggle}>{item.price}</td>
                <td><i className="fas fa-camera"></i></td>
            </tr>     
    )
}

export default TableRow
