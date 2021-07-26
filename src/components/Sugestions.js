import React from "react";
import SugestionsItem from "./SugestionsItem";
export default function Sugestions({ data }) {
  return (
    <div>
      {data.map((e) => {
        return (
          <SugestionsItem
            img={e.proFileImg}
            name={e.username}
            reason={e.reason}
          />
        );
      })}
    </div>
  );
}
