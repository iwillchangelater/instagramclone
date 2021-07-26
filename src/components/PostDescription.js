import React from "react";
import { Link } from "react-router-dom";
import FocusedPost from "./FocusedPost";
import PostComment from "./PostComment";
export default function PostDescription({ comment, date }) {
  return (
    <div>
      <p className="text-sm font-bold inline">username </p>
      <div className="text-gray-400 inline">.... more</div>
      <Link
        to="/home/p/postid"
        className="block text-gray-400 text-sm"
        compoent={FocusedPost}
      >
        View all {comment[0].total} comments
      </Link>
      <PostComment comment={comment} />
      <p className="text-xs mt-3 text-gray-300 mb-3">{date}</p>
    </div>
  );
}
