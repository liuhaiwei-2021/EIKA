import React from "react";
import { useRef, useState } from "react";


const AddItem = ({ addItem }) => {
  const inputRef = useRef();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState(undefined);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== "" && price.trim() !== "") {
      setName(name);
      setName("");
      setPrice(price)
      setPrice("");
      inputRef.current.focus();
    } else {
      alert("Please add your name")
    }
    addItem({name,price})
    // window.location.replace("http://localhost:3000/shoppinglist")
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
        { <small>{error}</small> }
      </form>
    </div>
  );
};

export default AddItem;



