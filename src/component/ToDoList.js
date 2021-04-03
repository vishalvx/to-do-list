// import { useState } from "react";

export function ToDoList({ items }) {
  return (
    <div>
      {items && (
        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
