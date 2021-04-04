import PropTypes from "prop-types";

export function List({ item, items, setItems }) {
  const deleteElement = () => {
    setItems(items.filter((ele) => ele.text !== item.text));
  };
  const setCompleted = () => {
    setItems(items.filter((ele) => (ele.completed = true)));
    setItems(items.filter((ele) => ele.text !== item.text));
    // console.log(item);
  };
  return (
    <div className="flex">
      <li key={item.text}>{item.text}</li>
      <button onClick={setCompleted}>
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteElement}>
        <i className="fas fa-trash-alt"></i>
      </button>
    </div>
  );
}
List.propTypes = {
  items: PropTypes.shape({
    text: PropTypes.string,
    completed: PropTypes.bool,
  }),
};
