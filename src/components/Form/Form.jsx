import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../redux/actions";

const Form = () => {
  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault()
    console.log(e.target.text.value);
    dispatch(addTask(e.target.text.value))
  };
  return (
    <form onSubmit={submit} className="head__input">
      <input
        type="text"
        name="text"
        className="head__input"
        placeholder="Назва таску"
      />
      <button type="submit" className="head__send">
        Додати
      </button>
    </form>
  );
};

export default Form;
