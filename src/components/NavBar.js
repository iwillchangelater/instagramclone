import React, { useContext, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../source/instagram.png";
import { SearchIcon, FireIcon, UserIcon } from "@heroicons/react/solid";
import { ChatIcon, HomeIcon, HeartIcon } from "@heroicons/react/outline";
import ClickOutsideHandler from "../utilities/ClickOutsideHandler";
import UserMenu from "./UserMenu";
import PostActivity from "./PostActivity";
import UserContext from "../context/UserContext";
export default function NavBar() {
  const [userMenuStatus, setUserMenuStatus] = useState(false);
  const [heart, setHeart] = useState(false);
  const ref = useRef();
  const ref1 = useRef();
  ClickOutsideHandler(ref, () => {
    if (userMenuStatus) setUserMenuStatus(!userMenuStatus);
  });
  ClickOutsideHandler(ref1, () => {
    if (heart) setHeart(!heart);
  });
  return (
    <div className="navbar-container z-50 ">
      <div className="navbar-content m-auto px-3">
        <Link className="m-2" to="/home">
          <img src={logo} alt="logo" className="h-10" />
        </Link>

        {/* login hiisen eshiig shalgaad haruuldag heseg */}
        <div className="flex">
          <div className=" hidden sm:flex items-center w-48 rounded-md border  border-gray-200 bg-gray-100 py-1 overflow-hidden">
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
          <NavLink to="/home" activeClassName=" bg-gray-300 rounded-xl">
            <HomeIcon className="w-8 h-8 cursor-pointer" />
          </NavLink>
          <NavLink to="/direct/inbox" activeClassName=" bg-gray-300 rounded-xl">
            <ChatIcon className="w-8 h-8 cursor-pointer" />
          </NavLink>
          <NavLink to="/explore" activeClassName=" bg-gray-300 rounded-xl">
            <FireIcon className="w-8 h-8 cursor-pointer" />
          </NavLink>
          <div className="relative" ref={ref1}>
            <HeartIcon
              className="w-8 h-8 cursor-pointer"
              onClick={() => {
                setHeart(!heart);
              }}
            />
            {heart && <PostActivity />}
          </div>
          <div className="relative" ref={ref}>
            <UserIcon
              className="w-8 h-8 cursor-pointer"
              onClick={() => {
                setUserMenuStatus(!userMenuStatus);
              }}
            />
            {userMenuStatus && <UserMenu />}
          </div>
        </div>
      </div>
    </div>
  );
}
