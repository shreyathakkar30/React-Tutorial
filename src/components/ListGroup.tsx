//import { Fragment } from "react";

import { useState } from "react";

//import { MouseEvent } from "react";
function ListGroup() {
  const items = [
    "New York",
    "San Francisco",
    "Los Angeles",
    "Seattle",
    "Chicago",
    "London",
    "Paris",
  ];
  //Event handler
  //const handleClick = (event: MouseEvent<HTMLLIElement>) => console.log(event);
  //items = [];//Uncomment this line to see the message when there are no items in the list
  //let selectedIndex = 0;
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // arr[0]; //variable (Selected index)
  //arr[1]; //function to update the variable
  //const [name, setName] = useState("");

  if (items.length === 0) return <p>There are no items in the list</p>;
  return (
    <>
      <h1>List Group</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              console.log(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </> //empty brackets tell react that we are returning multiple elements
  );
}
export default ListGroup;
