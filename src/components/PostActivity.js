import React from "react";
import { HeartIcon } from "@heroicons/react/outline";
export default function PostActivity() {
  return (
    <div className="z-40 absolute h-max w-96 top-12 bg-white shadow-lg rounded-md -right-10">
      <div className="w-full pt-20 text-center font-light px-6">
        <HeartIcon className="w-24 border-4 border-black m-auto rounded-full mb-10" />
        <p className="mb-4">Activity on your post</p>
        <p className="mb-6">
          When someone likes or comments on of your posts you'll see it here.
        </p>
      </div>
    </div>
  );
}
