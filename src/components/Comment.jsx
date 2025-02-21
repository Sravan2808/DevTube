import React from "react";
import { IconCircleCheckFilled } from "@tabler/icons-react";
const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex p-2 rounded-lg my-2 ">
      <img
        className="w-12 h-12 "
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="user"
      />
      <div className="px-3">
        <p className="font-bold flex gap-1">
          {name}
          <IconCircleCheckFilled className="text-gray-500 " />
        </p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
