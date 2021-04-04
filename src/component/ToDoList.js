import PropTypes from "prop-types";
import { List } from "./List";

export function ToDoList({ items ,setItems}) {
  return (
    <div>
      {items && (
        <ul>
          {items.map((item) => (
            <List item={item} items={items} setItems={setItems} />
          ))}
        </ul>
      )}
    </div>
  );
}

ToDoList.propTypes={
  items: PropTypes.shape({
    text:PropTypes.string,
    completed: PropTypes.bool,
  }),
  setItems: PropTypes.func,
}