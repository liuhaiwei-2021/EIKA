import React from "react";

const ShoppingCompletedTableRow = ({ completedItem, toggleItemCompleted }) => {
  if (completedItem === undefined) {
    return null;
  }
  const toggle = () => {
    toggleItemCompleted(completedItem.id);
  };
  return (
    <tr key={completedItem.id}>
      <td className="completed-item" onClick={toggle}>
        {completedItem.name}
      </td>
      <td className="completed-item" onClick={toggle}>
        {completedItem.price}
      </td>
      <td>
        <img className="completed-item-img" src={completedItem.img} alt="" />
      </td>
    </tr>
  );
};

export default ShoppingCompletedTableRow;
