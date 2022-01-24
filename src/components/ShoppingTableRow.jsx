import React from "react";

const ShoppingTableRow = ({ uncompletedItem, toggleItemCompleted }) => {
  const toggle = () => {
    toggleItemCompleted(uncompletedItem.id);
  };

  return (
    <tr>
      <td>
        {/* You can wrap the label around the input to avoid the old htmlFor parameter */}
        <input
          className="item-name"
          onClick={toggle}
          defaultChecked={uncompletedItem.completed ? "checked" : ""}
          id="item-name"
          type="checkbox"
        />
        <label
          className={uncompletedItem.completed ? "completed" : ""}
          htmlFor="item-name"
        >
          {uncompletedItem.name}
        </label>
      </td>
      <td
        onClick={toggle}
        className={uncompletedItem.completed ? "completed" : ""}
      >
        {uncompletedItem.price}
      </td>
      <td>
        <i className="fas fa-camera"></i>
      </td>
    </tr>
  );
};

export default ShoppingTableRow;
