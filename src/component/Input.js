import React, { useState } from "react";
import { ToDoList } from "./ToDoList";
import { List } from "./List";

export function Input() {
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);
  // const [completedItems, setCompletedItems] = useState([]);
  // const [unCompletedItems, setUnCompletedItems] = useState([]);


  return (
    <div>
      <div className="flex">
        <div className="input-bar">
          <label>
            Work:
            <input
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            ></input>
            {/* {console.log(value)} */}
            <button
              onClick={() => {
                setItems([...items, { text: value, completed: false }]);
                setValue("");
              }}
            >
              <i className="fas fa-plus"></i>
            </button>
          </label>
        </div>
        <div>
          <select name="todo-status" id="todo-status">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="incompleted">Incompleted</option>
          </select>
        </div>
      </div>
      <ToDoList items={items} setItems={setItems} />
    </div>
  );
}
