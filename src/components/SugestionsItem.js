import React from "react";
import { Link } from "react-router-dom";
export default function SugestionsItem(props) {
  return (
    <div className="flex mb-1">
      <img
        src={`${props.img}`}
        className="rounded-full w-10 h-10 flex-shrink-0 mr-3 cursor-pointer self-center"
        alt="zurag"
      />
      <div className="flex flex-col flex-grow justify-center">
        <Link to="/userId" className="font-bold hover:underline text-sm">
          {props.name}
        </Link>
        <p className="text-sm text-gray-400"> {props.reason} </p>
      </div>
      <div className="flex-shrink-0 py-5 text-xs text-blue-400 font-bold cursor-pointer">
        follow
      </div>
    </div>
  );
}
