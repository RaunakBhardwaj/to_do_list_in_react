import React, { useState } from "react";
import ToDo_List from "./ToDo_List";

const ToDo_Funtion = () => {
  const [inputList, setInputlist] = useState("");
  const [items, setItems] = useState([]);
  const [error, setError] = useState(""); // State for error messages

  // Handle input change
  const itemEvent = (event) => {
    setInputlist(event.target.value);
    setError(""); // Clear error when user types
  };

  // Add item to list with validation
  const listOfItem = () => {
    if (inputList.trim() === "") {
      setError("⚠️ Please enter a valid item!"); // Prevent empty items
      return;
    }

    if (items.includes(inputList)) {
      setError("⚠️ This item already exists!"); // Prevent duplicates
      return;
    }

    setItems((prevItems) => [...prevItems, inputList]);
    setInputlist("");
    setError(""); // Clear error after successful addition
  };

  // Delete item from list
  const delete_items = (id) => {
    setItems((oldItems) => oldItems.filter((_, index) => index !== id));
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h2>To Do List</h2>
          {/* <Typography variant="h8">Create your shopping list with us</Typography> */}
          <input
            type="text"
            placeholder="Add your item here"
            value={inputList}
            onChange={itemEvent}
          />
          <button onClick={listOfItem}>+</button>
          {/* Show error message if validation fails */}
          {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}

          <div className="hr">
            <hr />
          </div>
          <div className="num_list">
            <ol>
              {/* <li>{inputList}</li> */}
              {items.map((itemVal, index) => (
                // we use map funtion for new arr which provides current value
                <ToDo_List
                  key={index}
                  id={index}
                  text={`${index + 1}. ${itemVal}`} // Adding numbers before item
                  onSelect={delete_items}
                />
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDo_Funtion;
