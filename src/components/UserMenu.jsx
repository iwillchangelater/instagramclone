import React, { useContext } from "react";
import {
  UserCircleIcon,
  BookmarkIcon,
  CogIcon,
  SwitchHorizontalIcon,
} from "@heroicons/react/outline";
import UserMenuItem from "./UserMenuItem";
import UserContext from "../context/UserContext";
export default function UserMenu() {
  const { logout } = useContext(UserContext);

  return (
    <div className="z-40 absolute h-max w-60 top-12 bg-white shadow-lg rounded-md -right-4">
      <div className=" absolute arrow right-16 -top-3 transform rotate-45 shadow-xl bg-white z-30" />
      <div className="w-full">
        <UserMenuItem Icon={UserCircleIcon} Title={"Profile"} to="/userid" />
        <UserMenuItem Icon={BookmarkIcon} Title={"Saved"} to="/userid/saved" />
        <UserMenuItem Icon={CogIcon} Title={"Settings"} to="/userid" />
        <UserMenuItem Icon={SwitchHorizontalIcon} Title={"Switch account"} />
        <hr />
        <UserMenuItem Title={"Logout"} logout={true} onClickFun={logout} />
      </div>
    </div>
  );
}
