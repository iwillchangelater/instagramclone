import React, { useContext } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import userImg from "../source/user.jpg";
import {
  ViewGridIcon,
  BookmarkIcon,
  VideoCameraIcon,
  LinkIcon,
  CogIcon,
} from "@heroicons/react/outline";
import { NavLink, Switch, Route } from "react-router-dom";
import UserNewsFeed from "../components/UserNewsFeed";
import UserDescription from "../components/UserDescription";
import UserIgtv from "../components/UserIgtv";
import UserSaved from "../components/UserSaved";
import UserTagged from "../components/UserTagged";
import UserContext from "../context/UserContext";
export default function User() {
  const { userData } = useContext(UserContext);
  return (
    <div className="w-screen">
      <NavBar />
      {/* user info */}
      <div className="container-900 m-auto">
        <div className="flex w-full md:gap-10">
          <div className="w-3/12 inline-block md:bg-black md:w-44 rounded-full m-4">
            <img
              src={userData.proFileImg || userImg}
              alt="profile"
              className=" rounded-full"
            />
          </div>
          <div className="w-full mt-5">
            <div className="flex md:inline-flex w-full">
              <p className="text-2xl py-1 max-w-max w-8/12"> User Full Name </p>
              <div className=" hidden sm:block">
                <p className="font-semibold border p-1 my-1 ml-4">
                  Edit Profile
                </p>
              </div>
              <CogIcon className=" ml-3 w-12" />
            </div>

            <div className="sm:hidden w-11/12 text-center border border-solid mr10 ">
              <p>Edit Profile</p>
            </div>

            <div className="hidden sm:flex gap-10 mb-4">
              <p>
                <span className="font-bold">{userData.post || 0}</span> Posts
              </p>
              <p>
                <span className="font-bold">{userData.followers || 0}</span>{" "}
                followers
              </p>
              <p>
                <span className="font-bold">{userData.following || 0}</span>{" "}
                following
              </p>
            </div>
            <UserDescription bio={userData.Bio} />
          </div>
        </div>
        {/* sm uyd haragdah post followers iin status */}
        <div className="sm:hidden flex justify-evenly border-t py-2">
          <p className="text-center text-gray-300">
            <span className="font-bold block text-black">0</span> Posts
          </p>
          {/* click able */}
          <p className="text-center text-gray-300 cursor-pointer">
            <span className="font-bold block text-black">123</span> followers
          </p>
          <p className="text-center text-gray-300 cursor-pointer">
            <span className="font-bold block text-black">12345</span> following
          </p>
        </div>
        {/* navlink heseg */}
        <div className="flex justify-evenly border-t border-b border-solid py-2 sm:border-b-0 sm:p-0">
          <NavLink
            to="/userid/"
            exact
            className="flex pt-2"
            activeClassName=" text-blue-400 sm:text-black border-black border-solid sm:border-t "
          >
            <ViewGridIcon className="w-8 sm:w-5" />
            <p className="hidden sm:block uppercase"> post</p>
          </NavLink>
          <NavLink
            className="flex pt-2"
            to="/userid/channel"
            activeClassName=" text-blue-400 sm:text-black border-black border-solid sm:border-t "
          >
            <VideoCameraIcon className="w-8 sm:w-5" />
            <p className="hidden sm:block uppercase"> igtv</p>
          </NavLink>
          <NavLink
            className="flex pt-2"
            to="/userid/saved"
            activeClassName=" text-blue-400 sm:text-black border-black border-solid sm:border-t "
          >
            <BookmarkIcon className="w-8 sm:w-5" />
            <p className="hidden sm:block uppercase"> saved</p>
          </NavLink>
          <NavLink
            className="flex pt-2"
            to="/userid/tagged"
            activeClassName=" text-blue-400 sm:text-black border-black border-solid sm:border-t "
          >
            <LinkIcon className="w-8 sm:w-5" />
            <p className="hidden sm:block uppercase"> tagged</p>
          </NavLink>
        </div>
        {/* dood taliin heseg */}
        <div className="w-full">
          <Switch>
            <Route exact path="/userid/">
              <UserNewsFeed data={null} />
            </Route>
            <Route path="/userid/channel" component={UserIgtv} />
            <Route path="/userid/saved" component={UserSaved} />
            <Route path="/userid/tagged" component={UserTagged} />
          </Switch>
        </div>
      </div>

      <Footer />
    </div>
  );
}
