import React from "react";
import NavBar from "../components/NavBar";
import NewsFeed from "../components/NewsFeed";
export default function Home() {
  return (
    <div>
      <NavBar />
      {/* main section  */}
      <div className="w-screen">
        {/* newsfeed */}
        <NewsFeed />
        {/* side bar lg */}
      </div>
    </div>
  );
}
