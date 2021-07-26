import React from "react";
import NavBar from "../components/NavBar";
import NewsFeed from "../components/NewsFeed";
export default function Home() {
  return (
    <div className="w-full">
      <NavBar />
      {/* main section  */}
      <div className="w-full ">
        {/* newsfeed */}
        <NewsFeed />
        {/* side bar lg */}
      </div>
    </div>
  );
}
