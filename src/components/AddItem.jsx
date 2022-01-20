import React from "react";
import { useRef, useState } from "react";
import { useNavigate} from "react-router-dom";


const AddItem = ({ addItem }) => {
  const inputRef = useRef();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const navigate = useNavigate();
  // handle submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    const nameStr = name.replace(/(^\s*)|(\s*$)/g, '')
    
    if (nameStr === '' || nameStr === undefined || nameStr === null) {
      alert("Please add your name"); 
    } else {
      setName(nameStr);  
      console.log(name)   
      inputRef.current.focus();
    }
    const priceStr = price.replace(/(^\s*)|(\s*$)/g, '')
    if (priceStr === '' || priceStr === undefined || priceStr === null) {
      alert("Please add your price"); 
    } else {
      setPrice(nameStr);     
      inputRef.current.focus();
    }
    addItem({name,price});
    if(name && price){
      navigate('/shoppinglist');
    }else{
      navigate('/add');
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
            type='text'
            placeholder='Please add your price'
            ref={inputRef}
            value={price}
            onChange={(e) => setPrice(e.target.value)}></input>
          <input type='submit' value='ADD'></input>       
      </form>
    </div>
  );
};

export default AddItem;



