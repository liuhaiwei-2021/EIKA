import React from "react";
import { useNavigate } from "react-router-dom";
import ShoppingTable from "./ShoppingTable";

// This component has a duplication conflic with ShoppingCompletedList, any error mention here, applies to the other
// This component has some overlaps on hierarchy with the ShoppingListTable
const ShoppingList = ({ toggleItemCompleted, uncompletedList }) => {
  const navigate = useNavigate();
  const handleClickAdd = () => {
    navigate("/add");
  };
  const handleClickCompleted = () => {
    navigate("/shoppinglist-completed");
  };

  return (
    <div className="shopping-list">
      <ShoppingTable
        toggleItemCompleted={toggleItemCompleted}
        uncompletedList={uncompletedList}
      />

      {/* This comment is not needed, the text below explains it well */}
      {/* if there is not uncompletedList, remind custom to check completed list */}
      {!uncompletedList.length && (
        <p className="todo-item text-center">
          No uncompleted list left! Check your completed list!
        </p>
      )}

      <button className="btn-add" onClick={() => handleClickAdd()}>
        Add a new item
      </button>

      {/* HTML tag nesting -1 */}
      {/* No need to wrap the inout into a div, it serves no purpose */}
      <div>
        <input
          className="view-completed-items"
          onClick={() => handleClickCompleted()}
          type="button"
          value="View completed items"
        />
      </div>
    </div>
  );
};

export default ShoppingList;
