import React from "react";
import { useRef, useState } from "react";
import { useNavigate} from "react-router-dom";


const AddItem = ({ addItem }) => {
  const inputRef = useRef();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState(undefined);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== "" && price.trim() !== "") {
      setName(name);     
      setPrice(price);
      inputRef.current.focus();
    } else {
      alert("Please add your name");
    }
    addItem({name,price});
    setName("");
    setPrice("");
    navigate('/shoppinglist')
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



