import React, { useState, useEffect } from "react";
import { ToDoList } from "./ToDoList";
import { List } from "./List";

export function Input() {
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);
  // const [completedItems, setCompletedItems] = useState([]);
  // const [incompletedItems, setIncompletedItems] = useState([]);
  const [status, setStatus] = useState("");

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
          <select
            onChange={(e) => {
              setStatus(e.target.value);
            }}
            name="todo-status"
            id="todo-status"
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="incompleted">Incompleted</option>
          </select>
        </div>
      </div>
      {/* {() => {
        <h1>helloworld</h1>
        if (status === "completed") {
          items.map((item) => {
            if (item.completed === true) {
              setCompletedItems([...completedItems, item]);
            }
          });
          <ToDoList items={completedItems} setItems={setCompletedItems} />;
        } else if (status === "incompleted") {
          items.map((item) => {
            if (item.completed === false) {
              setIncompletedItems([...incompletedItems, item]);
            }
          });
          <ToDoList items={incompletedItems} setItems={setIncompletedItems} />;
        }
        else{
          <ToDoList items={items} setItems={setItems} />;
        }
      }} */}
      {/* {()=>{
        switch (status) {
          case "completed":
            items.map((item) => {
              if (item.completed === true) {
                setCompletedItems([...completedItems, item]);
              }
            });
            <ToDoList items={completedItems} setItems={setCompletedItems} />;
            break;
            case "incompleted":
              items.map((item) => {
                if (item.completed === false) {
                  setIncompletedItems([...incompletedItems, item]);
                }
              });
              <ToDoList items={incompletedItems} setItems={setIncompletedItems} />;
              break;
          default:
            <ToDoList items={items} setItems={setItems} />;
            break;
        }
      }} */}
      <ToDoList items={items} setItems={setItems} />;
    </div>
  );
}
