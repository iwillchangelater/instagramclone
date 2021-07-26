import React from "react";

export default function PostImage({ imgsrc }) {
  return (
    <div className="w-full object-center">
      <img src={`${imgsrc}`} alt="zurag" />
    </div>
  );
}
