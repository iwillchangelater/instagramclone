import React from "react";
import { Link } from "react-router-dom";

export default function UserMenuItem({ Icon, Title, to, onClickFun, logout }) {
  if (logout) {
    return (
      <div onClick={() => onClickFun()}>
        <Link to={to} className="w-full px-3 flex gap-2 py-3 hover:bg-gray-100">
          {Icon && <Icon className="w-6" />} <p>{Title}</p>
        </Link>
      </div>
    );
  }
  return (
    <div>
      <Link to={to} className="w-full px-3 flex gap-2 py-3 hover:bg-gray-100">
        {Icon && <Icon className="w-6" />} <p>{Title}</p>
      </Link>
    </div>
  );
}
