import React from "react";
import { UserCircleIcon } from "@heroicons/react/outline";
export default function UserTagged(props) {
  return (
    <div>
      {/* data bhgui togioldold */}
      {
        <div className="w-full text-center pt-20 pb-28">
          <UserCircleIcon className=" w-16 m-auto" />
          <p className="text-2xl font-light ">Photos of you</p>
          <p className=" font-light">
            When people you in photos, they'll appear here.
          </p>
        </div>
      }
    </div>
  );
}
