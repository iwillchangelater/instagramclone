import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import Post from "./Post";
export default function Posts() {
  const { postData } = useContext(UserContext);
  return (
    <div>
      {postData.map((e) => {
        return (
          <Post
            img={"https://picsum.photos/900?random=2"}
            user={e.User}
            postimg={e.PostImg}
            likes={e.likes}
            postid={e.Postid}
            comment={e.Comments}
            date={e.Date}
          />
        );
      })}
    </div>
  );
}
