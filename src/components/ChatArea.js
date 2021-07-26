import React from "react";
import { PaperAirplaneIcon } from "@heroicons/react/outline";
export default function ChatArea() {
  return (
    <div className="flex w-full flex-col items-center px-5 pt-20">
      <PaperAirplaneIcon className="w-24 border border-black p-3 rounded-full " />
      <p className="text-2xl font-light">Your Messages</p>
      <p className="text-sm text-gray-400 mb-4">
        Send private photos and messages to a friend or group
      </p>
      <div className=" bg-blue-700 opacity-90 text-white rounded-sm px-2 py-1">
        Send Message
      </div>
    </div>
  );
}
