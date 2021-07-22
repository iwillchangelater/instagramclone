import React from "react";
import { Link } from "react-router-dom";
import logo from "../source/instagram.png";
import { SearchIcon, FireIcon, UserIcon } from "@heroicons/react/solid";
import { ChatIcon, HomeIcon, HeartIcon } from "@heroicons/react/outline";
export default function NavBar() {
  return (
    <div className="navbar sticky top-0 h-14 w-screen flex justify-between items-center bg-white border-solid border-b border-gray-300">
      <Link className="m-3" to="/home">
        <img src={logo} alt="logo" className="h-10" />
      </Link>

      {/* login hiisen eshiig shalgaad haruuldag heseg */}
      <div className="hidden">
        <div className="flex">
          <div className="flex items-center w-48 rounded-md border  border-gray-200 bg-gray-100 py-1 overflow-hidden">
            <div className="relative">
              <SearchIcon className="w-4 h-4 text-gray-500 " />
            </div>
            <input
              type="text"
              className=" w-full outline-none flex-shrink flex-grow bg-transparent"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="flex gap-4">
          <HomeIcon className="w-8 h-8 cursor-pointer" />
          <ChatIcon className="w-8 h-8 cursor-pointer" />
          <FireIcon className="w-8 h-8 cursor-pointer" />
          <HeartIcon className="w-8 h-8 cursor-pointer" />
          {<UserIcon className="w-8 h-8 cursor-pointer" />}
        </div>
      </div>
    </div>
  );
}