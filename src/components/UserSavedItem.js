import React from "react";
import { Link } from "react-router-dom";
export default function UserSavedItem({ title, data }) {
  return (
    <Link to="/userid/saved/foldername/">
      <div className=" m-auto w-72 grid grid-rows-2 grid-cols-2 gap-1 bg-black relative">
        <img src={data[0]} alt="saved postimg" />
        <img src={data[1]} alt="saved postimg" />
        <img src={data[2]} alt="saved postimg" />
        <img src={data[3]} alt="saved postimg" />
        <div className="w-full h-full bg-black opacity-20 absolute"></div>
        <p className="text-white font-bold absolute bottom-3 left-3 text-xl">
          {title}
        </p>
      </div>
    </Link>
  );
}
