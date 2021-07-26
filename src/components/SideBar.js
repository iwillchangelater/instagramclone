import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Sugestions from "./Sugestions";
import Footer from "./Footer";
import UserContext from "../context/UserContext";
export default function SideBar() {
  const { userData, suggestionsData } = useContext(UserContext);
  return (
    <div className=" sidebar sticky h-10 top-16 z-40 px-6 mt-10 min-h-max ">
      <div className="flex mb-4">
        <img
          src="https://picsum.photos/100/100"
          className="rounded-full w-14 flex-shrink-0 mr-3 cursor-pointer"
          alt="zurag"
        />
        <div className="flex flex-col flex-grow justify-center">
          <Link to="/userId" className="font-bold hover:underline text-sm">
            {userData.fullName}
          </Link>
          <p className="text-sm text-gray-400">{userData.username}</p>
        </div>
        <div className="flex-shrink-0 py-5 text-xs text-blue-400 font-bold cursor-pointer">
          Switch
        </div>
      </div>
      {/* suggetions for you */}
      <div className="flex justify-between font-semibold mb-3 text-sm">
        <p className="text-gray-400">Suggestions For You</p> <p>See All</p>
      </div>
      <Sugestions data={suggestionsData} />
      <Footer />
    </div>
  );
}
