import React from "react";
import { Link } from "react-router-dom";
import FocusedPost from "./FocusedPost";
import PostComment from "./PostComment";
export default function PostDescription() {
  return (
    <div>
      <p className="text-sm font-bold inline">username </p>
      <div className="text-gray-400 inline">.... more</div>
      <Link
        to="/home/p/postid"
        className="block text-gray-400 text-sm"
        compoent={FocusedPost}
      >
        View all 25 comments
      </Link>
      <PostComment />
      <p className="text-xs mt-3 text-gray-300 mb-3">2 days ago</p>
    </div>
  );
}
