import React from "react";
import { useHistory } from "react-router-dom";

const LogContext = React.createContext();

export const LogProvider = (props) => {
  const history = useHistory();
  const login = (email, password) => {
    if (email === "admin" && password === "admin") {
      console.log(`email ${email} passowrd ${password}`);
      localStorage.setItem("token", 1);
      history.push("/home");
    } else {
      console.log(`email ${email} passowrd ${password}`);
      alert("turshiltiin server tul admin admin aar newter nuu");
    }
  };
  const register = (email, username, fullname, password) => {
    console.log(email, username, fullname, password);
    localStorage.setItem("token", 1);
    alert("turshilt tul burtgel hiigdelgui beldsen huudasruu ywuulsan bolno");
    history.push("/home");
  };
  return (
    <LogContext.Provider value={{ login, register }}>
      {props.children}
    </LogContext.Provider>
  );
};

export default LogContext;
