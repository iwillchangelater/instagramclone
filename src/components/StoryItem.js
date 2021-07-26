import React from "react";

export default function StoryItem(props) {
  return (
    <div className="cursor-pointer mx-2">
      <img
        src={`${props.img}`}
        className=" rounded-full ring-1 p-1 w-24"
        alt="profile img"
      />
      <p className="text-sm font-light">{props.name}</p>
    </div>
  );
}
