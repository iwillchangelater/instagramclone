import React from "react";
import { Link } from "react-router-dom";

export default function ChatFriendItem() {
  return (
    <div className="flex items-center px-2 my-2">
      <Link to="/userid">
        <img
          src="https://picsum.photos/200?random=3"
          className="w-12 h-12 rounded-full mr-3 cursor-pointer "
          alt="zurag"
        />
      </Link>
      <div>
        <Link to="/userid" className="hover:underline font-semibold">
          UserName
        </Link>
        <p> Last messages iluu garwal ...</p>
      </div>
    </div>
  );
}
