import React from "react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddItem = ({ addItem }) => {
  const inputRef = useRef();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  // handle submit function
  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || name === undefined || name === null) {
      alert("Please add your name");
    }
    if (price === "" || price === undefined || price === null) {
      alert("Please add your price");
    }
    if ((name.length > 0) & (price.length > 0)) {
      addItem({ name, price });
      navigate("/shoppinglist");
    } else {
      alert("Check your input");
    }
  };

  return (
    <div className="add-item">
      <form className="add-item-form" onSubmit={handleSubmit}>
        {/* You don't need to close the input like this: <input></input> */}
        {/* But like this: <input /> (self closing tag) */}
        <input
          type="text"
          placeholder="Please add your name"
          ref={inputRef}
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="number"
          placeholder="Please add your price"
          ref={inputRef}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        ></input>
        <input className="btn-add" type="submit" value="ADD"></input>
      </form>
    </div>
  );
};

export default AddItem;
