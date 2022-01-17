import React from 'react'

const ShoppingTable = ({products}) => {
    return (
        <div>
            <table className="shopping-table">               
                <tbody>
                                     
                        { 
                            products.map((item)=>(
                            <tr key={item.id} > 
                                <td> 
                                    <input className="product-desc" type="checkbox"  name={item.name}/>
                                    <label htmlFor="leirvik">{item.name}, {item.price}</label> </td>
                                <td>
                                    <img className="product-img"  src={item.img} alt={item.name}/>
                                </td>
                            </tr>
                        ))}                                           
                 </tbody>
           </table>
        </div>
    )
}

export default ShoppingTable
