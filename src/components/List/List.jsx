import React from "react";
import { useSelector } from "react-redux";

const List = () => {
  const tasks = useSelector((state) => state.tasks)
  console.log(tasks);

//   return (
//     <ul className="list__list">
//       {tasks.map((element) => {
//         return (
//           <li className="list__item">
//             <input type="checkbox" className="list__input" />
//             <p className="list__text">{element.text}</p>
//           </li>
//         );
//       })}
//     </ul>
//   );


return <ul className="list">
    {console.log(tasks)}
    {/* {tasks.map((element) => {
        return <li className="list__item">
        <p className="">{element.text}</p>
    </li>
    })} */}
</ul>
};

export default List;
