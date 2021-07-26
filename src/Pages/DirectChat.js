import React from "react";
import { ChevronDownIcon, PencilAltIcon } from "@heroicons/react/outline";
import ChatArea from "../components/ChatArea";

import NavBar from "../components/NavBar";
import ChatFriends from "../components/ChatFriends";

export default function DirectChat() {
  return (
    <div className="bg-gray-50 h-screen w-full">
      <NavBar />
      <div className="chat lg:mt-10">
        <div className="chat-user border-r ">
          <div className="flex justify-between p-3 border-b border-solid border-gray-400">
            <div></div>
            <p className="inline-flex text-xl">
              Username <ChevronDownIcon className="w-5 ml-2" />
            </p>
            <PencilAltIcon className="w-8" />
          </div>
          <div>
            <div className="flex justify-between px-4 py-1">
              <p className="font-semibold">Messages</p>
              <div className="text-blue-400 font-semibold">1 Request</div>
            </div>
            <ChatFriends />
          </div>
        </div>
        <div className="flex-grow">
          <ChatArea />
        </div>
      </div>
    </div>
  );
}
