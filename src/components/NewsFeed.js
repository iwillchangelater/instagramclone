import React from "react";
import Story from "./Story";
import Posts from "./Posts";
import SideBar from "./SideBar";
export default function NewsFeed() {
  return (
    <div className="w-full">
      <div className="container-900 m-auto">
        {/* story sections */}
        <Story />
        {/* postSections */}
        <div className="container-900 m-auto flex justify-center lg:justify-start ">
          <Posts />
          <SideBar />
        </div>
      </div>
    </div>
  );
}
