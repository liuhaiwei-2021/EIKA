import React from "react";
import { useRef, useState } from "react";
import { useNavigate} from "react-router-dom";


const AddItem = ({ addItem }) => {
  const inputRef = useRef();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();
  
  // handle submit function
  const handleSubmit = (e,form) => {
    e.preventDefault(); 

    if (name === '' || name === undefined || name === null) {
      alert("Please add your name");
      return false;
    } else if (price === '' || price === undefined || price === null) {
      alert("Please add your price");
      return false;
    }else if (price <= 0){ 
      alert("Price should be a postive number")
      return false;
    } else {
        addItem({name,price});
        navigate('/shoppinglist');    
    }  
  };

  return (
    <div className='add-item'>
      <form className='add-item-form' onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Please add your name'
            ref={inputRef}
            value={name}
            onChange={(e) => setName(e.target.value)}></input>
            <input
            type='number'
            placeholder='Please add your price'
            ref={inputRef}
            value={price}
            onChange={(e) => setPrice(e.target.value)}></input>
          <input className="btn-add" type='submit' value='ADD'></input>       
      </form>
    </div>
  );
};

export default AddItem;



