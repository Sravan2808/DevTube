import React from "react";
import Button from "./Button";
const ButtonList = () => {
  const list = [
    "All",
    "Gaming",
    "Songs",
    "Live",
    "Soccer",
    "Cricket",
    "Cooking",
    "News",
  ];
  return (
    <div className="flex px-10">
      {list.map((items, index) => (
        <Button key={index} name={items} />
      ))}
    </div>
  );
};

export default ButtonList;
