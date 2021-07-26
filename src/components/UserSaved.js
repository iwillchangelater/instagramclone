import React from "react";
import UserSavedItem from "./UserSavedItem";

export default function UserSaved() {
  const init = [
    {
      title: "All posts",
      data: [
        "https://picsum.photos/200/200?random=1",
        "https://picsum.photos/200/200?random=2",
        "https://picsum.photos/200/200?random=3",
        "https://picsum.photos/200/200?random=4",
      ],
    },
    {
      title: "super dummy file",
      data: [
        "https://picsum.photos/200/200?random=1",
        "https://picsum.photos/200/200?random=2",
        "https://picsum.photos/200/200?random=3",
        "https://picsum.photos/200/200?random=4",
      ],
    },
    {
      title: " ultra dummy file",
      data: [
        "https://picsum.photos/200/200?random=1",
        "https://picsum.photos/200/200?random=2",
        "https://picsum.photos/200/200?random=3",
        "https://picsum.photos/200/200?random=4",
      ],
    },
    {
      title: "god dummy file",
      data: [
        "https://picsum.photos/200/200?random=1",
        "https://picsum.photos/200/200?random=2",
        "https://picsum.photos/200/200?random=3",
        "https://picsum.photos/200/200?random=4",
      ],
    },
    {
      title: "ultra god  dummy file",
      data: [
        "https://picsum.photos/200/200?random=1",
        "https://picsum.photos/200/200?random=2",
        "https://picsum.photos/200/200?random=3",
        "https://picsum.photos/200/200?random=4",
      ],
    },
  ];
  return (
    <div className="w-full">
      <div className="w-full flex justify-between">
        <p className="text-gray-300 text-sm py-3">
          Only you can see what you've saved
        </p>
        <div className="text-blue-400 font-semibold py-2">+ New Collection</div>
      </div>
      {/* saved collections  */}
      <div className=" flex-wrap flex gap-2 m-auto lg:justify-start justify-center">
        {init.map((el) => (
          <UserSavedItem title={el.title} data={el.data} />
        ))}
      </div>
    </div>
  );
}
