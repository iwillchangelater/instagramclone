import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import StoryItem from "./StoryItem";
export default function Story() {
  const { storyData } = useContext(UserContext);
  return (
    <div className=" w-full story-container lg:my-4">
      {storyData.map((e) => (
        <StoryItem name={e.User.id} img={e.User.proFileImg} />
      ))}
    </div>
  );
}
