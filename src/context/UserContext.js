import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  initFollowers,
  initFollowing,
  initPost,
  initStory,
  initSuggestions,
  initUser,
} from "../source/mockData";
const UserContext = React.createContext();

export const UserProvider = (props) => {
  const token = localStorage.getItem("toke");
  const [userData, setUserData] = useState(initUser);
  const [postData, setPostData] = useState(initPost);
  const [storyData, setStoryData] = useState(initStory);
  const [suggestionsData, setSuggestionsData] = useState(initSuggestions);
  const [followersData, setFollowersData] = useState(initFollowers);
  const [followingData, setFollowingData] = useState(initFollowing);
  const history = useHistory();
  const logout = () => {
    localStorage.removeItem("token");
    history.replace("/");
  };
  return (
    <UserContext.Provider
      value={{ logout, userData, postData, storyData, suggestionsData }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
export default UserContext;
