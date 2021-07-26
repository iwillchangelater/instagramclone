import React from "react";
import { Link } from "react-router-dom";
import { DotsHorizontalIcon } from "@heroicons/react/solid";
import PostImage from "./PostImage";
import PostDetails from "./PostDetails";
export default function Post(props) {
  return (
    <div className="Post ml-16 ">
      {/* header */}
      <div className="w-full flex items-center justify-between px-3 ">
        <div className="h-14 flex items-center">
          <img
            src={props.img}
            className=" object-center h-10 w-10 rounded-full mr-3 cursor-pointer"
            alt="zurag"
          />
          <Link
            to={`/${props.user.id}`}
            className="text-xs font-bold hover:underline"
          >
            {props.user.username}
          </Link>
        </div>
        <div className=" w-5 mr-2 cursor-pointer">
          <DotsHorizontalIcon />
        </div>
      </div>
      {/* img  */}
      <PostImage imgsrc={props.postimg} />
      <PostDetails
        comment={props.comment}
        date={props.date}
        likes={props.likes}
      />
    </div>
  );
}
