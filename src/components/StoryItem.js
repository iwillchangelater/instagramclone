import React from "react";

export default function StoryItem() {
  return (
    <div className="cursor-pointer mx-2">
      <img
        src="https://picsum.photos/100/100"
        className=" rounded-full ring-1 p-1 w-24"
        alt="profile img"
      />
      <p className="text-sm font-light">UserName</p>
    </div>
  );
}
