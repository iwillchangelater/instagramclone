import React from "react";
import { Link } from "react-router-dom";
import { HeartIcon } from "@heroicons/react/outline";
export default function PostComment() {
  return (
    <div className="text-sm">
      <div className="flex justify-between">
        <div className="flex">
          <Link to="/userid" className="font-bold mr-2 hover:underline">
            username
          </Link>
          <p>comment section</p>
        </div>
        <HeartIcon className="w-8 pr-4" />
      </div>
      <div className="flex justify-between">
        <div className="flex">
          <Link to="/userid" className="font-bold mr-2  hover:underline">
            username2
          </Link>
          <p>comment section 2</p>
        </div>
        <HeartIcon className="w-8 pr-4" />
      </div>
    </div>
  );
}
