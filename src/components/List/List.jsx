import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTask } from "../../redux/actions";

const List = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <ul className="list__list">
      {tasks.map((element) => (
        <li className="list__item" key={element.id}>
          <input type="checkbox" className="list__input" checked={element.completed} readOnly />
          <p className="list__text">{element.text}</p>
          <button
            className="list__remove"
            onClick={() => dispatch(removeTask(element.id))}
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
};

export default List;
