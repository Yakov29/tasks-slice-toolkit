import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Head = () => {
  const value = useSelector((state) => state.tasks);
  const dispatch = useDispatch();


  const activeTasks = value.length




  return (
    <section className="head">
      <h3 className="head__title">Tasks</h3>
      <p className="head__data">Active : {activeTasks}</p>
      <p className="head__data">Completed : 3</p>
    
    </section>
  );
};

export default Head;
