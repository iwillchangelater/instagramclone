import React from "react";
import { Link } from "react-router-dom";
import { DotsHorizontalIcon } from "@heroicons/react/solid";
import PostImage from "./PostImage";
import PostDetails from "./PostDetails";
export default function Post() {
  return (
    <div className="Post ml-16 ">
      {/* header */}
      <div className="w-full flex items-center justify-between px-3 ">
        <div className="h-14 flex items-center">
          <img
            src="https://picsum.photos/200/300"
            className=" object-center h-10 w-10 rounded-full mr-3 cursor-pointer"
          />
          <Link to="/userid" className="text-xs font-bold hover:underline">
            {" "}
            User Name
          </Link>
        </div>
        <div className=" w-5 mr-2 cursor-pointer">
          <DotsHorizontalIcon />
        </div>
      </div>
      {/* img  */}
      <PostImage />
      <PostDetails />
    </div>
  );
}
