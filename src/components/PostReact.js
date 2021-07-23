import React from "react";
import {
  HeartIcon,
  ChatIcon,
  PaperAirplaneIcon,
  BookmarkIcon,
} from "@heroicons/react/outline";

export default function PostReact() {
  return (
    <div>
      <div className="flex justify-between my-2">
        <div className="flex gap-3">
          <HeartIcon className=" w-8" />
          <ChatIcon className=" w-8" />
          <PaperAirplaneIcon className=" w-8 " />
        </div>
        <div>
          <BookmarkIcon className=" w-8" />
        </div>
      </div>
      <div className="font-bold">2,454 likes</div>
    </div>
  );
}
