import React from "react";
import { Link } from "react-router-dom";
export default function SugestionsItem() {
  return (
    <div className="flex mb-1">
      <img
        src="https://picsum.photos/100/100"
        className="rounded-full w-10 h-10 flex-shrink-0 mr-3 cursor-pointer self-center"
      />
      <div className="flex flex-col flex-grow justify-center">
        <Link to="/userId" className="font-bold hover:underline text-sm">
          {" "}
          Username{" "}
        </Link>
        <p className="text-sm text-gray-400">Why we sugiest u </p>
      </div>
      <div className="flex-shrink-0 py-5 text-xs text-blue-400 font-bold cursor-pointer">
        Switch
      </div>
    </div>
  );
}
