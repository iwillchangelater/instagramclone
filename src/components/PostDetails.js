import React from "react";
import PostDescription from "./PostDescription";
import PostReact from "./PostReact";
export default function PostDetails() {
  return (
    <div className="px-2">
      <PostReact />
      <PostDescription />
    </div>
  );
}
