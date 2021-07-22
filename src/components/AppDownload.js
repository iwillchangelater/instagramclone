import React from "react";
import { Link } from "react-router-dom";
import appStore from "../source/appStore.png";
import googlePlay from "../source/googlePlay.png";
export default function AppDownload() {
  return (
    <div className=" mb-12">
      <p className="m-auto w-max my-4">Get the app</p>
      <div className="flex gap-3">
        <Link to="/reditect/14">
          <img src={appStore} className="h-12  w-40" alt="apppstore logo" />
        </Link>
        <Link to="/reditect/15">
          <img src={googlePlay} className="h-12 w-40" alt="googlePlay logo" />
        </Link>
      </div>
    </div>
  );
}
