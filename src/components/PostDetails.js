import React from "react";
import PostDescription from "./PostDescription";
import PostReact from "./PostReact";
export default function PostDetails(props) {
  return (
    <div className="px-2">
      <PostReact likes={props.likes} />
      <PostDescription comment={props.comment} />
    </div>
  );
}
