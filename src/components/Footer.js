import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className=" flex flex-col items-center text-gray-400 font-light text-sm mb-10">
      <div>
        <div className="flex flex-wrap py-3 px-5 w-full justify-center">
          <Link to="/reditect/1" className="w-min px-2">
            About
          </Link>
          <Link to="/reditect/2" className="w-min px-2">
            Jobs
          </Link>
          <Link to="/reditect/3" className="w-min px-2">
            Help
          </Link>
          <Link to="/reditect/4" className="w-min px-2">
            API
          </Link>
          <Link to="/reditect/5" className="w-min px-2">
            Privacy
          </Link>
          <Link to="/reditect/6" className="w-min px-2">
            Terms
          </Link>
          <Link to="/reditect/7" className="w-min px-2">
            Top
          </Link>
          <Link to="/reditect/8" className="w-min px-2">
            {" "}
            Accounts
          </Link>
          <Link to="/reditect/9" className="w-min px-2">
            Hashtags
          </Link>
          <Link to="/reditect/10" className="w-min px-2">
            Locations
          </Link>
        </div>
        <div className="text-center">English 2021 Instagram from facebook</div>
      </div>
    </footer>
  );
}
