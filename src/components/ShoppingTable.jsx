import React from 'react'

const ShoppingTable = ({list}) => {
    return (
        <div>
            <table className="shopping-table">               
                <tbody>
                                     
                        { list &&
                            list.map((item)=>(
                            <tr key={item.id} > 
                                <td> 
                                    <input className="product-desc" type="checkbox"  name={item.name}/>
                                    <label htmlFor="leirvik">{item.name}, {item.price}</label> </td>
                                <td>
                                    <img className="product-img"  src={item.img} />
                                </td>
                            </tr>
                        ))}                                           
                 </tbody>
           </table>
        </div>
    )
}

export default ShoppingTable
