import React from 'react'

const ShoppingTable = () => {
    return (
        <div>
            <table className="shopping-table">               
                <tbody>
                    <tr>
                        <td><input className="product-desc" type="checkbox" id="leirvik" name="leirvik"/>
                             <label htmlFor="leirvik">leirvik, 2085</label>
                        </td>
                        <td><img className="product-img" src="/images/leirvik-säng-2085.png" alt="leirvik"/>
                        </td>
                    </tr>
                    <tr>
                        <td><input className="product-desc" type="checkbox" id="leirvik" name="leirvik"/>
                             <label htmlFor="leirvik">leirvik, 2085</label>
                        </td>
                        <td><img className="product-img" src="/images/leirvik-säng-2085.png" alt="leirvik"/>
                        </td>
                    </tr>                   
                 </tbody>
           </table>
        </div>
    )
}

export default ShoppingTable
