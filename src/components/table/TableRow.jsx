import React,{useState} from 'react';


const TableRow = ({item,toggleItemCompleted}) => {

    const [checked, setChecked] = useState(false);

    if(item === undefined) {return null}
    const toggle = () => {
        toggleItemCompleted(item.id)
    }
    return (      
            <tr>
                <td><input className={checked ? "completed" : "uncompleted"} checked={checked} onChange={() => setChecked(!checked)} onClick={toggle}  id="item-name" type="checkbox"/><label  htmlFor="item-name"></label>{item.name}</td>
                <td onClick={toggle}>{item.price}</td>
                <td><i className="fas fa-camera"></i></td>
            </tr>     
    )
}

export default TableRow
