import React from "react";

const UserContext = React.createContext();

export const UserProvider = (props) => {
  return <UserContext.Provider value={}>
      {props.children}
  </UserContext.Provider>;
};
