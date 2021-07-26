import React from "react";
import AppDownload from "./AppDownload";
import userNull from "../source/useridNull.jpg";
export default function UserNewsFeed(props) {
  return (
    <div className="w-full">
      {!Boolean(props.data) && (
        <div className="mt-5 w-full md:flex flex-row-reverse justify-around">
          <div className="w-max m-auto text-center">
            <p className="font-bold text-xl mb-2">
              Start capturing and sharing your moments.
            </p>
            <p>get the app to share your first photo or video</p>
            <div className="w-max m-auto mt-10">
              <AppDownload paragraph="hidden" />
            </div>
          </div>
          <div className="w-full p-5 md:w-max md:p-5 ">
            <img
              src={userNull}
              className="w-full md:w-72"
              alt="if u have no post"
            />
          </div>
        </div>
      )}
    </div>
  );
}
